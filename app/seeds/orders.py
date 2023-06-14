from app.models import db, User, Brand,Product, Order,OrderItem, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_orders():
    order1 = Order(
        status="Pending",
        created_at=datetime.now(),
        updated_at=datetime.now(),
        ordered=False,
        owner_id=1  # Set the owner ID for the first order
    )
    db.session.add(order1)
   

    order2 = Order(
        status="Shipped",
        created_at=datetime.now(),
        updated_at=datetime.now(),
        ordered=True,
        owner_id=2  # Set the owner ID for the second order
    )
    db.session.add(order2)



    order3 = Order(
        status="Delivered",
        created_at=datetime.now(),
        updated_at=datetime.now(),
        ordered=True,
        owner_id=3  # Set the owner ID for the third order
    )
    db.session.add(order3)
    db.session.commit()


def undo_orders():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.orders RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM orders"))
        # db.session.execute(text("DELETE FROM board_categories"))

    db.session.commit()
