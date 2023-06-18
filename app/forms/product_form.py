from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField,SelectField, IntegerField
from wtforms.validators import DataRequired,Email,ValidationError,Length
from flask_wtf.file import FileField, FileAllowed,FileRequired
from app.models import Brand, User, Product

class ProductForm(FlaskForm):
    name = StringField("Product Name", validators=[Length(max=50, message="Name must be less than 50 chars!"), DataRequired()])
    price = IntegerField("Product Price", validators=[DataRequired()])
    inventory = IntegerField("Product Inventory", validators=[DataRequired()])
    description = StringField("Product Description", validators=[DataRequired()])
    images = StringField("Product Images", validators=[DataRequired()])
    features = StringField("Product Features", validators=[DataRequired()])
    brand_id = SelectField("Brand", coerce=int, validators=[DataRequired()])
