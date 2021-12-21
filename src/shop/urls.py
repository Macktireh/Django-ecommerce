from django.urls import path
from shop.views import detail, index

urlpatterns = [
    path('', index, name='home'),
    path('<int:id_product>', detail, name='detail'),
]