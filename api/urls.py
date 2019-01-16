from django.urls import re_path
from . import views

urlpatterns = [
    # URLs for sample endpoints
    re_path(r'^api/hello$', views.HelloWorldView.as_view()),
    re_path(r'^api/hello/$', views.HelloWorldView.as_view()),
    re_path(r'^api/hello/(?P<name>\w+)$', views.HelloWorldView.as_view()),
]
