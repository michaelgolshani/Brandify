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
        description="Introducing the GalaxyGlide shoes by NovaStride. These revolutionary shoes combine cutting-edge technology with sleek design. With built-in LED lights that illuminate your every step and automatic laces that ensure a perfect fit, GalaxyGlide shoes offer a futuristic experience like no other. Step into the world of sci-fi fashion and let your feet shine with every stride.",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand1)

    brand2 = Brand(
        name="QuantumAudio",
        story="At QuantumAudio, we are driven by the belief that music has the power to ignite emotions and transcend boundaries. Our headphone company is built on the foundation of delivering immersive sound experiences that transport you to the heart of every melody. With uncompromising craftsmanship, cutting-edge technology, and a deep passion for audio perfection, we invite you to indulge in the sonic wonders that await you with QuantumAudio.",
        description="QuantumAudio is a futuristic headphone company that revolutionizes the way you experience sound. Our cutting-edge technology and sleek designs transport you to immersive audio realms, delivering crystal-clear sound quality and deep bass. Elevate your music, gaming, and movie experiences to new dimensions with SonicWave headphones.",
        admin_id=user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand2)

    brand3 = Brand(
        name="Eneryeti",
        story="Introducing Eneryeti energy drinks, crafted with passion and purpose to revitalize your mind, body, and spirit. With a harmonious blend of natural ingredients, it ignites an invigorating experience, empowering you to seize each day with unwavering vitality. Embrace the essence of limitless energy and unlock your true potential with Eneryeti",
        description="At Eneryeti, we pride ourselves on standing apart from the rest by embodying a commitment to excellence in every sip. Our energy drink is meticulously formulated to deliver a harmonious balance of taste, quality, and performance. With our unwavering dedication to sourcing the finest natural ingredients and our relentless pursuit of innovation, we redefine the boundaries of what an energy drink can truly be. Join us on this exhilarating journey and experience the Eneryeti difference for yourself.",
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
