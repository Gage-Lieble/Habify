from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class RewardsShop(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.IntegerField(default=350)
    img = models.CharField(max_length=999)
    def __str__(self):
        return f"{self.user}{self.price}{self.img}"

