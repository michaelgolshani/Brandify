from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.models import Brand, User
# from ..routes.AWS_helpers import ALLOWED_EXTENSIONS

# def brand_name_exists(form,field):
#     brand_name = field.data
#     # current_user = User.query.get(current_user.id)
#     brand = Brand.query.filter_by( name = brand_name).first()
#     if brand:
#         raise ValidationError("Brand name is already in use")


class BrandForm(FlaskForm):
    name = StringField('Board Name', validators=[Length(max=50, message="Name must be less than 50 chars!"), DataRequired()])
    story= StringField("Brand Story", validators=[Length(max = 450, message = "Brand Story must be less than 450 characters."), DataRequired()])
    description = StringField('Brand Description', validators=[Length(max=30, message="Slogan must be less than 30 chars!"), DataRequired()])
