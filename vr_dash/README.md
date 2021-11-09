# Vroom Vroom
ICT2x01 Vroom Vroom Project. 
Dashboard application for Vroom Vroom Dashboard 


## To run: 
* Prequisite: python3.9, pip21.3

1. Create python virtualenv: ```python -m venv .venv``
2. Activate virtualenv:
    * For windows: ```.venv\Scripts\activate.bat``` 
    * For Mac/Linux: ```source .venv/bin/activate``` 
3. Install python dependencies required for backend: ```pip install -r requirements.txt```
4. Install npm dependencies required for frontend: ```npm install```
5. Build tailwindcss: ```npm run build-css``` 
6. Start flask server: ```flask run``` 

Dashboard should be avail at: ```localhost:5000```

## Technologies used: 
* Frontend: Node + Tailwindcss 
* Backend: Flask 

* Database: Postgres + SqlAlchemy 
