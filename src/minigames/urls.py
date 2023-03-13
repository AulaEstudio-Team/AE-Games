from django.urls import path
from .views import mock_minigame_view, conecta4, wordle_minigame, TRON_Legacy_minigame_view, ahorcado_view, my_guerradelperujuego, atari_breakout

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    path('guerra_peru', my_guerradelperujuego),
    path('wordle/', wordle_minigame),
    # path('tu-minijuego/', tu_minijuego_view),
    path('ahorcadogame/', ahorcado_view),
    path('tron_legacy/', TRON_Legacy_minigame_view),
    path('conecta4/', conecta4),
    path('breakout/', atari_breakout),
]
