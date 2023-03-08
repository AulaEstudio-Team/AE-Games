from django.shortcuts import render


def mock_minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'mock_minigame/mock_minigame.html'
    return render(request, template_name)

def ahorcado_view(request):
    """Default Minigame View
    """
    template_name = 'minijuego_ahorcado/ahorcado.html'
    return render(request, template_name)
