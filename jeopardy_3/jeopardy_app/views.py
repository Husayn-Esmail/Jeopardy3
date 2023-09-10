from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
import os

# my own modules
from read_questions.read_questions import extract_data_from_csv
# for passing data to js
from json import dumps

# Create your views here.
def index(request):
    # return HttpResponse(render(template_name="templates/index.html", request=request))
    # print(os.listdir('.'))
    # print(os.getcwd())
    template = loader.get_template("jeopardy/index.html")
    filename = ""
    with open("./config.txt", "r") as f:
        filename = f.readline()
    catsnqs = extract_data_from_csv(filename)
    # dump data
    json_data = dumps(catsnqs)
    context = {'data': json_data}
    return HttpResponse(template.render(context, request))


def not_index(request):
    filename = ""
    with open("./config.txt", "r") as f:
        filename = f.readline()
    qandc = extract_data_from_csv(filename)
    # json_data = dumps(qandc)
    # context = {'q_and_c': json_data}
    return JsonResponse(qandc)
