from app.models import db, User, Brand, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_brands():
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)

    brand1 = Brand(
        name="Nike",
        story="We create shoes that will last for a lifetime",
        description="Quality brand that will serve you",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand1)

    brand2 = Brand(
        name="Corsair",
        story="The best headphones in the market",
        description="Bluetooth 5.0, 1ms input lag, the future is here",
        admin_id=user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand2)

    brand3 = Brand(
        name="Hypersabers",
        story="We came tofether to build quality and affordable ligthsabers",
        description="Polycarbonate blade, great duel combat",
        admin_id=user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand3)

    db.session.commit()

def undo_brands():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.brands RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM brands"))
        # db.session.execute(text("DELETE FROM brand_categories"))

    db.session.commit()
