from django.urls import path

from .views import home_view
from .views import profile_view

urlpatterns = [
    path('', home_view),
    # path('', log_in),
    path('profile/', profile_view),
    # path('', global_laderboards),
]
