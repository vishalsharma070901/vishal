from cmath import log
from pyexpat import model
from tkinter import Widget
from dataclasses import field,fields
import django

from django.core import validators
from django import forms
from .models import Registration,Login

class Register(forms.ModelForm):
    class Meta:
        model=Registration
        fields=['email','pswrd','confrmpswrd']

    widgets={
        'email':forms.EmailInput(attrs={'class':'mb-3 form-control'}),
        'pswrd':forms.PasswordInput(attrs={'class':'mb-3 form-control'}),
        'confrmpswrd':forms.PasswordInput(attrs={'class':'mb-3 form-control'})
    }

class Log(forms.ModelForm):
    class Meta:
        model=Login
        fields=['Email','Password']

    widgets={
        'Email':forms.EmailInput(attrs={'class':'mb-3 form-control'}),
        'Password':forms.PasswordInput(attrs={'class':'mb-3 form-control'})
    }