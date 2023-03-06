from django.urls import path

from .views import home_view

urlpatterns = [
    path('', home_view),
    # path('', log_in),
    # path('', profile),
    # path('', global_laderboards),
]
