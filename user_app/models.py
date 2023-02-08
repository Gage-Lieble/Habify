from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
# Create your models here.
class Day(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now, blank=True)
    result = models.BooleanField(default=False)
    notes = models.CharField(max_length=250)
    def __str__(self):
        return f"{self.user}, {self.date}, {self.result}"