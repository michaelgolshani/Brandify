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

    brand4 = Brand.query.get(4)

    brand5 = Brand.query.get(5)


    product1 = Product(
        name = "Galaxy Glide",
        price=99.99,
        description = "Introducing the Galaxy Glide shoes by NovaStride. These revolutionary shoes combine cutting-edge technology with sleek design. With built-in LED lights that illuminate your every step and automatic laces that ensure a perfect fit, GalaxyGlide shoes offer a futuristic experience like no other. Step into the world of sci-fi fashion and let your feet shine with every stride.",
        images= "https://i.imgur.com/s3ZLVwS.jpg,https://i.imgur.com/cQ05RV6.jpg,https://i.imgur.com/z0BqfVj.jpg,https://i.imgur.com/8lAjVOt.jpg,https://i.imgur.com/YicWBN3.jpg",
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

    product9 = Product(
        name = "Blue Novas",
        price=79.99,
        description = "Introducing the Blue Novas - a revolutionary blue sci-fi shoe that will transport you to the future of footwear technology. With its sleek design and advanced features, this shoe is not just a fashion statement but a true embodiment of innovation. Equipped with a state-of-the-art propulsion system, the shoe harnesses the power of energy conversion, giving you an extra spring in your stride. As you walk or run, each footstrike compresses a series of micro-kinetic cells embedded in the sole, generating a burst of kinetic energy that propels you forward. This innovative mechanism not only provides unparalleled speed and efficiency but also reduces impact on your joints, making it ideal for both athletic activities and everyday wear.",
        images= "https://i.imgur.com/FztHHU6.jpg,https://i.imgur.com/w2Ii26v.jpg,https://i.imgur.com/3lhFY3n.jpg,https://i.imgur.com/Au1zgdy.jpg",
        features='Ice-Break,Terrain-Traction,Smart Insole',
        brand_id=brand1.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product9)

    product10 = Product(
        name = "Infernos",
        price=89.99,
        description = "Introducing the Infernos - a remarkable red sci-fi shoe that ignites your imagination and propels you into a world of futuristic fashion and technological prowess. This shoe is a striking fusion of style, innovation, and performance, designed to make a bold statement with every step. The Infernos features a captivating design that exudes confidence and power. Its vibrant red color, reminiscent of a blazing fire, captures attention and demands admiration. The sleek lines and dynamic contours of the shoe's silhouette create an aerodynamic appearance, suggesting speed and agility.",
        images= "https://i.imgur.com/IRWOy4o.jpg,https://i.imgur.com/8lpNxc0.jpg,https://i.imgur.com/hlz12Z8.jpg,https://i.imgur.com/KHeIW4T.jpg",
        features='Flamethrower,Kinetic Energy,Terrain-Traction',
        brand_id=brand1.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product10)

    product11 = Product(
        name = "SolarFlares",
        price=99.99,
        description = "Introducing the SolarFlares - an exceptional orange shoe inspired by the radiant energy of the sun. This solar-themed footwear combines captivating aesthetics with advanced functionality, allowing you to shine with every step you take. Its vibrant orange color, reminiscent of a blazing sunset, captures the essence of solar energy and infuses it into a captivating design. Equipped with a responsive cushioning system, the shoe provides excellent shock absorption, allowing for a smooth and comfortable stride. Each step feels cushioned and supported, reducing fatigue and allowing you to push your limits.",
        images= "https://i.imgur.com/4Gj2pmy.jpg,https://i.imgur.com/FWmnLl4.jpg,https://i.imgur.com/SwzPS8H.jpg,https://i.imgur.com/4SMDAMQ.jpg",
        features='Energy Return,Adaptive-Fit,Re-Charge',
        brand_id=brand1.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product11)

    product12 = Product(
        name = "Majestic Set",
        price=29.99,
        description = "Introducing the Majestic Set—a captivating collection of purple makeup essentials that exude elegance and regal allure. This carefully curated bundle is designed to elevate your beauty routine, allowing you to indulge in the luxurious world of majestic hues and create enchanting looks fit for royalty. Each product in this exquisite set has been thoughtfully selected to complement one another, ensuring effortless coordination and endless possibilities for stunning makeup looks.Embrace the allure of the Majestic Set with the velvety smooth eyeshadow palette that boasts a mesmerizing array of purple hues, ranging from deep amethyst to soft lavender.",
        images= "https://i.imgur.com/YM9eH0V.jpg,https://i.imgur.com/bcYVTx1.jpg,https://i.imgur.com/vUGquXa.jpg,https://i.imgur.com/NEolUTb.jpg",
        features='Purple Hues,Versatile Palette,Radiant Glow',
        brand_id=brand4.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product12)

    product13 = Product(
        name = "Sunbeam Collection",
        price=29.99,
        description = "Introducing the Sunbeam Collection—a radiant and captivating makeup set that embodies the essence of warm sunshine and brings a burst of luminous yellow to your beauty routine. This collection is designed to evoke joy, radiance, and a sun-kissed glow that will leave you feeling vibrant and full of positive energy. From sunny yellows to shimmering golds, this palette empowers you to create captivating eye looks that radiate warmth and positivity.",
        images= "https://i.imgur.com/snNrjgM.jpg,https://i.imgur.com/23Znxbk.jpg,https://i.imgur.com/wtLGwaR.jpg,https://i.imgur.com/nmzDOH4.jpg",
        features='Vibrant Shades,Sunlit Highlighter,Radiant Glow',
        brand_id=brand4.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product13)

    product14 = Product(
        name = "Sapphire Glam Kit",
        price=29.99,
        description = "Introducing the Sapphire Glam Kit—a mesmerizing makeup collection that encapsulates the beauty and allure of deep blue sapphires. Inspired by the depths of the ocean and the captivating sparkle of precious gemstones, this glamorous kit is designed to unleash your inner radiance and transport you to a world of timeless elegance. Dive into the depths of the ocean with deep navy blues. Whether you prefer a subtle everyday look or a bold and daring statement, this palette allows you to effortlessly create captivating eye looks that command attention.",
        images= "https://i.imgur.com/NeMLv1j.jpg,https://i.imgur.com/Tl8U1y7.jpg,https://i.imgur.com/LB08qKn.jpg,https://i.imgur.com/oSLin2u.jpg",
        features='Sapphire Eyeshadow,Vibrant Shades,Versatile Eyeliner',
        brand_id=brand4.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product14)

    product15 = Product(
        name = "Verdant Kit",
        price=29.99,
        description = "Introducing the Verdant Beauty Kit—a stunning collection of green-infused makeup essentials that brings the freshness and vibrancy of nature to your beauty routine. This carefully curated kit celebrates the enchanting shades of green, allowing you to embrace the rejuvenating and captivating energy that comes with this lush color palette. Dive into the depths of verdant forests with deep green hues, capture the freshness of spring with bright emerald shades, or add a touch of intrigue with shimmering moss tones.",
        images= "https://i.imgur.com/eH6G3xR.jpg,https://i.imgur.com/zwcDo3Z.jpg,https://i.imgur.com/c6T382w.jpg,https://i.imgur.com/6vZ0167.jpg,https://i.imgur.com/8bo17ES.jpg",
        features='Green Shades,Green Blush,Versatile Eyeliner',
        brand_id=brand4.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product15)

    product16 = Product(
        name = "iPear",
        price=999.99,
        description = "Introducing the iPear, a revolutionary device that seamlessly combines cutting-edge technology with the elegance and simplicity that Pear is renowned for. With its sleek design, advanced features, and intuitive user interface, the iPear takes your digital experience to new heights. The iPear boasts a vibrant and immersive display that brings your content to life with stunning clarity and rich colors. The iPear is not just a device; it's a gateway to a world of possibilities. From a vast array of apps designed to enhance your productivity and creativity to an extensive library of entertainment options, the iPear offers a wealth of experiences at your fingertips.",
        images= "https://i.imgur.com/LWZ4alZ.jpg,https://i.imgur.com/c38nLWf.jpg,https://i.imgur.com/BoeBWm6.jpg,https://i.imgur.com/7QmDGtf.jpg,https://i.imgur.com/9K3YSC4.jpg",
        features='120hz Pro-Motion,Titanium,5G',
        brand_id=brand5.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product16)

    product17 = Product(
        name = "Pear Vision Pro",
        price=3299.99,
        description = "Step into a world of limitless possibilities with the Pear Vision Pro Virtual Reality (VR) Headset. Designed to transport you to extraordinary realms and redefine your perception of reality, the Pear Vision Pro offers an immersive and captivating VR experience like no other. Featuring cutting-edge technology and ergonomic design, the Pear Vision Pro takes your virtual adventures to new heights. Whether you're exploring distant galaxies, embarking on thrilling adventures, or immersing yourself in interactive simulations, the Pear Vision Pro ensures a truly captivating visual experience.",
        images= "https://i.imgur.com/PO1ASbR.jpg,https://i.imgur.com/8ywCPXA.jpg,https://i.imgur.com/8aK7MDt.jpg,https://i.imgur.com/PwOpULF.jpg",
        features='8k,See-Through,Retina Display',
        brand_id=brand5.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product17)


    product18 = Product(
        name = "iPac",
        price=1299.99,
        description = "Introducing the iPac, a groundbreaking product that redefines your digital experience with its unmatched performance, stunning display, and seamless integration into your daily life. Designed by Pear, the iPac combines the power of a personal computer with the elegance and simplicity that Pear is known for. The iPac features a sleek and modern design that enhances any workspace, whether it's your home office, creative studio, or professional environment. Its slim profile and clean lines make a bold statement while seamlessly blending into your surroundings. With its premium build quality, the iPac exudes a sense of sophistication and craftsmanship.",
        images= "https://i.imgur.com/wOJ4SA7.jpg, https://i.imgur.com/L8Jglde.jpg,https://i.imgur.com/yHGxfHZ.jpg,https://i.imgur.com/gMIbHrr.jpg,https://i.imgur.com/FvztgFZ.jpg ",
        features='120hz Pro-Motion,Bluetooth,Retina Display',
        brand_id=brand5.id,
        owner_id = user1.id,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    # product1.images = product1.images.split(',')
    # product1.features = product1.features.split(',')
    db.session.add(product18)




    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
        # db.session.execute(f"TRUNCATE table {SCHEMA}.brand_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
        # db.session.execute(text("DELETE FROM board_categories"))

    db.session.commit()
