from flask import Blueprint, jsonify, request,redirect
from ..forms import BrandForm
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Brand, Product, Review, Order, OrderItem
from .auth_routes import validation_errors_to_error_messages




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


@brand_routes.route('/<brand_name>', methods= ["GET"])
def get_single_brand_by_name(brand_name):
  brand = Brand.query.filter_by(name = brand_name).first()


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



@brand_routes.route('/new', methods=["POST"])
@login_required
def create_brand():
    user = User.query.get(current_user.id)

    form = BrandForm()

    form.csrf_token.data = request.cookies.get('csrf_token')

    if form.validate_on_submit():

        # for brand in user.brands:
        #     if form.name.data == brand.name:
        #         return {"errors": "You already have a brand named this"}

        new_brand = Brand(
            name=form.name.data,
            story=form.story.data,
            description=form.description.data,
            theme=form.theme.data,
            admin_id=current_user.id
        )

        db.session.add(new_brand)
        db.session.commit()

        return new_brand.to_dict()

    elif form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@brand_routes.route('/edit/<brand_name>', methods =["PUT"])
@login_required
def update_brand(brand_name):
  brand_to_edit = Brand.query.filter_by(name = brand_name).first()
  print("BRAND TO EDIT", brand_to_edit)
  print("user id", current_user.id)
  if current_user.id != brand_to_edit.admin_id:
    return {"errors": "You do not own this brand"}

  form =BrandForm()

  form.csrf_token.data = request.cookies.get('csrf_token')

  if form.validate_on_submit():
    brand_to_edit.name = form.name.data
    brand_to_edit.story = form.story.data
    brand_to_edit.description = form.description.data
    brand_to_edit.theme = form.theme.data

    db.session.commit()
    return brand_to_edit.to_dict()

  else:
     return {'errors':validation_errors_to_error_messages}


@brand_routes.route('/delete/<brand_name>', methods=["DELETE"])
@login_required
def delete_brand(brand_name):
   brand_to_delete = Brand.query.filter_by(name = brand_name).first()
   print("WE ARE IN ROUTE FLASK", brand_to_delete)

   if current_user.id != brand_to_delete.admin_id:
      return {"errors": "You do not own this brand"}

   db.session.delete(brand_to_delete)
   db.session.commit()

   return {"message": f"{brand_to_delete.name} successfully deleted"}
