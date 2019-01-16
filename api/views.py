from django.shortcuts import render
from django.views import View
from django.http import JsonResponse


class HelloWorldView(View):
    def get(self, request, name=None):
        if name is None:
            return JsonResponse({'response': 'Hi'})
        else:
            return JsonResponse({'response': 'Hi, {}'.format(name)})
