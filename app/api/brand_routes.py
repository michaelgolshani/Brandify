from flask import Blueprint, jsonify, request,redirect
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Brand, Product, Review, Order, OrderItem
from .auth_routes import validation_errors_to_error_messages
from ..forms import BrandForm



brand_routes = Blueprint('brands', __name__)


@brand_routes.route('/', methods = ["GET"])
def get_all_brands():
  brands = Brand.query.all()

  all_brands = {}

  for brand in brands:
    all_brands[brand.id] = brand.to_dict()

  return all_brands


@brand_routes.route('/<int:brand_id>', methods= ["GET"])
def get_single_brand(brand_id):
  brand = Brand.query.get(brand_id)

  if(brand):
    return brand.to_dict()
  else:
    return {"errors": "Brand could not be found"}


@brand_routes.route('/current_user', methods= ["GET"])
def current_user_brands():
  user_brands = Brand.query.filter_by(admin_id = current_user.id ).all()
  if not user_brands:
    return {"errors": "No Brands were found"}

  all_brands = {}
  for brand in user_brands:
    all_brands[brand.id] = brand.to_dict()

  return all_brands



@brand_routes.route('/new', methods= ["POST"])
def create_brand():
  user = User.query.get(current_user.id)

  form = BrandForm()

  form['crsf_token'].data = request.cookies['crsf_token']

  if form.validate_on_sibmit():

    for brand in user.brands:
      if form.data['name'] == brand.name:
        return {"errors": "You already have a brand named this"}
    new_brand = Brand(
      name = form.data["name"],
      story = form.data["story"],
      description = form.data["description"],
      admin_id = current_user.id
    )
    db.session.add(new_brand)
    db.session.commit()

    return new_brand.to_dict()
  elif form.errors:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


