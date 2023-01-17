from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):
    # return HttpResponse(render(template_name="templates/index.html", request=request))

    template = loader.get_template("jeopardy/index.html")
    context = {}
    return HttpResponse(template.render(context, request))
