# The Woo Woo Network
![ScreenShot]("Documentation/screenshots/home.png")
## Introduction
The Woo Woo Network is an online marketplace aimed at connecting spiritual healers with people seeking spiritual healing services.

This repository contains the work of COSC499-Group 2's work for the term. It's a full stack CRUD webapp using Node.js, React, Express, and MySQL. 

## Evaluation
Please navigate to `docs/scrumtemplates` and click on the latest ScrumTemplate.pdf to evaluate our weekly progress. Thank you.

## Structure
```rb
PROJECT
    ↳ App
    ⏐  ↳ Frontend
    ⏐  ↳ Backend
    ⏐  ↳ Dashboard
    ↳ Documentation
    ↳ Testing
```
## FILE PATHS
[Frontend](/App/Frontend): The Node.js and React frontend. Styled using vanilla CSS.
[Dashboard](/App/Dashboard): The PHP dashboard for W.W.N. admini to manage the app's content. 
[Backend](/App/Frontend): The Express and MySql backend. Designed as an REST API for the frontend to use.
[Documentation](/Documentation): All Project Documentation, Screentshots, sql setup queries and more.
[Testing](/Testing): POSTMAN collections used to document the API live here. 


## Setup
1) Make sure to have PHP, MySQL, and Apache installed. On Windows, we recommend xampp to install everything once. https://www.apachefriends.org/download.html
2) Clone the GitHub repository into the `htdocs` folder inside your xampp/apache installation using `git clone https://github.com/GreyWolfSif/COSC499Project.git`
3) Navigate to the newly created COSC499Project to view the source code. These files can be moved to the root folder of a server to
be accessed through localhost or online.

![ScreenShot]("Documentation/screenshots/home.png")
![ScreenShot]("/Documentation/screenshots/home.png")
![ScreenShot]("./Documentation/screenshots/home.png")

## Peer Testing Setup (just run the front end)
1) cd to frontend
2) npm install
3) npm start
4) go to localhost 3000 
