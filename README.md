# Soberize
![Django](https://img.shields.io/badge/django-EFEFEF.svg?style=for-the-badge&logo=django&logoColor=black)
![React](https://img.shields.io/badge/react-EFEFEF.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-EFEFEF.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-EFEFEF?style=for-the-badge&logo=python&logoColor=4584b6)

> Sobriety tracking app to assist users with any addiction

## Project outline
Soberize is a sobriety tracking app. Users have the ability to create accounts, track days that they have stayed sober (doesn't have to be a "substance"), and get digital rewards for sober streaks. After creating an account, users will have their own dashboard with a calendar showing their sober streak, list of their recieved rewards, and forms to update the calendar. This web app is a concept so it requires the user to cooperate 100% to work (and theres no promise from me that it will work with everyone). 

## Data model
Data that is stored in a SQLite database
 - Username
 - First & Last name
 - Password
 - Calendar data
 - Sober streaks
 - Gained rewards
 
 ## Todo
 MVP
 - [X] User account system
 - [ ] User dashboard
 - [ ] Calendar
 
 More features
 - [ ] User reward system (shop)
 - [ ] User badge system (measures the longest streak)
 - [ ] User sober streaks
 - [ ] Weekly progress bar
 - [X] Motivational quotes
 - [ ] Sober streak reward animation
 - [ ] Ability to save quotes
 - [ ] Add requierments.txt & package.json (npm install --save my-dependency) for install

## How to install locally
1. Clone this repo into a folder on your machine ([Github docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)).
You should now have all the project files as well as 2 files, one called **"requirments.txt"** and the other **"package.json"**

---

2. You may want a virtual environment to house all the packages that are about to be installed. Todo so use the command ```python -m venv venv``` followed by ```venv\Scripts\activate```, that will create & activate the virtual environment. For more info ([Realpython.com](https://realpython.com/python-virtual-environments-a-primer))

---

3. To install the backend portion of this app, with the command line pointed to the same directory as requirments.txt, use command ```pip install -r requirements.txt```. You should now have django in addition to all the other python packages.

---

4. To install the front end portion of this app, **"cd"** into the "interface" folder and use command ```npm install```. You should now have React and all other javascript dependencies.

---

5. While in the same directory, use command ```npm run build``` to build the react app.

---

6. Now **"cd .."** back to the main directory and run the commands ```python manage.py makemigrations``` and ```python manage.py migrate```.

---

7. Finally use command ```python manage.py runserver``` to create a local server and open the provided link.

---


Notes: 
- If you want to make any changes to any of the react files. you must **"cd"** back into the "interface" folder and use command ```npm run build```
- If you want to access the database use command ```python manage.py createsuperuser```. After filling out the form you can access the admin panel by visting **"ht<span>tp://YOURLOCALHOST/admin</span>"** and logging in.

