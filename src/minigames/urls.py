from django.urls import path

from .views import mock_minigame_view, wordle_minigame

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    path('wordle/', wordle_minigame),
    # path('tu-minijuego/', tu_minijuego_view),
]
