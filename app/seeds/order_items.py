from app.models import db, User, Brand, Product, Order, OrderItem, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_order_items():
    # Get the first user, brand, and product from the database
    user = User.query.first()
    brand = Brand.query.first()
    product = Product.query.first()

    # Create an order item for the first order with the product
    order_item_1 = OrderItem(
        product_id=product.id,
        order_id=1,  # Assuming the first order has ID 1
        quantity=1
    )
    db.session.add(order_item_1)

    # Create an order item for the second order with the product
    order_item_2 = OrderItem(
        product_id=product.id,
        order_id=2,  # Assuming the second order has ID 2
        quantity=1
    )
    db.session.add(order_item_2)

    # Create an order item for the third order with the product
    order_item_3 = OrderItem(
        product_id=product.id,
        order_id=3,  # Assuming the third order has ID 3
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
