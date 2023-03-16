from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.models import User



def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)

def register_view(request):
    """Register view"""
    template_name = "register.html"
    return render(request, template_name)

# class registerUser(CreateView):
    # model = User
    # template_name = "register.html"
    # from_class = UserCreationForm
    # success_url = "home.html"