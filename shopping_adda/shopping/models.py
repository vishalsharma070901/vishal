from django.db import models

class Registration(models.Model):
    email=models.EmailField()
    pswrd=models.CharField(max_length=20)
    confrmpswrd=models.CharField(max_length=20)

class Login(models.Model):
    Email=models.EmailField()
    Password=models.CharField(max_length=20)