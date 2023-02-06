from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dat/', views.not_index, name='not_index')
]