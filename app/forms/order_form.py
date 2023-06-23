from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FieldList, FormField, SubmitField, BooleanField
from wtforms.validators import DataRequired

class OrderItemForm(FlaskForm):
    product_id = IntegerField('Product ID', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])

class OrderForm(FlaskForm):
    status = StringField('Status')
    ordered = BooleanField('Ordered')
    owner_id = StringField('Owner ID', validators=[DataRequired()])
    brand_id = StringField('Brand ID', validators=[DataRequired()])
    order_items = FieldList(FormField(OrderItemForm), min_entries=1)
    submit = SubmitField('Submit')
