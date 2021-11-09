# ============================================================================ #
# * PROGRAM ID      : main.py
# * DESCRIPTION     : flask app start here
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
from app import create_app

if __name__ == '__main__':
    # app.run()
    application = create_app()
    application.run()
