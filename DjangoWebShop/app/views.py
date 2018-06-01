from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpRequest, HttpResponse
from datetime import datetime
from .models import Category, Product
from cart.forms import CartAddProductForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm

#rest imports
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from app.serializers import CategorySerializer,ProductSerializer

#web services
@api_view(['GET'])
def product_list_ws(request):
    products = Product.objects.filter(available=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def products_in_category_ws(request,name):
    products = Product.objects.filter(available=True)
    try:
        category = Category.objects.get(slug=name)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    products = products.filter(category=category)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail_ws(request, slug):
    try:
        product = Product.objects.filter(slug=slug).first()
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(product)
    return Response(serializer.data)


#end of web services

# our views
def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'shop/Products/list.html', {'category':category,
                                                      'categories': categories,
                                                      'products': products})


def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    return render(request,
                  'shop/Products/detail.html',
                  {'product':product,
                   'cart_product_form':cart_product_form})

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

# Create your views here.
def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    tparams = {
        'title': 'Home Page',
        'year': datetime.now().year,
    }
    return render(request, 'index.html', tparams)


def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    tparams = {
        'title': 'Contact',
        'message': 'Your contact page.',
        'year': datetime.now().year,
    }
    return render(request, 'contact.html', tparams)


def about(request):
    assert isinstance(request, HttpRequest)
    tparams = {
        'title': 'About',
        'message': 'Your application description page.',
        'year': datetime.now().year,
    }
    return render(request, 'about.html', tparams)



def layout(request):
    return render(request, 'layout.html')

def thanks(request):
    return render(request, 'shop/Products/thanks.html')
