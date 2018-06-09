from argparse import _AppendAction

from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json

from app.models import Product
from app.serializers import ProductSerializer
from .cart import Cart
from .forms import CartAddProductForm


@api_view(['GET'])
def cart_detail_ws(request):
    cart = Cart(request)
    list = [];
    quantities = [];
    for key, value in cart.cart.items():
        data = {}
        p = get_object_or_404(Product, id=key)
        serializers = ProductSerializer(p);
        q = value['quantity']
        totalPrice = float(serializers.data['price']) * q;
        data['product'] = serializers.data;
        data['quantity'] = q;
        data['totalPrice'] = round(totalPrice,2);
        list.append(data)
    return Response(list)

@api_view(['DELETE'])
def cart_remove_ws(request,slug):
    cart = Cart(request)
    product = get_object_or_404(Product, slug= slug)
    cart.remove(product)
    return Response()

@api_view(['POST'])
def cart_add_ws(request):
    print('usao');
    body = json.loads(request.body)
    quantity = body['quantity']
    slug = body['slug']
    cart = Cart(request)
    product = get_object_or_404(Product,slug=slug)

    cart.add(product=product,
                 quantity=int(quantity),
                 update_quantity=False)

    return Response('');


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