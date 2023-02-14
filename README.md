# Soberize
![Django](https://img.shields.io/badge/django-EFEFEF.svg?style=for-the-badge&logo=django&logoColor=black)
![React](https://img.shields.io/badge/react-EFEFEF.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-EFEFEF.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-EFEFEF?style=for-the-badge&logo=python&logoColor=4584b6)

> Sobriety tracking app to assist users with any habit

## Project outline
Soberize is a sobriety/habit tracking app. Users have the ability to create accounts, track days that they have reframed from doing their bad habit, and get digital rewards for coins gained through daily use. After creating an account, users will have their own dashboard with a calendar along with their streak. The streak measures how many weeks the user has lasted, and resets after one "fail". Hitting streak milestones will apply a coin multiplyer increasing the gain of daily coins. This calendar also comes a daily form that will ask the user if they were successful! 
Other pages include *The Shop*, *Purchased*. 

## Data model
Data that is stored in a SQLite database
 - Username.
 - First & Last name.
 - Password.
 - Calendar data.
 - Streaks/Coins.
 - Gained rewards.
 
 ## Todo
 MVP
 - [X] Registration system.
 - [X] Dynamic dashboard (themes, badges).
 - [X] Calendar.
 
 More features...
 - [X] Shop with various pricing.
 - [X] Streaks measured daily.
 - [X] Daily coin gain.
 - [X] Milestones apply multiplyers to coin gain.
 - [ ] Weekly progress bar.
 - [ ] Dev mode, Unlimited coins and streak levels.
 - [ ] Streak milestone animation.
 - [ ] Add requierments.txt.
 - [ ] Style finalizations.
 - [ ] Deploy.

## How to install locally
1. Clone this repo to your machine ([Github docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)).
You should now have all the project files as well as 2 files, one called **"requirments.txt"** and the other **"package.json"**.

---

2. You may want a virtual environment to house all the packages that are about to be installed. Todo so use the command ```python -m venv venv``` followed by ```venv\Scripts\activate```, that will create & activate the virtual environment. For more info ([Realpython.com](https://realpython.com/python-virtual-environments-a-primer)).

---

3. To install the backend portion of this app, with the command line pointed to the same directory as requirments.txt, use command ```pip install -r requirements.txt```. You should now have django in addition to all the other python packages installed.

---

4. To install the front end portion of this app, **"cd"** into the "interface" folder and use command ```npm install```. You should now have React and all other javascript dependencies.

---

5. While in the same directory, use command ```npm run build``` to build the react app.

---

6. Now **"cd .."** back into the previous directory and run the commands ```python manage.py makemigrations``` and ```python manage.py migrate```.

---

7. Finally use command ```python manage.py runserver``` and open the provided link!

---


Notes: 
- If you want to make any changes to any of the react files. you must **"cd"** back into the "interface" folder and use command ```npm run build```.
- If you want to access the database use command ```python manage.py createsuperuser```. After filling out the form you can access the admin panel by visting **"ht<span>tp://YOURLOCALHOST/admin</span>"** and logging in.

