#pip install firebase_admin
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import db

'''
---README---
Do note that this file is just to initialize the database for DEBUGGING purposes (retrieval of values needed).
This also acts as a class, since all the attributes of our classes in the M2 class diagram are already included less the following:
    1) User Class
        1.1) profilePin     - We assume proctors will be with students
        1.2) userLevel      - Can just use Experience to rank, so redundant

Therefore, most getters and setters methods will be through the database.
    Getters -> Retrieve values from the DB
    Setters -> Set (Update/Insert) values into the DB

This file has no link to our main file, which is why it is done in Python3.

Change auth_id in line 41 to your unique key listed in lines 32 - 36!!!
'''

#Do add this file into .gitignore so it will not be uploaded onto the repo
cred = credentials.Certificate('./ict2x01web-firebase-adminsdk-c80jq-0674402e35.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

'''
This is also the ACCOUNT_ID is the same as auth.current.id (generated by firestore)
Student001: 0QoZWXNqYPY2iWSVG2ulMJshc8b2        -   YK
Student002: 7MafnOmZHaYaZ8FLL4qpS5ckmaD3        -   Thomas
Student003: AlTt2JJW5bWrWB8YRsyssOJ5NTN2        -   Alfred
Student004: s4K7C3vtcBghZB2va0xZasBBCRA2        -   Anne
Student005: O72ISE6zidWVVWpbByBkBg39EYD2        -   Jeremy

There is no need to generate database for all 5 users since the system tests can be done in 1 account.
However, feel free to play around within your own account, that is what this script is for.
'''
auth_id = ""       #INSERT TOKEN HERE WITHIN ""

print(">>> Creating Database.")
#Creation of the 4 students profile
first_name_array = ["Beth", "Morty", "Rick", "Summer"]
last_name_array = ["Smith", "Smith", "Sanchez", "Smith"]
student_id_array = [2500951,2500960,2500945,2501000]

for i in range(0, len(first_name_array)):
    #This is also the PROFILE_ID
    profile_id = first_name_array[i] + last_name_array[i]
    doc_ref = db.collection(auth_id).document(profile_id)
    doc_ref.set({
            u'fname': first_name_array[i],
            u'lname': last_name_array[i],
            u'exp': 0,      #Everyone starts fair  
            u'student_id': student_id_array[i],
    })

print("> Created Students Profile.")

#Creation of Proctor profile
doc_ref = db.collection(auth_id).document(u'Proctor')
doc_ref.set({
        u'fname': u'Evil',
        u'lname': u'Morty',
        u'exp': 0,      #Inherits from parent object   
        u'proctor_id': 2000951,    
})


print("> Created Proctor Profile.")

#Generate Leaderboard
document_names_array = ['first_place', 'second_place', 'third_place', 'fourth_place']

doc_ref = db.collection(auth_id).document(u'Leaderboard')
doc_ref.set({
        u'current_time': 0,
        u'last_updated_time': 0,
        u'isMostUpdated': 0,      
    })
for i in range(0, len(document_names_array)):
    doc_ref = db.collection(auth_id).document(u'Leaderboard').collection(u'Ranking').document(document_names_array[i])
    doc_ref.set({
            u'fname': first_name_array[i],
            u'lname': last_name_array[i],
            u'exp': 0,      
    })

print("> Created Leaderboard.")
#Generate Stages
stage_names_array = ['Can you go straight?', 'For loops', 'Navigate to Mars']
stage_difficulty_array =['Difficult', 'Medium', 'Easy']
created_by_array = [2000951,2000951,2000951]
creation_time_array = ["27/11/2021 03:54:01", "24/11/2021 03:55:21", "21/11/2021 02:23:02"]
stage_experience_array = [100,50,1]
for i in range(0, len(stage_names_array)):
    doc_ref = db.collection(u'Stages').document(stage_names_array[i])
    doc_ref.set({
            u'stage_id': i,
            u'stage_name': last_name_array[i],
            u'stage_difficulty': stage_difficulty_array[i], 
            u'created_by': created_by_array[i],
            u'creation_time': creation_time_array[i],
            u'isAttempted' : 0,
            u'last_attempt_date' : 0,
            u'stage_experience': stage_experience_array[i],     
    })

    #Tutorial Stage
    doc_ref = db.collection(u'Stages').document(stage_names_array[i]).collection(u'Tutorial').document()
    doc_ref.set({
            u'tutorial_id': 1,
    })

    #Practice Stage
    doc_ref = db.collection(u'Stages').document(stage_names_array[i]).collection(u'Practice').document()
    doc_ref.set({
            u'practice_id': 0,
    })

    #Assessment Stage
    doc_ref = db.collection(u'Stages').document(stage_names_array[i]).collection(u'Assessment').document()
    doc_ref.set({
            u'assessment_id': 0,
    })
print("> Created Stage.")

print(">>> Database created successfully.")