# # ============================================================================ #
# # * PROGRAM ID      : forms.py
# # * DESCRIPTION     : Login and Signup form for dashboard application. 
# # * AUTHOR          : ---
# # * DATE            : 07 Nov 2021
# # * VERSION NO      : 1.0-
# # * PARAMETERS      :
# # * RETURN          :
# # * USAGE NOTES     :
# # * COMMENTS        :
# # ============================================================================ #
# # * CHANGED BY      : 
# # * DATE            : 
# # * VERSION NO      :
# # * CHANGES         :
# # ============================================================================ #
## Sign up and Login Form. 
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField
from wtforms.validators import (
    DataRequired,
    Email,
    EqualTo,
    Length,
    Optional
)
# # ###################
# # # ### SIGN UP ### #
# # ###################
# User Signup form
class SignupForm(FlaskForm):
    name = StringField(
        'Name',
        validators=[DataRequired()]
    )
    email = StringField(
        'Email',
        validators=[
            Length(min=6),
            Email(message='Enter a valid email.'),
            DataRequired()
        ]
    )
    student = SelectField(
        'rank',
        choices=[
            ('1'), 
            ('2'), 
            ('3')
        ],
        validators=[
            DataRequired()
        ]
    )
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(),
            Length(min=6, message='Select a stronger password.')
        ]
    )
    confirm = PasswordField(
        'Confirm Your Password',
        validators=[
            DataRequired(),
            EqualTo('password', message='Passwords must match.')
        ]
    )
    submit = SubmitField('Register')

# # #################
# # # ### LOGIN ### #
# # #################
# User login form
class LoginForm(FlaskForm):
    email = StringField(
        'Email',
        validators=[
            DataRequired(),
            Email(message='Enter a valid email.')
        ]
    )
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log In')