from django.conf.urls import url
from . import views

urlpatterns = [

    url(r'^$',views.cart_detail,name='cart_detail'),
    url(r'^add/(?P<product_id>\d+)$',views.cart_add,name='cart_add'),
    url(r'^remove/(?P<product_id>\d+)$',views.cart_remove,name='cart_remove'),
    url('ws/cart-detail',views.cart_detail_ws,name='cart_detail'),
    url('ws/add-product/<product_id>',views.cart_add_ws,name='cart_add'),
    url('ws/remove/<product_id>',views.cart_remove_ws,name='cart_remove'),
]