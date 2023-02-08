# Models import
from django.contrib.auth.models import User
from .models import *
# Render import
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse
# DRF import
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import *
# Auth import
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token


def landing(request):
    return render(request, 'index.html')


# Accounts
class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
def CreateUser(request):
    if request.method == 'POST':
        print(request.data) 

        user = User.objects.create_user(
            username=request.data['username'],
            first_name=request.data['first_name'],
            last_name=request.data['last_name'],
            password=request.data['password'],
            email=''
        )
        return render(request, 'index.html')

@api_view(['POST'])
def login_user(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.data['username'], password=request.data['password'])
        if user is not None:
            print('User Logged in - views.py')
            login(request, user)
        return render(request, 'index.html')


def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse('user_app:landing'))


# Auth
def get_csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})


# Calendar

class DayLogView(generics.ListAPIView):
    queryset = Day.objects.all()
    serializer_class = DayLogSerializer