from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from rest_framework.decorators import api_view
from rest_framework.response import Response

from app.models import Product
from .cart import Cart
from .forms import CartAddProductForm


@api_view(['GET'])
def cart_detail_ws(request):
    cart = Cart(request)
    return Response()

@api_view(['DELETE'])
def cart_remove_ws(request,product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return Response()

@api_view(['POST'])
def cart_add_ws(request,product_id):
    cart = Cart(request)
    product = get_object_or_404(Product,id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
                 quantity=cd['quantity'],
                 update_quantity=cd['update'])

    return HttpResponseRedirect(redirect_to='http://localhost:4200/cart');


@require_POST
def cart_add(request,product_id):
    cart = Cart(request)
    product = get_object_or_404(Product,id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
                 quantity=cd['quantity'],
                 update_quantity=cd['update'])

    return redirect('cart:cart_detail')

def cart_remove(request,product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect('cart:cart_detail')

def cart_detail(request):
    cart = Cart(request)
    return render(request,'cart/detail.html',{'cart':cart})