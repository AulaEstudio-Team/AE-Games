from django.shortcuts import render
<<<<<<< HEAD
from social.models import Profile
=======
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.contrib.auth.models import User


>>>>>>> cf3466c2d79e524b109a71b3321979370472494f

def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)

<<<<<<< HEAD
def profile_view(request):
    """Profile View"""
    mis_datos= Profile.objects.all().values()
    context = {'datos_lista': mis_datos}
    template_name = 'profile/profile.html'
    return render(request, template_name,context)
=======
def register_view(request):
    """Register view"""
    template_name = "register.html"
    return render(request, template_name)

# class registerUser(CreateView):
    # model = User
    # template_name = "register.html"
    # from_class = UserCreationForm
    # success_url = "home.html"
>>>>>>> cf3466c2d79e524b109a71b3321979370472494f
