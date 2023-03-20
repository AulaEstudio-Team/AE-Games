from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.models import User
from social.models import Profile



def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)

def register_view(request):
    """Register view"""
    template_name = "register.html"
    return render(request, template_name)

def login(request):
    """Login View"""
    template_name = "login.html"
    return render(request, template_name)

def profile_view(request):
    """Profile View"""
    mis_datos= Profile.objects.all().values()
    context = {'datos_lista': mis_datos}
    template_name = 'profile/profile.html'
    return render(request, template_name,context)

# class registerUser(CreateView):
    # model = User
    # template_name = "register.html"
    # from_class = UserCreationForm
    # success_url = "home.html"
