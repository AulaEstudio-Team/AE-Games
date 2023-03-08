from django.urls import path

from .views import mock_minigame_view, ahorcado_view

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    # path('tu-minijuego/', tu_minijuego_view),
    path('ahorcadogame/', ahorcado_view),
]
