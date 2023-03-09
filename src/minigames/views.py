from django.shortcuts import render


def mock_minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'mock_minigame/mock_minigame.html'
    return render(request, template_name)

def atari_breakout(request):
    """Atari Breakout
    """
    template_name = 'atari_breakout/atari.html'
    return render(request, template_name)