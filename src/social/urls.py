from django.urls import path
# from .views import registerUser
from .views import home_view, create_models, profile_view, login

urlpatterns = [
    path('', home_view, name="home"),
    path('register/', create_models),
    path('login/', login, name="login"),
    path('profile/', profile_view)
    # path('', log_in),
    # path('', global_laderboards),
]
