# ============================================================================ #
# * PROGRAM ID      : routes.py 
# * DESCRIPTION     : Contains main routes used in dashboard application 
# * AUTHOR          : --- 
# * DATE            : 29 Oct 2021
# * VERSION NO      : 1.0-
# * PARAMETERS      :
# * RETURN          :
# * USAGE NOTES     :
# * COMMENTS        :
# ============================================================================ #
# * CHANGED BY      :
# * DATE            :
# * VERSION NO      :
# * CHANGES         :
# ============================================================================ #
from flask import render_template, Blueprint, request, redirect, url_for
from .models import db, User
from app import models
from flask_login import current_user, login_required, logout_user

root = Blueprint("root", __name__)

# # ###################################
# # # ### Blueprint Configuration ### #
# # ###################################
main_bp = Blueprint(
    'main_bp', __name__,
    template_folder='templates',
    static_folder='static'
)

# main route 
# Login logic
# @main_bp.route('/index')
# def index(): 
#     return render_template('dashboard.jinja2')

@main_bp.route('/', methods=['GET'])
# @login_required
def dashboard():
    """Logged-in User Dashboard."""
    return render_template(
        'dashboard.jinja2',
        title='Vroom Vroom dashboard',
        template='dashboard-template',
        current_user=current_user,
        body="You are now logged in!"
    )

# Logout logic 
@main_bp.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth_bp.login'))

