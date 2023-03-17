from django.urls import path
# from .views import registerUser
from .views import home_view, register_view, profile_view

urlpatterns = [
    path('', home_view),
    path('register/', register_view),
    # path('register/', registerUser.as_view(), name="register")
    # path('', log_in),
    path('profile/', profile_view),
    # path('', global_laderboards),
]
