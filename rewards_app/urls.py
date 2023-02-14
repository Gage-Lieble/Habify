from django.urls import path
from . import views
app_name = 'rewards_app'

urlpatterns = [
    path('buyreward/', views.BuyReward)
]