from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from .forms import Log, Register
from .models import Registration,Login

def Home(request):
    return render(request,'home.html')
def address(request):
    return render(request,'address.html')
def addtocart(request):
    return render(request,'addtocart.html')
def buynow(request):
    return render(request,'buynow.html')
def changepassword(request):
    return render(request,'changepassword.html')
def checkout(request):
    return render(request,'checkout.html')
def customerregistration(request):
    if request.method=='POST':
        lg=Register(request.POST)
        if lg.is_valid():
            email=lg.cleaned_data['email']
            pswrd=lg.cleaned_data['pswrd']
            cpswrd=lg.cleaned_data['confrmpswrd']
            inrt=Registration(email=email,pswrd=pswrd,confrmpswrd=cpswrd)
            inrt.save()
    else:
        lg=Register()
    data=Registration.objects.all()
    return render(request,'customerregistration.html',{'form':lg,'error':data})
def login(request):
    return render(request,'login.html')
def orders(request):
    return render(request,'orders.html')
def productdetail(request):
    return render(request,'productdetail.html')
def profile(request):
    return render(request,'profile.html')
def topwear(request):
    return render(request,'topwear.html')
def bottomwear(request):
    return render(request,'bottomwear.html')
def laptop(request):
    return render(request,'laptop.html')
def mobile(request):
    return render(request,'mobile.html')
