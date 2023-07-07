from flask import Blueprint, jsonify, request, redirect
from ..forms import BrandForm, ProductForm, EditProductForm
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Brand, Product, Review, Order, OrderItem
from .auth_routes import validation_errors_to_error_messages
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3




product_routes = Blueprint('products', __name__)

@product_routes.route('/', methods=["GET"])
def get_all_products():
    products = Product.query.all()
    all_products = {}
    for product in products:
        all_products[product.id] = product.to_dict()
    return all_products

@product_routes.route('/<int:product_id>', methods=["GET"])
def get_single_product(product_id):
    product = Product.query.get(product_id)
    if product:
        return product.to_dict()
    else:
        return {"errors": "Product could not be found"}

@product_routes.route('/<product_name>', methods=["GET"])
def get_single_product_by_name(product_name):
    product = Product.query.filter_by(name=product_name).first()
    if product:
        return product.to_dict()
    else:
        return {"errors": "Product could not be found"}

@product_routes.route('/current_user', methods=["GET"])
def current_user_products():
    user_products = Product.query.filter_by(owner_id=current_user.id).all()
    if not user_products:
        return {"errors": "No Products were found"}
    all_products = {}
    for product in user_products:
        all_products[product.id] = product.to_dict()
    return all_products





@product_routes.route('/<brand_name>/new', methods=["POST"])
@login_required
def create_product(brand_name):
    user = User.query.get(current_user.id)
    # brand_name = request.form.get('brand_name')
    brand = Brand.query.filter_by(name=brand_name, admin_id=current_user.id).first()
    form = ProductForm()
    form.csrf_token.data = request.cookies.get('csrf_token')


    if form.validate_on_submit():
        for product in user.products:
            if form.name.data == product.name:
                return {"errors": "You already have a product named this"}

        # s3 bucket implementation for images 1-5.
        uploaded_images = []
        for i in range(1, 6):
            image_field_name = f'image{i}'
            image = form.data[image_field_name]
            if image:
                image.filename = get_unique_filename(image.filename)
                upload = upload_file_to_s3(image)
                if 'url' not in upload:
                    return {"errors": validation_errors_to_error_messages(upload)}
                uploaded_images.append(upload['url'])
        # check if successful
        # if 'url' not in upload1:
        #     return {"errors": validation_errors_to_error_messages(upload1)}


        new_product = Product(
            name=form.name.data,
            price=form.price.data,
            description=form.description.data,
            # images = form.images.data,
            image1=uploaded_images[0] if uploaded_images else None,
            image2=uploaded_images[1] if len(uploaded_images) > 1 else None,
            image3=uploaded_images[2] if len(uploaded_images) > 2 else None,
            image4=uploaded_images[3] if len(uploaded_images) > 3 else None,
            image5=uploaded_images[4] if len(uploaded_images) > 4 else None,
            features = form.features.data,
            inventory=form.inventory.data,
            owner_id=current_user.id,
            brand_id = brand.id
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401






@product_routes.route('/edit/<brand_name>/<int:product_id>', methods=["PUT"])
@login_required
def update_product(product_id, brand_name):
    product_to_edit = Product.query.get(product_id)
    brand = Brand.query.filter_by(name=brand_name, admin_id=current_user.id).first()
    print("PRODUCT TO EDIT", product_to_edit)
    print("user id", current_user.id)
    print("Outside form INNNNNNNNNNNNNNNNINNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN NNNNNNNNNNNNn")
    if current_user.id != product_to_edit.owner_id:
        return {"errors": "You do not own this product"}

    print("FORM DATA IMAGE3 INNNNNNNNNNNNNNNNNNNNNNNNNNNN ",product_to_edit.image3)

    form = EditProductForm()
    form.csrf_token.data = request.cookies.get('csrf_token')
    print("INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222")
    if form.validate_on_submit():
        print("In form before edits INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222",product_to_edit.to_dict())

        print("FORM DATA IMAGE3 INNNNNNNNNNNNNNNNNNNNNNNNNNNN ",form.image3.data)
        # s3 bucket implementation for images 1-5.
        uploaded_images = []
        for i in range(1, 6):
            image_field_name = f'image{i}'
            image = form.data[image_field_name]
            print("IMAGE before going in if statement INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222",image)
            if image:
                print("IMAGE before edits INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222",image)

                image.filename = get_unique_filename(image.filename)
                upload = upload_file_to_s3(image)
                if 'url' not in upload:
                    return {"errors": validation_errors_to_error_messages(upload)}
                uploaded_images.append(upload['url'])
            else:
                # If no file was uploaded, use the existing image URL
                existing_image_field_name = f'image{i}'
                existing_image_url = getattr(product_to_edit, existing_image_field_name)
                print("EXISTING IMAGE URL INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222",existing_image_url)
                uploaded_images.append(existing_image_url)

        print("uploaded images INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222",uploaded_images)

        product_to_edit.name = form.name.data
        product_to_edit.price = form.price.data
        product_to_edit.description = form.description.data
        # product_to_edit.images = form.images.data
        product_to_edit.features = form.features.data
        product_to_edit.inventory = form.inventory.data
        product_to_edit.owner_id = current_user.id
        product_to_edit.brand_id = brand.id

        # Update the image fields with the uploaded image URLs or existing image URLs
        product_to_edit.image1 = uploaded_images[0] if uploaded_images[0] else form.image1.data
        product_to_edit.image2 = uploaded_images[1] if uploaded_images[1] else form.image2.data
        product_to_edit.image3 = uploaded_images[2] if uploaded_images[2] else form.image3.data
        product_to_edit.image4 = uploaded_images[3] if uploaded_images[3] else form.image4.data
        product_to_edit.image5 = uploaded_images[4] if uploaded_images[4] else form.image5.data

        print("In form after edits product dict - final INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN INNNNNNNNNNNNNNNNNNNNNNNNNNNN 22222", product_to_edit.to_dict())

        db.session.commit()
        return product_to_edit.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages}




@product_routes.route('/delete/<int:product_id>', methods=["DELETE"])
@login_required
def delete_product(product_id):
    product_to_delete = Product.query.get(product_id)
    print("WE ARE IN ROUTE FLASK", product_to_delete)
    if current_user.id != product_to_delete.owner_id:
        return {"errors": "You do not own this product"}


    image_urls = [product_to_delete.image1, product_to_delete.image2, product_to_delete.image3, product_to_delete.image4, product_to_delete.image5]
    for url in image_urls:
        if url:
            remove_file_from_s3(url)

    # file_delete = remove_file_from_s3(product_to_delete.image1)


    db.session.delete(product_to_delete)
    db.session.commit()
    return {"message": f"{product_to_delete.name} successfully deleted"}

    # return {"errors": "Product couldn't be deleted"}, 500
