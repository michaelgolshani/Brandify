from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

# product_variant_association = db.Table(
#     'product_association',
#     db.Column('product_id', db.Integer, db.ForeignKey('products.id'), primary_key=True),
#     db.Column('product_variant_id', db.Integer, db.ForeignKey('product_variants.id'), primary_key=True),
#     schema=SCHEMA
# )



class Brand(db.Model):
    __tablename__ = 'brands'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255),nullable=False)
    story = db.Column(db.String(450), nullable = False)
    description = db.Column(db.String(550))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    admin_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='brands')
    products = db.relationship('Product', back_populates='product_brand', cascade='delete')
    orders = db.relationship('Order', back_populates='brand', cascade='delete')

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    def to_dict(self):

        product_dicts = [product.to_dict() for product in self.products]
        order_dicts = [order.to_dict() for order in self.orders]

        return {
            'id': self.id,
            'name': self.name,
            'story': self.story,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'admin_id': self.admin_id,
            'products': product_dicts,
            'orders': order_dicts
        }


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable = False)
    description = db.Column(db.String(400), nullable = False)
    images = db.Column(db.String, nullable=False, default=[])
    features = db.Column(db.String, nullable=False, default=[])
    inventory = db.Column(db.Integer, default = 10)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    brand_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('brands.id')), nullable=False)

    user = db.relationship('User', back_populates='products')
    product_brand = db.relationship('Brand', back_populates='products')
    # product_variants = db.relationship('ProductVariant', back_populates="product", cascade="delete")
    # product_features = db.relationship('ProductFeature', back_populates='product', cascade='delete')

    # orders = db.relationship('Order', secondary='order_items', cascade='delete')
    order_items = db.relationship('OrderItem', cascade='delete')
    reviews = db.relationship('Review', back_populates='product', cascade="delete, delete-orphan")

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    def to_dict(self):
        # variants = [variant.to_dict() for variant in self.product_variants]
        # features = [feature.to_dict() for feature in self.product_features]
        return {
            'id': self.id,
            'name':self.name,
            'price': self.price,
            'description': self.description,
            'images': self.images.split(',') if self.images else [],
            'features' : self.features.split(',') if self.features else [],
            # 'image': self.image,
            'inventory': self.inventory,
            'brand_id': self.brand_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'owner_id': self.owner_id,
            'brand_id': self.brand_id,
            # 'variants': variants,
            # 'features': features,
        }

    # def parse_images(self):
    #     return self.images.split(',') if self.images else []

# class ProductVariant(db.Model):
#     __tablename__ = 'product_variants'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     color = db.Column(db.String(50))
#     size = db.Column(db.String(50))

#     products = db.relationship('Product', secondary=product_variant_association, back_populates='product_variants')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'price': self.price,
#             'color': self.color,
#             'size': self.size
#         }

# class ProductFeature(db.Model):
#     __tablename__ = 'product_features'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), nullable=False)
#     product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)

#     product = db.relationship('Product', back_populates='product_features')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name
#         }

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
    created_at = db.Column(db.DateTime,nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False,default=datetime.now)
    ordered = db.Column(db.Boolean, default=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'), nullable=False)

    owner = db.relationship('User', back_populates='order')
    # order_items = db.relationship('OrderItem', backref='order', cascade='all, delete-orphan')
    order_items = db.relationship('OrderItem', back_populates='orders', cascade='delete')
    brand = db.relationship('Brand', back_populates='orders')

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
            'brand_id': self.brand_id,
            'order_items': order_items_list
        }


class OrderItem(db.Model):
    __tablename__ = 'order_items'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False)
    quantity = db.Column(db.Integer, default=1, nullable=False)

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
