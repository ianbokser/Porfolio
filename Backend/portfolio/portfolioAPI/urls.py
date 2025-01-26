from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('geolocate/', views.geolocate_ip, name='geolocate_ip'),
]
