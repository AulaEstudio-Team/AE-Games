from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from social.models import Profile
from social.forms import UserForm, ProfileForm
from django.core.exceptions import ValidationError



def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)

# class RegisterView(CreateView):
#     """Register view"""
#     form_class = SignUpForm
#     success_url = reverse_lazy('login')
#     template_name = "register.html"

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

def create_models(request):
    if request.method == 'POST':
        userForm = UserForm(request.POST)
        profileForm = ProfileForm(request.POST)
        if all([userForm.is_valid(), profileForm.is_valid()]):
            user = userForm.save()
            profile = profileForm.save(commit=False)
            profile.user = user
            profile.save()
            return redirect('/profile')
        else:
            # userForm = UserForm()
            # profileForm = ProfileForm()
            # return redirect('home')
            raise ValidationError('Error en el formulario')
    else:
        userForm = UserForm()
        profileForm = ProfileForm()
        return render(request, 'register.html',{'form1' : userForm, 'form2': profileForm})

# class registerUser(CreateView):
    # model = User
    # template_name = "register.html"
    # from_class = UserCreationForm
    # success_url = "home.html"
