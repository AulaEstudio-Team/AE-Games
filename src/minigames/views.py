from django.shortcuts import render


def minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'minigame.html'
    return render(request, template_name)
