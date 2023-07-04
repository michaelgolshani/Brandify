from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField,SelectField, IntegerField
from wtforms.validators import DataRequired,Email,ValidationError,Length
from flask_wtf.file import FileField, FileAllowed,FileRequired
from app.models import Brand, User, Product
from app.api.aws_helpers import ALLOWED_EXTENSIONS


def product_name_exists(form, field):
    product_name = field.data

    product = Product.querey.filter_by(name = product_name)

    if product:
        raise ValidationError("Product name already exists")


class ProductForm(FlaskForm):
    name = StringField("Product Name", validators=[Length(max=50, message="Name must be less than 50 chars"), DataRequired()])
    price = IntegerField("Product Price", validators=[DataRequired()])
    inventory = IntegerField("Product Inventory", validators=[DataRequired()])
    description = StringField("Product Description", validators=[ Length(max=400, message = "Description must be less than 400 chars."),DataRequired()])
    images = StringField("Product Images", validators=[DataRequired()])
    # image = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    features = StringField("Product Features", validators=[DataRequired()])
    # brand_id = SelectField("Brand", coerce=int, validators=[DataRequired()])
