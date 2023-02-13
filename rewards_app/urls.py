from django.urls import path
from . import views
app_name = 'rewards_app'

urlpatterns = [
    path('api/shop/', views.Shop.as_view()),
    path('buyreward/', views.BuyReward)
]