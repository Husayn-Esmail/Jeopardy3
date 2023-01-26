from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import os

# my own modules
from .read_questions import extract_data_from_csv
# for passing data to js
from json import dumps

# Create your views here.
def index(request):
    # return HttpResponse(render(template_name="templates/index.html", request=request))
    print(os.listdir('.'))
    print(os.getcwd())
    template = loader.get_template("jeopardy/index.html")
    catsnqs = extract_data_from_csv("./ISA_Jeopardy_Questions.csv")
    # dump data
    json_data = dumps(catsnqs)
    context = {'data': json_data}
    return HttpResponse(template.render(context, request))
