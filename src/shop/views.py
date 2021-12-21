from django.shortcuts import render
from .models import Product
from django.core.paginator import Paginator


def index(request):
    # recuperer les données depuis la bas données (models)
    products = Product.objects.all()
    item_name = request.GET.get('item-name')
    
    # filtere en fonction de la recherche de l'utilisateur
    if item_name != '' and item_name is not None:
        products = Product.objects.filter(title__icontains=item_name)
    
    # pagination : chaque page contient 4 produits et puis suivante
    paginator = Paginator(products, 4)
    page = request.GET.get('page')
    products = paginator.get_page(page)
    
    return render(request, 'shop/index.html', {'products': products})


def detail(request, id_product):
    product = Product.objects.get(id=id_product)
    return render(request, 'shop/detail.html', {'product': product})