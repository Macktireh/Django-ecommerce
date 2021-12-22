from django.shortcuts import render
from .models import Command, Product
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


def panier(request):
    
    if request.method == 'POST':
        nom = request.POST.get('nom')
        email = request.POST.get('email')
        address = request.POST.get('address')
        ville = request.POST.get('ville')
        pays = request.POST.get('pays')
        codepostal = request.POST.get('codepostal')
        
        com = Command(nom=nom, email=email, address=address, ville=ville, pays=pays, codepostal=codepostal)
        com.save()
        
    return render(request, 'shop/panier.html')