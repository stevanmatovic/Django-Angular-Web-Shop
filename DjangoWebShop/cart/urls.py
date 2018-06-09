from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [

    url(r'^$',views.cart_detail,name='cart_detail'),
    url(r'^add/(?P<product_id>\d+)$',views.cart_add,name='cart_add'),
    url(r'^remove/(?P<product_id>\d+)$',views.cart_remove,name='cart_remove'),
    url('ws/cart-detail',views.cart_detail_ws,name='cart_detail'),
    path('ws/add-product',views.cart_add_ws,name='cart_add'),
    path('ws/remove/<slug>',views.cart_remove_ws,name='cart_remove'),
]