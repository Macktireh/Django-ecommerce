from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-date_added']

class Product(models.Model):
    title = models.CharField(max_length=300)
    price = models.FloatField()
    description = models.TextField()
    category = models.ForeignKey(Category, related_name='category', on_delete=models.CASCADE)
    image = models.CharField(max_length=5000)
    date_added = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-date_added']
        
class Command(models.Model):
    Items = models.CharField(max_length=300)
    nom = models.CharField(max_length=128)
    email = models.EmailField()
    address = models.CharField(max_length=300)
    ville = models.CharField(max_length=100)
    pays = models.CharField(max_length=100)
    codepostal = models.CharField(max_length=100)
    date_command = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-date_command',]