from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):
    return HttpResponse(render(template_name="templates/index.html", request=request))
    # template = loader.get_template("index.html")
    # return HttpResponse(template.render(request))
