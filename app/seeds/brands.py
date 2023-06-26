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
        theme="modern",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand1)

    brand2 = Brand(
        name="Quantum Audio",
        story="At QuantumAudio, we are driven by the belief that music has the power to ignite emotions and transcend boundaries. Our headphone company is built on the foundation of delivering immersive sound experiences that transport you to the heart of every melody. With uncompromising craftsmanship, cutting-edge technology, and a deep passion for audio perfection, we invite you to indulge in the sonic wonders that await you with QuantumAudio.",
        description="Audio you can feel",
        theme="modern",
        admin_id=user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand2)

    brand3 = Brand(
        name="Eneryeti",
        story="Introducing Eneryeti energy drinks, crafted with passion and purpose to revitalize your mind, body, and spirit. With a harmonious blend of natural ingredients, it ignites an invigorating experience, empowering you to seize each day with unwavering vitality. Embrace the essence of limitless energy and unlock your true potential with Eneryeti",
        description="Great nights, better mornings",
        theme="poppy",
        admin_id=user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand3)

    db.session.commit()

    brand4 = Brand(
        name="DivineGlow",
        story="The journey of Divine Glow began with its founder, Ava Mitchell, a visionary artist with a deep passion for beauty and self-expression. Ava believed that makeup had the power to uplift, inspire, and bring out the inner radiance that dwells within every individual. Driven by this belief, she embarked on a quest to create a brand that would redefine the beauty landscape. With meticulous attention to detail and a commitment to quality, Divine Glow was meticulously crafted to deliver exceptional products that marry innovation with elegance. Each cosmetic creation is thoughtfully designed to enhance natural features while celebrating diversity, inviting individuals of all backgrounds to embark on a transformative beauty journey.",
        description="Illuminate Your Beauty",
        theme="poppy",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand4)

    brand5 = Brand(
        name="Pear",
        story="In a market where technology and design converge, Pear stands out as a brand name that captures the essence of freshness, simplicity, and refined elegance. It has the potential to become a symbol of innovation and style, appealing to individuals who appreciate the beauty of simplicity and seek products that seamlessly integrate into their lives.Welcome to the world of Pear, where innovation meets elegance, and simplicity meets sophistication. Discover the delightful experience that Pear has to offer and let it become your trusted companion in a world of technological marvels and refined aesthetics.",
        description="Embrace the Brilliance",
        theme="modern",
        admin_id=user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    db.session.add(brand5)

    db.session.commit()

def undo_brands():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.brands RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM brands"))
        # db.session.execute(text("DELETE FROM brand_categories"))

    db.session.commit()
