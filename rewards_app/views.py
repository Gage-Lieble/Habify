from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import *
from .models import *
# Create your views here.


class Shop(generics.ListAPIView):
    queryset = RewardsShop.objects.all()
    serializer_class = ShopSerializer

@api_view(['POST'])
def BuyReward(request):
    if request.method == "POST":
        print(request.data)

        customer = User.objects.get(username=request.data['user'])

        reward = RewardsShop.objects.create(
            price = request.data['price'],
            img = request.data['img'],
            user = customer
        )
    return render(request, 'index.html')