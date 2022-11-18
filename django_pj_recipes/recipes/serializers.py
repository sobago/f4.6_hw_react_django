from .models import *
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id', 
            'name',
            ]
        
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'id', 
            'name', 
            'category', 
            'composition', 
            'description', 
            'created',
            ]
