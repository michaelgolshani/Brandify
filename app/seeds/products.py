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
        name = "Galaxy Glide",
        price=99.99,
        description = "Introducing the Galaxy Glide shoes by NovaStride. These revolutionary shoes combine cutting-edge technology with sleek design. With built-in LED lights that illuminate your every step and automatic laces that ensure a perfect fit, GalaxyGlide shoes offer a futuristic experience like no other. Step into the world of sci-fi fashion and let your feet shine with every stride.",
        images= "https://i.imgur.com/s3ZLVwS.jpg,",
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

    product4 = Product(
        name= "Peach",
        price=3.99,
        description = "Remember that sweet, floral and fragrant smell of fresh, ripe peaches? We have perfectly distilled that tantalizing flavour into this can. This drink is artfully made with cider, real fruits and nothing short but all natural ingredients. ",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can3.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan3.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Peach_Condensation.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
    db.session.add(product4)

    product5 = Product(
        name= "Rasberry",
        price=3.99,
        description = "A no fuss fizzy drink for the ones who love simplicity.  It's lightly carbonated, tarty and a bit sweet, with a delightful, hint of rosiness - just like freshly picked raspberries.  It's a cold crisp refreshment for any season of the year.",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can8.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan8.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Raspberry_Condensation.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
    db.session.add(product5)

    product6 = Product(
        name= "Grape",
        price=3.99,
        description = "We channeled our nostalgic childhood memories with the classic fruit juice that we loved. We promise you, this one is a great any-time, any-where and any-age drink. It offers that refreshing, crisp and bold flavour of real grape juice with a fun twist of slight bubbly sensation.",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can4.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan4.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Grape_Condensation.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
    db.session.add(product6)

    product7 = Product(
        name= "Cucumber",
        price=3.99,
        description = "It tastes like a tropical holiday. Only that you can have it anytime you want without hopping on a plane. It's fresh and summery, with a gentle hint of cucumber and a refreshing twist of lemon.",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can5.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan5.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Cucumber_Condensation.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
    db.session.add(product7)

    product8 = Product(
        name= "Blood Orange",
        price=3.99,
        description = "Only nature's best without artificial enhancers. We bring you a drink inspired by Italy's classic Spritz Veneziano. Enjoy an explosion of sweet notes from freshly squeezed blood orange as it fizzles in your tongue with a slightly bitter and soft tang finish.",
        images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can1.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan1.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_BloodOrange_Condensation.jpg',
        features = '100% Natural Ingredients,No Artificial Additives or Sweeteners,No Crash',
        brand_id=brand3.id,
        owner_id = user3.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product3.images = product3.images.split(',')
    # product3.features = product3.features.split(',')
    db.session.add(product8)


    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        # db.session.execute(text("DELETE FROM board_categories"))

    db.session.commit()
