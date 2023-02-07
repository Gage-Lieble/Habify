from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.decorators import api_view
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
    
