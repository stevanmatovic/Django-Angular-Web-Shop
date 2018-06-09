"""webproj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

from app import views

urlpatterns = [
    path('about/', views.about, name='about'),
    url(r'^login/$', auth_views.login, name='login'),
    path('layout/', views.layout, name='layout'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^admin/', admin.site.urls),
    url(r'^thanks/$', views.thanks, name='thanks'),
    url(r'^cart/',include(('cart.urls','cart'),namespace='cart')),
    url(r'^', include(('app.urls','app'), namespace='shop')),
    path('ws/product-list',views.product_list_ws),
    path('ws/product-list/<slug:name>',views.products_in_category_ws),
    path('ws/product-detail/<slug:slug>',views.product_detail_ws),
    path('ws/categories',views.categories_ws),
    path('ws/login',views.login_ws),
    path('ws/register',views.register_ws),
    path('ws/logout',auth_views.logout),
    path('ws/username',views.username_ws)

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
