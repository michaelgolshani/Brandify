from flask_wtf import FlaskForm
from wtforms import StringField,BooleanField,SelectField, IntegerField, FloatField
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
    price = FloatField("Product Price", validators=[DataRequired()])
    inventory = IntegerField("Product Inventory", validators=[DataRequired()])
    description = StringField("Product Description", validators=[ Length(max=400, message = "Description must be less than 400 chars."),DataRequired()])
    images = StringField("Product Images", validators=[DataRequired()])
    image1 = FileField("Image File 1", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    image2 = FileField("Image File 2", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    image3 = FileField("Image File 3", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    image4 = FileField("Image File 4", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    image5 = FileField("Image File 5", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    features = StringField("Product Features", validators=[DataRequired()])
    # brand_id = SelectField("Brand", coerce=int, validators=[DataRequired()])
