from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from .brand_product import Brand, Product, OrderItem


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable = False)
    last_name = db.Column(db.String(255),nullable = False)
    profile_image = db.Column(db.String(255))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

      # Relationships
    brands = db.relationship('Brand', back_populates='user', cascade="delete-orphan,all")  #added cascade delete
    products = db.relationship('Product', back_populates='user', cascade="delete-orphan,all")

    order = db.relationship('Order', back_populates='owner', cascade="delete-orphan,all")
    reviews = db.relationship('Review', back_populates='user', cascade="delete, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):

        brand_dicts = [brand.to_dict() for brand in self.brands]
        product_dicts = [product.to_dict() for product in self.products]

        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'brands': brand_dicts,
            'products': product_dicts
        }
