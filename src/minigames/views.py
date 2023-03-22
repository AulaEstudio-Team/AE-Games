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


def atari_breakout(request):
    """Atari Breakout
    """
    template_name = 'atari_breakout/atari.html'
    return render(request, template_name)
    

def tic_tac_toe(request):
    """Tic Tac Toe minigam
    
    """
    template_name = 'tic_tac_toe\index.html'
    return render(request, template_name)
    

def ahorcado_view(request):
    """Default Minigame View
    """
    template_name = 'minijuego_ahorcado/ahorcado.html'
    return render(request, template_name)
    

def TRON_Legacy_minigame_view(request):
    """ view of TRON LEGACY
    """
    template_name = 'tron_legacy/tron.html'
    return render(request, template_name) 
    
    
def conecta4(request):
    """Conecta 4
    TODO: remove
    """
    template_name = 'conecta-4_minigame/index_minigame.html'
    return render(request, template_name)
    

def pinturillas(request):
    """Pinturillas
    TODO: remove
    """
    template_name = 'pinturillas/index.html'
    return render(request, template_name)


def snake(request):
    """SNAKE
    """
    template_name = 'snake-game/snake.html'
    return render(request, template_name)
