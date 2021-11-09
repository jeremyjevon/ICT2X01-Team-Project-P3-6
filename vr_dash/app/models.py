# # ============================================================================ #
# # * PROGRAM ID      : models.py
# # * DESCRIPTION     : ORM data models for dashboard application.
# # * AUTHOR          : ---
# # * DATE            : 29 Oct 2021
# # * VERSION NO      : 1.0-
# # * PARAMETERS      :
# # * RETURN          :
# # * USAGE NOTES     :
# # * COMMENTS        :
# # ============================================================================ #
# # * CHANGED BY      : Thomas
# # * DATE            : 07 Nov 2021
# # * VERSION NO      :
# # * CHANGES         :
# # ============================================================================ #
"""Database models."""
from . import db
import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

#################
# ### USERS ### #
#################
class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,
                   primary_key=True
                   )
    name = db.Column(
        db.String(),
        nullable=False,
        unique=False
    )
    email = db.Column(
        db.String(40),
        unique=True,
        nullable=False
    )
    student = db.Column(
        db.String(),
        nullable=False,
        unique=False
    )
    password = db.Column(
        db.String(200),
        primary_key=False,
        nullable=False,
        unique=False
    )
    created_on = db.Column(
        db.DateTime,
        default=datetime.datetime.now(),
        index=False,
        nullable=False,
        unique=False
    )
    last_login = db.Column(
        db.DateTime ,
        default=datetime.datetime.now(),
        index=False,
        unique=False,
        nullable=True
    )

    def set_password(self, password):
        # Set hash password
        self.password = generate_password_hash(
            password,
            method='sha256'
        )

    def check_password(self, password):
        # Check hashed password
        return check_password_hash(self.password, password)

    def __repr__(self):
        return '<id {}>'.format(self.id)

