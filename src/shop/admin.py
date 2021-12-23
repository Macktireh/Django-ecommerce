from django.contrib import admin
from .models import Category, Command, Product


admin.site.site_header = "E-commerce"
admin.site.site_title = "Interface Administrateur"
admin.site.index_title = "E-commerce"
class AdminCategory(admin.ModelAdmin):
    list_display = ('name', 'date_added')
    search_fields = ('name',)
    
class AdminProduct(admin.ModelAdmin):
    list_display = ('title', 'price', 'category', 'date_added')
    list_editable = ('price',)
class AdminCommand(admin.ModelAdmin):
    list_display = ('Items', 'quantity_total', 'price_total', 'nom', 'address', 'email', 'ville', 'pays', 'date_command')
    search_fields = ('nom', 'ville', 'pays',)

admin.site.register(Category, AdminCategory)
admin.site.register(Product, AdminProduct)
admin.site.register(Command, AdminCommand)