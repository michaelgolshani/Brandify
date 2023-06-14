from app.models import db, User, Brand,Product, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime



def seed_products():
    user1 = User.query.get(1)
    brand1 = Brand.query.get(1)
    user2 = User.query.get(2)
    brand2 = Brand.query.get(2)
    user3 = User.query.get(3)
    brand3 = Brand.query.get(3)


    product1 = Product(
        name = "Air Runners",
        price=99.99,
        brand_id=brand1.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(product1)

    product2 = Product(
        name= "Corsair Headphones",
        price=99.99,
        brand_id=brand2.id,
        owner_id = user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(product2)

    product3 = Product(
        name= "Apprentice",
        price=99.99,
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(product3)

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        # db.session.execute(text("DELETE FROM board_categories"))

    db.session.commit()
