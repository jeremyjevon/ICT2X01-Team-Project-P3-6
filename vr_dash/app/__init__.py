# ============================================================================ #
# * PROGRAM ID      : __init__.py
# * DESCRIPTION     : App module for dashboard application
# * AUTHOR          : ---
# * DATE            : 29 Oct 2021
# * VERSION NO      : 1.0-
# * PARAMETERS      :
# * RETURN          :
# * USAGE NOTES     :
# * COMMENTS        : vr_admin@gmail.com | p@ssword123
# ============================================================================ #
# * CHANGED BY      : 
# * DATE            :
# * VERSION NO      :
# * CHANGES         :
# ============================================================================ #
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager 

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    # Construct core application
    app = Flask(__name__, instance_relative_config=False)

    # Load Application configurations
    app.config.from_object('config.Config')

    # from .models import db 

    # Initalize Plugins 
    db.init_app(app)
    login_manager.init_app(app)
    # migrate = Migrate(app, db)

    with app.app_context(): 
        # Import routes
        from .routes import root 
        from . import auth
        # from .assets import compile_assets

        # Register Blueprints 
        app.register_blueprint(root)
        app.register_blueprint(routes.main_bp)
        app.register_blueprint(auth.auth_bp)

        # Create Database Models 
        db.create_all()

        return app
