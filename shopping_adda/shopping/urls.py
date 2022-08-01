from django import views
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.Home, name='Home'),
    path('address/', views.address, name='address'),
    path('addtocart/', views.addtocart, name='addtocart'),
    path('buynow/', views.buynow, name='buynow'),
    path('changepassword/', views.changepassword, name='changepassword'),
    path('checkout/', views.checkout, name='checkout'),
    path('customerregistration/', views.customerregistration,name='registration'),
    path('login/', views.login, name='login'),
    path('orders/', views.orders, name='orders'),
    path('topwear/', views.topwear, name='topwear'),
    path('bottomwear/', views.bottomwear, name='bottomwear'),
    path('mobile/', views.mobile, name='mobile'),
    path('laptop/', views.laptop, name='laptop'),
    path('profile/', views.profile, name='profile'),
    path('productdetail/', views.productdetail, name='productdetail'),
]
