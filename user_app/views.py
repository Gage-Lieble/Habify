from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
# Create your views here.

def landing(request):
    return render(request, 'user/index.html')

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
