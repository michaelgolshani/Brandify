from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.models import Brand, User
# from ..routes.AWS_helpers import ALLOWED_EXTENSIONS


class BrandForm(FlaskForm):
    name = StringField('Board Name', validators=[Length(max=50, message="Name must be less than 255 chars!"), DataRequired()])
    story= StringField("Brand Story", validators=[Length(max = 400, message = "Brand Story does well with about 255 characters."), DataRequired()])
    description = StringField('Brand Description', validators=[Length(max=550, message="Name must be less than 255 chars!"), DataRequired()])
