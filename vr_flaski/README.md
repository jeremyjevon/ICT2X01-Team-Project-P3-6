# Vroom Vroom (Web Dashboard) 
Documentation for Vroom Vroom Dashboard. 

## Todo: 
* [UI] Update styling for main dashboard home page
* [VIEW] Login - netflix style  
* [VIEW] Map page 
* [VIEW] Main game interaction page 
* [DATABASE] Setup database ORM w sqlite/postgres(?) 

## To run: 
* Prequisite: python3.9, pip21.3

1. Create python virtualenv: ```python -m venv .vroom```
2. Activate virtualenv:
    * For windows: ```.vroom\Scripts\activate.bat``` 
    * For Mac/Linux: ```source .vroom/bin/activate``` 
3. Install python dependencies required for backend: ```pip install -r requirements.txt```
4. Install npm dependencies required for frontend: ```npm install```
5. Build tailwindcss: ```npm run build-css``` 
6. Start flask server: ```flask run``` 

Dashboard should be avail at: ```localhost:5000```


## Technologies used: 
* Backend: Flask (python)
* Frontend: Node (tailwindcss)
