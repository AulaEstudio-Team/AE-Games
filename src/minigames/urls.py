from django.urls import path

from .views import mock_minigame_view, my_guerradelperujuego

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    path('guerra_peru', my_guerradelperujuego),
    # path('tu-minijuego/', tu_minijuego_view),
]
