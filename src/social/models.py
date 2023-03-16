from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Creator(models.Model):
    """A minigame dev"""
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=2048, null=True, blank=True)
    image = models.ImageField(upload_to ='minigame_creators/', null=True, blank=True)
    description = models.TextField(blank=True, null=True)


class Minigame(models.Model):
    """Minigame information"""
    creator = models.ForeignKey(Creator, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200)
    relative_url = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='minigame_covers/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Achievement(models.Model):
    """Available achievements for each minigame"""
    minigame = models.ForeignKey(Minigame, on_delete=models.CASCADE)
    name = models.TextField(max_length=2048)
    description = models.TextField(blank=True, null=True)
    is_secret = models.BooleanField(default=False)
    icon = models.ImageField(default='default.jpg', upload_to='minigame_achievements/')


class Profile(models.Model):
    """User profile"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default='default.jpg', upload_to='profile_images/')
    experience = models.IntegerField(default=0)
    achievements = models.ManyToManyField(Achievement)
    
    def __str__(self):
        return self.user.username
    

class Score(models.Model):
    """Minigame high-score for a user"""
    minigame = models.ForeignKey(Minigame, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)


class WinRate(models.Model):
    """Minigame Wins and Losses for a user"""
    minigame = models.ForeignKey(Minigame, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
