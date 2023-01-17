# Jeopardy 3

## Purpose:
This project is my third iteration of jeopardy app. My original one was written
archaecally and awfully and it's not worth the time to refactor it.


## steps to use:
  1. create a python venv
  2. install requirements.txt using python3 -m pip install -r requirements.txt

## Technologies:
- python3 flask
  

## Data structure of a jeopardy game:
1. you have categories. (can be expressed in a dictionary where the category is the key and the value is a list of tuples that contain questions and answers)
2. you have questions that have answers (can be expressed in a tuple)
3. you have point values associated with those question and answers.

Thus in the csv you should have

category, question1, answer1, question2, answer2, etc