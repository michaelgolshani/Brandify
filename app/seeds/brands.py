from app.models import db, User, Brand, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_brands():
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)

    brand1 = Brand(
        name="NovaStride",
        story="NovaStride is a sci-fi shoe company that embraces the spirit of exploration and adventure. Our footwear is inspired by distant galaxies and futuristic technology, providing unparalleled comfort, style, and performance. Step into the future with NovaStride and let your feet journey to new frontiers.",
        description="Shoes from the Future",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand1)

    brand2 = Brand(
        name="QuantumAudio",
        story="At QuantumAudio, we are driven by the belief that music has the power to ignite emotions and transcend boundaries. Our headphone company is built on the foundation of delivering immersive sound experiences that transport you to the heart of every melody. With uncompromising craftsmanship, cutting-edge technology, and a deep passion for audio perfection, we invite you to indulge in the sonic wonders that await you with QuantumAudio.",
        description="Audio you can feel",
        admin_id=user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand2)

    brand3 = Brand(
        name="Eneryeti",
        story="Introducing Eneryeti energy drinks, crafted with passion and purpose to revitalize your mind, body, and spirit. With a harmonious blend of natural ingredients, it ignites an invigorating experience, empowering you to seize each day with unwavering vitality. Embrace the essence of limitless energy and unlock your true potential with Eneryeti",
        description="Great nights, better mornings",
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
