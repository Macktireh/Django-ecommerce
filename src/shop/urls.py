from django.urls import path
from shop.views import confirmation, index, detail, panier

urlpatterns = [
    path('', index, name='home'),
    path('<int:id_product>', detail, name='detail'),
    path('panier/', panier, name='checkout'),
    path('confirmation/', confirmation, name='confirmation'),
]