from django.contrib import admin
from social.models import Achievement, Creator, Minigame, Profile, Score, User, WinRate

# Overwrite the User model with our profile model
admin.site.unregister(User)
admin.site.register([User, Profile])

# Add the other models to the admin view
admin.site.register(Achievement)
admin.site.register(Creator)
admin.site.register(Minigame)
admin.site.register(Score)
admin.site.register(WinRate)