from django.urls import path

from .views import minigame_view

urlpatterns = [
    path('minigame/', minigame_view),
    # path('tu-minijuego/', tu_minijuego_view),
]
