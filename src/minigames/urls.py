from django.urls import path

from .views import mock_minigame_view, conecta4, wordle_minigame, TRON_Legacy_minigame_view, ahorcado_view

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    path('wordle/', wordle_minigame),
    # path('tu-minijuego/', tu_minijuego_view),
    path('ahorcadogame/', ahorcado_view),
    path('tron_legacy/', TRON_Legacy_minigame_view),
    path('conecta4/', conecta4),
]
