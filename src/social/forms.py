from django import forms

class profileForm(forms.Form):
    name = forms.CharField()
    message = forms.CharField(widget=forms.Textarea)
    
    def handle_exp(self):
        