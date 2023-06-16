from flask import Blueprint, jsonify, request, redirect
from ..forms import BrandForm, ProductForm
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Brand, Product, Review, Order, OrderItem
from .auth_routes import validation_errors_to_error_messages

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

@product_routes.route('/new', methods=["POST"])
@login_required
def create_product(brand_name):
    user = User.query.get(current_user.id)
    brand = Brand.query.filter_by(name=brand_name, admin_id=current_user.id).first()
    form = ProductForm()
    form.csrf_token.data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        for product in user.products:
            if form.name.data == product.name:
                return {"errors": "You already have a product named this"}
        new_product = Product(
            name=form.name.data,
            price=form.price.data,
            inventory=form.inventory.data,
            owner_id=current_user.id,
            brand_id = brand.id
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@product_routes.route('/edit/<product_name>', methods=["PUT"])
@login_required
def update_product(product_name, brand_name):
    product_to_edit = Product.query.filter_by(name=product_name).first()
    brand = Brand.query.filter_by(name=brand_name, admin_id=current_user.id).first()
    print("PRODUCT TO EDIT", product_to_edit)
    print("user id", current_user.id)
    if current_user.id != product_to_edit.admin_id:
        return {"errors": "You do not own this product"}
    form = BrandForm()
    form.csrf_token.data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        product_to_edit.name = form.name.data
        product_to_edit.price = form.edit.data
        product_to_edit.inventory = form.inventory.data
        product_to_edit.owner_id = current_user.id
        product_to_edit.brand_id = brand.id

        db.session.commit()
        return product_to_edit.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages}

@product_routes.route('/delete/<product_name>', methods=["DELETE"])
@login_required
def delete_product(product_name):
    product_to_delete = Product.query.filter_by(name=product_name).first()
    print("WE ARE IN ROUTE FLASK", product_to_delete)
    if current_user.id != product_to_delete.owner_id:
        return {"errors": "You do not own this product"}
    db.session.delete(product_to_delete)
    db.session.commit()
    return {"message": f"{product_to_delete.name} successfully deleted"}
