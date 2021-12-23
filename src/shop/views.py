from django.shortcuts import redirect, render
from .models import Command, Product
from django.core.paginator import Paginator
import re
import datetime


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
        # items = re.sub(r'[^\w\s]', '', request.POST.get('items-article'))
        items = request.POST.get('items-article').replace("\\", "")
        quantity_total = request.POST.get('Quantity-Total')
        price_total = request.POST.get('Price-Total')
        nom = request.POST.get('nom')
        email = request.POST.get('email')
        address = request.POST.get('address')
        ville = request.POST.get('ville')
        pays = request.POST.get('pays')
        codepostal = request.POST.get('codepostal')
        
        com = Command(Items=items,
                      quantity_total=quantity_total,
                      price_total=price_total,
                      nom=nom,
                      email=email,
                      address=address,
                      ville=ville,
                      pays=pays,
                      codepostal=codepostal)
        com.save()
        
        return redirect('confirmation')
        
    return render(request, 'shop/panier.html')


def confirmation(request):
    info = Command.objects.all()[:1]
    for i in info:
        name = i.nom
        date_livred = i.date_command
    date_livred = date_livred + datetime.timedelta(days=7)
    return render(request, 'shop/confirmation.html', context={"nom": name, "date_livred": date_livred})