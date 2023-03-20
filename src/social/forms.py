from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from social.models import Profile
from django.shortcuts import render, redirect

# Sign Up Form
class Model1Form(forms.ModelForm):
    class Meta:
        model = Profile
        fields = [
            'user'
        ]

        user = forms.CharField(max_length=30, required=False)


class Model2Form(UserCreationForm):
    class Meta:
        model = User
        exclude = ('Profile_one_to_one_field',)
        fields = [
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'password1', 
            'password2', 
            ]


    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)
    email = forms.EmailField(max_length=254)
    username = forms.CharField(max_length=30, required=False, help_text="")
    password1 = forms.CharField(help_text="")

def create_models(request):
    if request.method == 'POST':
        form1 = Model1Form(request.POST)
        form2 = Model2Form(request.POST)
        if all([form1.is_valid(), form2.is_valid()]):
            model1 = form1.save()
            model2 = form2.save(commit=False)
            model2.User_1_one_to_one_field = model1
            model2.save()
            return redirect('create_models_success')
        else:
            form1 = Model1Form()
            form2 = Model2Form()
            return render(request, 'register.html',{'form1' : form1, 'form2': form2})

    # class CommentForm(forms.Form):
        # comment = forms.CharField(widget=forms.Textarea(), label=None)