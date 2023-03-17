from django.shortcuts import render
from social.models import Profile

def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)

def profile_view(request):
    """Profile View"""
    mis_datos= Profile.objects.all().values()
    context = {'datos_lista': mis_datos}
    template_name = 'profile/profile.html'
    return render(request, template_name,context)