from app.models import Category, Product
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','slug')



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('category','name','image','description','price','stock','available','created','updated','slug')
