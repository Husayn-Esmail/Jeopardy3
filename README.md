# Jeopardy 3

## Purpose

This project is my third iteration of jeopardy app. My original one was 
very, very, very bad. It would be more work to rewrite the old one than
it is to write it from scratch. Do note that this project was only meant
to run locally on one's computer, I haven't designed it to be hosted
anywhere although that may change in the future once I've revisited
the frontend.


![Main Screen](./images/main_screen.png "Main")

![Setup Screen](./images/setup_screen.png "Setup")

![Question Screen](./images/question_screen.png "Question")


## steps to use

  1. create a python venv
  2. install requirements.txt using python3 -m pip install -r requirements.txt
  3. place your csv file in jeopardy\_app folder

## Technologies

- python3 django
- vanilla js/html/css for now
  

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
