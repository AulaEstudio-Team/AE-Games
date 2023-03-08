from django.shortcuts import render


def mock_minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'mock_minigame/mock_minigame.html'
    return render(request, template_name)

def my_guerradelperujuego(request):
    """Guerra del peru minigame
    TODO: remove
    """
    template_name = 'guerra_peru\index.html'
    return render(request, template_name)