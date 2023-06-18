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
        name = "GalaxyGlide",
        price=99.99,
        description = "Introducing the GalaxyGlide shoes by NovaStride. These revolutionary shoes combine cutting-edge technology with sleek design. With built-in LED lights that illuminate your every step and automatic laces that ensure a perfect fit, GalaxyGlide shoes offer a futuristic experience like no other. Step into the world of sci-fi fashion and let your feet shine with every stride.",
        images= "https://bdc2020.o0bc.com/wp-content/uploads/2023/02/sp23-jd-bb-rev-ltcc-tatum1-zoo-product-superiority-detail-2-ta-dx5572-001-63f25202da532-scaled.jpg",
        features='Lightweight,Auto-Lace,LED Lights',
        brand_id=brand1.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product1)

    product2 = Product(
        name= "SonicWave",
        price=99.99,
        description = "Immerse yourself in a sonic journey like never before with these state-of-the-art headphones. With their sleek and futuristic design, advanced noise-cancellation technology, and crystal-clear audio quality, SonicWave headphones deliver an unparalleled audio experience that transports you to the future of sound.",
        images='https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950//products/2022/29/749/g749PX8BK-o_other5.jpg,https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950//products/2022/29/749/g749PX8BK-o_other7.jpg',
        features='Noise-Canceling,Over-the-Ear,Bluetooth',
        brand_id=brand2.id,
        owner_id = user2.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product2.images = product2.images.split(',')
    # product2.features = product2.features.split(',')
    db.session.add(product2)

    product3 = Product(
        name= "Cheescake",
        price=3.99,
        description = "Indulge in the electrifying fusion of energy and dessert with our Cheese Cake flavored energy drink. Experience the tantalizing blend of creamy richness and invigorating power in every sip. Unleash your taste buds and fuel your day with this irresistible energy boost!",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan2.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
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
