from django.urls import path
from . import views
from .views import blog


app_name = "portblogapp"

urlpatterns = [
 
    path('', views.index, name='index'),
    path('blog/',blog.as_view(), name='blog'),
    
]
