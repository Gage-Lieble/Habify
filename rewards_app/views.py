from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import *
from .models import *
from user_app.models import *
# Create your views here.


class Shop(generics.ListAPIView):
    queryset = RewardsShop.objects.all()
    serializer_class = ShopSerializer

@api_view(['POST'])
def BuyReward(request):
    if request.method == "POST":
        print(request.data)
        price = request.data['price']
        customer = User.objects.get(username=request.data['user'])
        profile = Profile.objects.get(user=customer)
        print(profile.coins, '=========')
        if int(profile.coins) >= price:
            profile.coins -= price
            reward = RewardsShop.objects.create(
                price = price,
                img = request.data['img'],
                user = customer
            )
            profile.save()
    return render(request, 'index.html')