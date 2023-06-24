from flask import Blueprint, jsonify, request,redirect
from ..forms import OrderForm, OrderItemForm
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Brand, Product, Review, Order, OrderItem
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime


order_routes = Blueprint('orders', __name__)




@order_routes.route('/new', methods=['POST'])
@login_required
def create_order(brand_name):

    brand = Brand.query.filter_by(name=brand_name).first()
    form = OrderForm()

    form.csrf_token.data = request.cookies.get('csrf_token')

    if request.method == 'POST' and form.validate_on_submit():


        # Create the order object
        order = Order(
            status="Pending",
            # ordered=form.ordered.data,
            # owner_id=form.owner_id.data,
            owner_id=current_user.id,
            brand_id=brand.id,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )

        # Add order items
        for item in form.order_items.data:
            order_item = OrderItem(product_id=item['product_id'], quantity=item['quantity'])
            order.order_items.append(order_item)

        db.session.add(order)
        db.session.commit()


        return {"message": "Order created successfully"}

    return {"errors": form.errors}



@order_routes.route('/<brandName>', methods=['GET'])
def get_orders_of_brand(brandName):
    brand = Brand.query.filter_by(name=brandName).first()
    if not brand:
        return {"errors": "Brand not found"}

    brand_orders = Order.query.filter_by(brand_id=brand.id).all()
    if not brand_orders:
        return {"errors": "No orders found for this brand"}

    all_orders = {}
    for order in brand_orders:
        all_orders[order.id] = order.to_dict()

    return all_orders

