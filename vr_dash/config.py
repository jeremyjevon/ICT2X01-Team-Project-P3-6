# # ============================================================================ #
# # * PROGRAM ID      : config.py 
# # * DESCRIPTION     : Contains main config param for dashboard
# # * AUTHOR          : --- 
# # * DATE            : 29 Oct 2021
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
# # Flask Configuration variables 
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

# Set Flask config using .env file 
class Config:
    # General Config
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_APP = environ.get('FLASK_APP')
    FLASK_ENV = environ.get('FLASK_ENV')

    # Static Assets
    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'
    COMPRESSOR_DEBUG = environ.get('COMPRESSOR_DEBUG')

    # Database
    # SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
    # SQLALCHEMY_ECHO = False
    # SQLALCHEMY_TRACK_MODIFICATIONS = False

