from django.shortcuts import render
from read_questions.read_questions import extract_data_from_csv
# for passing data to js
from json import dumps

import os

def react(request):
    print(os.getcwd())
    questions = extract_data_from_csv('./ISA_Jeopardy_Questions.csv')
    # dump data
    json_data = dumps(questions)
    context = {'data': json_data}
    return render(request=request, context=context, template_name='index.html')