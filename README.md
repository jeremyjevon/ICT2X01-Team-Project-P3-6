# Vroom Vroom
A ICT2101/2201 Project by Team Fast and Furious
 
## How to Run Vroom Vroom
### Dependencies
The full list of Vroom Vroom dependencies can be found in
[package.json](https://github.com/jeremyjevon/ICT2X01-Team-Project-P3-6/blob/ccfe7609e8c00df77628cdd539a53ce8186461f2/VR_dash/package.json)  
Users will be required to install the following dependencies before being able to play the game.
* [Node.js v16.13.0](https://nodejs.org/en/download/)
* [Node Version Management Untility for Windows](https://github.com/coreybutler/nvm-windows)

Upon navigating to the project folder ```VR_dash```, the following command must be used before the initial programme start-up.
```
npm install
```
After installing the required dependencies, users will be able to play Vroom Vroom by navigating to ```VR_dash``` and run the command:
```
npm start
```

## Development Workflow
#### Cloning the Project
* Git clone 
* Can refer to [setup instruction](https://github.com/jeremyjevon/ICT2X01-Team-Project-P3-6/blob/main/vr_dash/README.md) for project. 
#### Committing changes from development branch
All developers must work on their feature branch before committing final changes to the development branch

 ``` For Developer: ```
* Pull the latest working version
* Add and commit your changes
* Push your changes to the development branch.
* Go to the GitHub repository to initiate a pull request to development branch
* Get a reviewer to merge and resolve any conflicts

 ``` For Reviewer: ```
* Ensure all conflicts are resolved and will not break existing code. 
* Ensure comments and details regarding conflicts are documented before merging. 
* Delete the feature branch after merging.
#### Features 
* Ensure that each feature has its own branch ```(from development branch)```
#### Unit Testing 
* Unit testing must be done on each ```feature branch``` before committing to ```dev branch```
#### Bug Fixes
Open an issue on GitHub for any bugs found during Unit Testing and inform the project team.
* Assign developer and reviewer to resolve bugs found in the code
#### UAT
* User Acceptance Testing must be done on the development branch before committing to the ```main branch```
* UAT will be done ```weekly``` with the development team and stakeholders.


## User Acceptance Testing
### Use Case Diagram
![Use Case Diagram](https://user-images.githubusercontent.com/27985157/144900691-71233279-aeeb-4dbd-8a75-10c4b1fed41c.png)
### System State Diagram
![2x01_diagrams-State Diagram](https://user-images.githubusercontent.com/33014950/144760460-ae347e07-13db-4ee7-9334-743f35079fbd.png)
### System Tests (Video ~3 min)
System test UAT video is available [Here](https://youtu.be/q9i8BxcArZI)

## Whitebox Testing
### Selected Class
Simple yet extremely important puzzle of our project is the```chekmsg()``` function. It is responsible for validating and communication of data between the robotic car and our website. The team developed a mockServer that uses sockets to simulate a connection with the robotic car. With the mockServer, we can simulate sending of commands between our website and the robotic car without the use of the robotic car. We can also ensure that the data is transmitted and read on the socket that the robotic car is connected to. This eliminates the most of the possiblity of a connection issue between the robotic car and website. 

<img width="400" alt="Selectedclass" src="https://user-images.githubusercontent.com/26267783/144914070-2d6f0957-a378-46aa-b9f7-f50a5be80ce7.png">

### Test Cases
The team adopted a manual approach to testing. Below is an except of 1 of our 8 test cases. As they are relatively similar, we will not show all of them in this document. 

| Tests  | Description  | Web to Car command  | Car Received  | Input Type | Status |
| :------------ |:--------------- |:--------------- |:--------------- | :-----:| :-----:|
| Test(1)      | Test Right command | right | right | Valid | Pass |
| Test(2)      | Test Left command | left | left | Valid | Pass |
| Test(3)      | Test Start command | start | start | Valid | Pass |
| Test(4)      | Test Stop command | stop | stop | Valid | Pass |
| Test(5)      | Test Reverse command | reve | reve | Valid | Pass |
| Test(6)      | Test Slow command | slow | slow | Valid | Pass |
| Test(7)      | Test Speed command | speed | speed | Valid | Pass |
| Test(8)      | Test Wrong command | ilove2x01 | ilove2x01 | Invalid | Pass |

<img width="400" alt="Test1" src="https://user-images.githubusercontent.com/26267783/144911146-d532a31c-dc30-428a-82cd-2a9a4d67405b.png">
<img width="400" alt="Test8" src="https://user-images.githubusercontent.com/26267783/144913752-2fa1804f-bbda-4d50-9a3c-e0d95473fe1b.png">


### Statistics
* Derived CFG
* Full Path and Branch Coverage

<img width="300" alt="CFG" src="https://user-images.githubusercontent.com/26267783/144909315-05fc6f98-e425-441e-843e-2c89127bb5b2.png">

#### Calculations: 

```Number of Nodes: 11```

```Number of Edges: 17```

```Cylomatic Complexity V(G):17 - 11 + 2(1) = 8```

### Test Suite Instructions

A test script has been configured. Simply ensure you are in the ```vr_dash/tcpServer``` directory of the project. 

To run the test suite:
```npm run test```

<img width="400" alt="Test_results" src="https://user-images.githubusercontent.com/26267783/144915151-c44ac483-ad94-4871-817d-3d529aca9a72.png">

As the results were calculated manually, the numbers will remain the same for this specific test configuration. 

### Running the Test Case (Animated Gif or Video ~1 min)
https://user-images.githubusercontent.com/26267783/144909234-ce4371d2-7191-4921-be5b-6691814cb49d.mov


## Additional Documentation
### Updated Gantt Chart
![M3 Gantt Chart](https://user-images.githubusercontent.com/27985157/144898563-5639012d-c1e4-46f4-8e9d-73a36a38bdb0.png)

### Updated Burndown Chart
![M3 Burndown Chart](https://user-images.githubusercontent.com/27985157/144898498-b15ed321-4cac-4788-a677-6041053d1eba.png)
