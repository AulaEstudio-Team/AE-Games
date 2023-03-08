from django.shortcuts import render


def mock_minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'mock_minigame/mock_minigame.html'
    return render(request, template_name)

def TRON_Legacy_minigame_view(request):
    """ view of TRON LEGACY
    """
    template_name = 'tron_legacy/tron.html'
    return render(request, template_name)