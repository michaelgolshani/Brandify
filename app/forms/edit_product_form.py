from flask_wtf.file import FileAllowed
from wtforms.validators import Optional
from .product_form import ProductForm
from app.api.aws_helpers import ALLOWED_EXTENSIONS
from flask_wtf.file import FileField, FileAllowed,FileRequired

class EditProductForm(ProductForm):
    image1 = FileField("Image File 1", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
    image2 = FileField("Image File 2", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
    image3 = FileField("Image File 3", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
    image4 = FileField("Image File 4", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
    image5 = FileField("Image File 5", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), Optional()])
