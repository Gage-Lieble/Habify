from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse

from django.http import JsonResponse
from django.middleware.csrf import get_token
# Create your views here.

def landing(request):
    context = {
        'test': 34534
    }
    return render(request, 'index.html', context)

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class CreateUser(generics.CreateAPIView):
#     serializer_class = UserSerializer
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

def get_csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})