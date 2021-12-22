from django.contrib import admin
from .models import Category, Command, Product


class AdminCategory(admin.ModelAdmin):
    list_display = ('name', 'date_added')
    
class AdminProduct(admin.ModelAdmin):
    list_display = ('title', 'price', 'category', 'date_added')
class AdminCommand(admin.ModelAdmin):
    list_display = ('nom', 'address', 'email', 'ville', 'pays', 'date_command')


admin.site.register(Category, AdminCategory)
admin.site.register(Product, AdminProduct)
admin.site.register(Command, AdminCommand)