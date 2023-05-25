from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
# Create your models here.

class blogpost(models.Model):
    title = models.CharField(max_length= 1000)
    content = RichTextField(blank=True, null=True)
    slug = models.CharField(max_length= 1000)
    image = models.ImageField(null="True",blank="True", upload_to="images/" )
    created_at = models.DateTimeField(auto_now_add=True)
    upload_to = models.DateField(auto_now=True)
    
    
class Subscribers(models.Model):
    email = models.EmailField(null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    

                                  