from django.shortcuts import render

def wordle_minigame(request):
    """Wordle Minigame
    TODO: remove
    """
    template_name = 'wordle_minigame/wordle_minigame.html'
    return render(request, template_name)


def mock_minigame_view(request):
    """Default Minigame View
    TODO: remove
    """
    template_name = 'mock_minigame/mock_minigame.html'
    return render(request, template_name)
