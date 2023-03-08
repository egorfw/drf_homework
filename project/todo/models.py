from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    gender = models.CharField(max_length=1)
    function = models.CharField(max_length=64)

class Project(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=128, db_index=True)
    repo = models.URLField(max_length=128, blank=True, unique=True)

class TODO(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    body = models.TextField(blank=True)
    
