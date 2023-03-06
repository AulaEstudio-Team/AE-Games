from django.shortcuts import render


def home_view(request):
    """Home View"""
    template_name = 'home.html'
    return render(request, template_name)