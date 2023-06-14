from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime



class Brand(db.Model):
    __tablename__ = 'brands'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    story = db.Column(db.String(255))
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    admin_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='brands')
    products = db.relationship('Product', back_populates='product_brand', cascade='delete')

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):

        product_dicts = [product.to_dict() for product in self.products]

        return {
            'id': self.id,
            'name': self.name,
            'story': self.story,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'admin_id': self.admin_id
        }


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable = False)
    inventory = db.Column(db.Integer, default = 10)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    brand_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('brands.id')), nullable=False)

    user = db.relationship('User', back_populates='products')
    product_brand = db.relationship('Brand', back_populates='products')

    # orders = db.relationship('Order', secondary='order_items', cascade='delete')
    order_items = db.relationship('OrderItem', cascade='delete')
    reviews = db.relationship('Review', back_populates='product', cascade="delete, delete-orphan")

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):
        return {
            'id': self.id,
            'name':self.id,
            'review': self.review,
            'price': self.price,
            'brand_id': self.brand_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'admin_id': self.admin_id
        }


class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(255))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'product_id': self.product_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id
        }


class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)
    ordered = db.Column(db.Boolean, default=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

    owner = db.relationship('User', back_populates='order')
    # order_items = db.relationship('OrderItem', backref='order', cascade='all, delete-orphan')
    order_items = db.relationship('OrderItem', back_populates='orders', cascade='delete')

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):
        order_items_list = [item.to_dict() for item in self.order_items]
        return {
            'id': self.id,
            'ordered': self.ordered,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'owner_id': self.owner_id,
            'order_items': order_items_list
        }


class OrderItem(db.Model):
    __tablename__ = 'order_items'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')))
    quantity = db.Column(db.Integer, default=1)

    product = db.relationship('Product', back_populates='order_items')
    orders = db.relationship('Order', back_populates='order_items')


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }
