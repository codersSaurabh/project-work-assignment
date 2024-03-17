from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Registration(models.Model):
    name=models.CharField(max_length=30,null=False,blank=False)
    email=models.CharField(max_length=30,null=False,blank=False)
    password=models.CharField(max_length=20,null=False,blank=False)
    def __str__(self) -> str:
        return self.name
class Event(models.Model):
    user_id=models.IntegerField(null=False,blank=False)
    Ename=models.CharField(max_length=200,null=False,blank=False)
    data=models.CharField(max_length=1000,default="")
    Date=models.DateField()
    Time=models.TimeField()
    location=models.CharField(max_length=200,null=False,blank=False)
    image=models.ImageField(upload_to="images")
    def __str__(self) -> str:
        return self.Ename

