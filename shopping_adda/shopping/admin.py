from django.contrib import admin
from .models import *

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display=('id','email','pswrd')
