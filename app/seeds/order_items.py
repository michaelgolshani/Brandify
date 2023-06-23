from app.models import db, User, Brand, Product, Order, OrderItem, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_order_items():

    user = User.query.first()
    brand = Brand.query.first()
    product = Product.query.first()


    order_item_1 = OrderItem(
        product_id=product.id,
        order_id=1,
        quantity=2
    )
    db.session.add(order_item_1)


    order_item_2 = OrderItem(
        product_id=product.id,
        order_id=2,
        quantity=1
    )
    db.session.add(order_item_2)


    order_item_3 = OrderItem(
        product_id=product.id,
        order_id=3,  
        quantity=1
    )
    db.session.add(order_item_3)

    db.session.commit()


def undo_order_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.order_items RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM order_items"))
        # db.session.execute(text("DELETE FROM board_categories"))

    db.session.commit()
