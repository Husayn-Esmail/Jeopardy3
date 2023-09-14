# Jeopardy 3

## Purpose

This project is my third iteration of jeopardy app. My original one was
very, very, very bad. It would be more work to rewrite the old one than
it is to write it from scratch.

**Note**: This project is still in active development so the server is a development server.
No production server has been configured. Use at your own risk.

## Prerequisites

At the time of writing (September 13, 2023) there is no one-click  
install for the program nor an executable that I have been able  
to reliably create. Thus the work must be done manually.

To run this program you must have:

1. Python3
2. Git

## Steps To Use

1. Clone the repository

   ```bash
   git clone https://github.com/Husayn-Esmail/Jeopardy3.git
   ```

2. create a python venv

   ```bash
   python3 -m venv venv
   ```

3. Enter the Virtual Environment

   ```bash
   # on mac/unix including linux
   source venv/bin/activate

   # for windows
   .\venv\Scripts\activate
   ```

4. install requirements.txt

   ```bash
   python3 -m pip install -r requirements.txt
   ```

5. run generate_example_csv.py file and populate with your data (also generates config.txt required for the program)

   ```bash
   python3 jeopardy_3/generate_example_csv.py
   ```

6. place your csv file at the root of the git folder if you're running start.sh **(MAC AND LINUX ONLY)** (see example below)
7. modify config.txt to be the name of your csv file which has the categories, questions, and answers (or leave as default if you're using example_format.csv)
8. run the program

   ```bash
   # On mac/unix including linux
   ./start.sh

   # on windows
   .\start.bat

   # on any
   cd jeopardy_3
   python3 manage.py runserver
   ```

### Folder Structure

Jeopardy3
|  
--jeopardy_3  
&nbsp;&nbsp;&nbsp;&nbsp;|
&nbsp;&nbsp;&nbsp;&nbsp;--example_format.csv (use this if you aren't using start.sh)
&nbsp;&nbsp;&nbsp;&nbsp;--config.txt <-- this is where the csv filename will need to be entered (if not using start.sh)
--jeopardy_app  
--jeopardy_frontend  
--read_questions  
...  
--config.txt <-- this is where the csv filename will need to be entered (if using start.sh) you would need to move out of jeopardy_3
--example_format.csv <-- this is where the csv will be read from if you use start.sh - you would need to move out of jeopardy_3

## Paths

react/  
/

## Technologies

- python3 django
- vanilla js/html/css for now
- ReactJS

## Data structure of a jeopardy game

1. you have categories. (can be expressed in a dictionary where the category is the key and the value is a list of tuples that contain questions and answers)
2. you have questions that have answers (can be expressed in a tuple)
3. you have point values associated with those question and answers.

Thus in the csv you should have  
category, question1, answer1, question2, answer2, etc

## Working features

- input questions and categories via .csv files
- setup team names
- showing questions, answers and returning back to the board

## Broken features

- scoring for teams

## Future features

- replace "correct"/"incorect" with images
- make the timer translate from just seconds to minutes:seconds
- play and stop music when timer starts and stops
- create a "manual" mode where scoring and teams are turned off and the user manually keeps track on something external
- show current value along with the answer when using manual mode
- animations
- redo front end in React.js

note: forgive the missing functionality/features as this was hacked together  
in 24 hours in between school work and external commitments.

## Resources

I followed this video to integrate django with react  
<https://www.youtube.com/watch?v=w8SQ8beafiQ>  
React documentation  
<https://reactjs.org/docs/getting-started.html>  
returning json response  
<https://stackoverflow.com/questions/2428092/creating-a-json-response-using-django-and-python>
follow this tutorial to package and ship the app... kind of, still some troubleshooting to do...  
<https://realpython.com/pyinstaller-python>
