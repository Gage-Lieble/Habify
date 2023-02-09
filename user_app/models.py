from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
# Create your models here.
class Day(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    day = models.DateField(default=datetime.now, blank=True)
    activity = models.IntegerField(default=0)
    notes = models.CharField(max_length=250)
    def __str__(self):
        return f"{self.user}, {self.day}, {self.activity}"