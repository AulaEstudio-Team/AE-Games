from django.urls import path

from .views import mock_minigame_view,TRON_Legacy_minigame_view

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    # path('tu-minijuego/', tu_minijuego_view),
    path('tron_legacy/', TRON_Legacy_minigame_view),
]
