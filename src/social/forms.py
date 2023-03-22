from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from social.models import Profile

# Sign Up Form
class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = []

class UserForm(UserCreationForm):
    class Meta:
        model = User
        exclude = ('Profile_one_to_one_field',)
        fields = [
            'username', 
            'first_name', 
            'last_name', 
            'email', 
            'password1'
            ]


    first_name = forms.CharField(max_length=30, required=False,  widget=forms.TextInput(attrs={'placeholder': 'First name...'}), label="")
    last_name = forms.CharField(max_length=30, required=False, widget=forms.TextInput(attrs={'placeholder': 'Last name ...'}), label="")
    email = forms.EmailField(max_length=254, widget=forms.TextInput(attrs={'placeholder': 'E-mail...'}), label="")
    username = forms.CharField(max_length=30, required=False, help_text="", widget=forms.TextInput(attrs={'placeholder': 'Username...'}), label="")
    password1 = forms.CharField(help_text="", widget=forms.PasswordInput(), label="")
    password1 = forms.CharField(help_text="", widget=forms.TextInput(attrs={'placeholder': 'Password...'}), label="")
    password2 = None

    # class CommentForm(forms.Form):
        # comment = forms.CharField(widget=forms.Textarea(), label=None)
