from django.urls import path
# from .views import registerUser
from .views import home_view, register_view, profile_view, login

urlpatterns = [
    path('', home_view,name="home"),
    path('register/', register_view),
    path('login/', login),
    path('profile/', profile_view)
    # path('', log_in),
    # path('', global_laderboards),
]
