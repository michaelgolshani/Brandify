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
        # images= "https://i.imgur.com/s3ZLVwS.jpg,https://i.imgur.com/cQ05RV6.jpg,https://i.imgur.com/z0BqfVj.jpg,https://i.imgur.com/8lAjVOt.jpg,https://i.imgur.com/YicWBN3.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/nike-shoe-future.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/product1_1.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/product1_2.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/product1_3.jpg',
        image5 = 'https://brandify.s3.us-west-1.amazonaws.com/product1-4.jpg',
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
        # images='https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950//products/2022/29/749/g749PX8BK-o_other5.jpg,https://images.crutchfieldonline.com/ImageHandler/trim/3000/1950//products/2022/29/749/g749PX8BK-o_other7.jpg',
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/sonicwave-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/sonicwave-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/sonicwave-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/sonicwave-4.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan2.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can2.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan2.jpg',
        image3= 'https://shapes-theme-soda.myshopify.com/cdn/shop/products/TVA_ShapesTheme_NonAlcho_Watermelon_Condensation.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can3.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan3.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Peach_Condensation.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can3.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan3.jpg',
        image3 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Peach_Condensation.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can8.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan8.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Raspberry_Condensation.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can8.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan8.jpg',
        image3 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Raspberry_Condensation.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can4.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan4.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Grape_Condensation.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can4.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan4.jpg',
        image3 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Grape_Condensation.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can5.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan5.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Cucumber_Condensation.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can5.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan5.jpg',
        image3 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_Cucumber_Condensation.jpg',
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
        # images ='https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can1.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan1.jpg,https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_BloodOrange_Condensation.jpg',
        image1 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/Can1.jpg',
        image2 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TiltedCan1.jpg',
        image3 = 'https://cdn.shopify.com/s/files/1/0640/0213/0141/products/TVA_ShapesTheme_NonAlcho_BloodOrange_Condensation.jpg',
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
        description = "The Blue Novas is a futuristic sci-fi shoe revolutionizing footwear technology. Its sleek design and advanced features embody innovation. With a state-of-the-art propulsion system, each footstrike compresses micro-kinetic cells in the sole, generating a burst of energy that propels you forward. Experience unparalleled speed, efficiency, and reduced impact on joints.",
        # images= "https://i.imgur.com/FztHHU6.jpg,https://i.imgur.com/w2Ii26v.jpg,https://i.imgur.com/3lhFY3n.jpg,https://i.imgur.com/Au1zgdy.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/blue-novas-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/blue-novas-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/blue-novas-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/blue-novas-4.jpg',
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
        description = "Infernos is a remarkable sci-fi shoe that ignites imagination and propels you into a world of futuristic fashion. This shoe merges style, innovation, and performance, making a bold statement with every step. The vibrant red color demands attention, while sleek lines and dynamic contours suggest speed and agility. Infernos, where style meets the future.",
        # images= "https://i.imgur.com/IRWOy4o.jpg,https://i.imgur.com/8lpNxc0.jpg,https://i.imgur.com/hlz12Z8.jpg,https://i.imgur.com/KHeIW4T.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/infernos-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/infernos-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/infernos-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/infernos-4.jpg',
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
        description = "SolarFlares is an exceptional orange shoe inspired by the radiant energy of the sun. This solar-themed footwear combines captivating aesthetics with advanced functionality, letting you shine with every step. Each stride feels cushioned and supported, reducing fatigue and pushing your limits. SolarFlares, where style meets comfort and the sun's energy fuels your journey.",
        # images= "https://i.imgur.com/4Gj2pmy.jpg,https://i.imgur.com/FWmnLl4.jpg,https://i.imgur.com/SwzPS8H.jpg,https://i.imgur.com/4SMDAMQ.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/solar-flares-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/solar-flares-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/solar-flares-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/solar-flares-4.jpg',
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
        description = "The Majestic Set is a captivating collection of purple makeup essentials, exuding elegance and regal allure. Elevate your beauty routine with this curated bundle, indulging in a world of majestic hues fit for royalty. Embrace the allure with the velvety smooth eyeshadow palette, boasting a mesmerizing array of purple shades. Majestic Set, where elegance meets enchantment.",
        # images= "https://i.imgur.com/YM9eH0V.jpg,https://i.imgur.com/bcYVTx1.jpg,https://i.imgur.com/vUGquXa.jpg,https://i.imgur.com/NEolUTb.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-purple-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-purple-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-purple-3.jpg',
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
        description = "Introducing Sunbeam Collection: a radiant and captivating makeup set embodying warm sunshine. Bursting with luminous yellow, it brings joy, radiance, and a sun-kissed glow to your beauty routine. From sunny yellows to shimmering golds, this palette empowers you to create captivating eye looks radiating warmth and positivity. Sunbeam Collection, where sunshine meets vibrant beauty.",
        # images= "https://i.imgur.com/snNrjgM.jpg,https://i.imgur.com/23Znxbk.jpg,https://i.imgur.com/wtLGwaR.jpg,https://i.imgur.com/nmzDOH4.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-yellow-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-yellow-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-yellow-3.jpg',
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
        description = "The Sapphire Glam Kit is a mesmerizing makeup collection inspired by deep blue sapphires. Capturing the allure of the ocean and precious gemstones, this glamorous kit unleashes your inner radiance. Dive into deep navy blues, creating subtle everyday looks or bold statements that command attention. Sapphire Glam Kit, where elegance meets captivating beauty.",
        # images= "https://i.imgur.com/NeMLv1j.jpg,https://i.imgur.com/Tl8U1y7.jpg,https://i.imgur.com/LB08qKn.jpg,https://i.imgur.com/oSLin2u.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-blue-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-blue-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-blue-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-blue-4.jpg',
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
        description = "The Verdant Beauty Kit is a stunning collection of green-infused makeup essentials, bringing the freshness of nature to your routine. This carefully curated kit celebrates enchanting green shades, embracing rejuvenating and captivating energy. Dive into verdant forests with deep greens, capture spring's freshness with emerald hues, or add intrigue with shimmering moss tones.",
        # images= "https://i.imgur.com/eH6G3xR.jpg,https://i.imgur.com/zwcDo3Z.jpg,https://i.imgur.com/c6T382w.jpg,https://i.imgur.com/6vZ0167.jpg,https://i.imgur.com/8bo17ES.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-green-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-green-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-green-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/makeup-green-4.jpg',
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
        description = "The iPear is a revolutionary device blending cutting-edge technology with Pear's elegance and simplicity. With a sleek design, advanced features, and intuitive interface, it has become a gateway to endless possibilities. Enhance productivity, unleash creativity, and explore entertainment with the iPear's wealth of apps and options. iPear, where technology meets limitless potential.",
        # images= "https://i.imgur.com/LWZ4alZ.jpg,https://i.imgur.com/c38nLWf.jpg,https://i.imgur.com/BoeBWm6.jpg,https://i.imgur.com/7QmDGtf.jpg,https://i.imgur.com/9K3YSC4.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/pear1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/pear2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/pear3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/pear4.jpg',
        image5 = 'https://brandify.s3.us-west-1.amazonaws.com/pear5.jpg',
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
        description = "Step into limitless possibilities with Pear Vision Pro VR Headset. Redefine reality with immersive experiences and cutting-edge technology. Explore galaxies, embark on adventures, and engage in interactive simulations. With ergonomic design and captivating visuals, Pear Vision Pro takes virtual adventures to new heights.",
        # images= "https://i.imgur.com/PO1ASbR.jpg,https://i.imgur.com/8ywCPXA.jpg,https://i.imgur.com/8aK7MDt.jpg,https://i.imgur.com/PwOpULF.jpg",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/pear-pro-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/pear-pro-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/pear-pro-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/pear-pro-4.jpg',
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
        description = "The iPac is a groundbreaking product redefining your digital experience. With unmatched performance, stunning display, and seamless integration, it combines power and elegance. iPac's sleek design enhances any workspace, making a bold statement while seamlessly blending in. Crafted with premium quality, it exudes sophistication. Elevate your digital journey with iPac.",
        # images= "https://i.imgur.com/wOJ4SA7.jpg, https://i.imgur.com/L8Jglde.jpg,https://i.imgur.com/yHGxfHZ.jpg,https://i.imgur.com/gMIbHrr.jpg,https://i.imgur.com/FvztgFZ.jpg ",
        image1 = 'https://brandify.s3.us-west-1.amazonaws.com/ipac-1.jpg',
        image2 = 'https://brandify.s3.us-west-1.amazonaws.com/ipac-2.jpg',
        image3 = 'https://brandify.s3.us-west-1.amazonaws.com/ipac-3.jpg',
        image4 = 'https://brandify.s3.us-west-1.amazonaws.com/ipac-4.jpg',
        image5 = 'https://brandify.s3.us-west-1.amazonaws.com/ipac-5.jpg',
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
