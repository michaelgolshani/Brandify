from app.models import db, User, Brand,Review,Product, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
    # Seeder 1
    user1 = User.query.get(1)
    product1 = Product.query.get(1)

    review1 = Review(
        review='This is a great product!',
        product_id=product1.id,
        user=user1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(review1)

    # Seeder 2
    user2 = User.query.get(2)
    product2 = Product.query.get(2)
    review2 = Review(
        review='I highly recommend this product.',
        product_id=product2.id,
        user=user2,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(review2)

    # Seeder 3
    user3 = User.query.get(3)
    product3 = Product.query.get(3)
    review3 = Review(
        review='Not satisfied with the product.',
        product_id=product3.id,
        user=user3,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(review3)

    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE TABLE {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
