from django.urls import path

from .views import mock_minigame_view, atari_breakout

urlpatterns = [
    path('mock_minigame/', mock_minigame_view),
    path('breakout/', atari_breakout)
]
