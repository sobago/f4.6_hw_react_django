from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.http import Http404
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.

# @api_view(['GET',])
# def category_list(request):
#     if request.method == 'GET':
#         categorys = Category.objects.all()

class CategoryListAPIView(ListAPIView):
    serializer_class = CategorySerializer
    
    def get_queryset(self):
        return Category.objects.all()
    
class RecipeListAPIView(ListAPIView):
    serializer_class = RecipeSerializer
    
    def get_queryset(self):
        queryset =  Recipe.objects.all().filter(category__name=self.kwargs['category'])
        # category = self.request.query_params.get('category')
        # if category is not None:
        #     queryset = queryset.filter(category__name=category)
        return queryset
    
class RecipeDetail(APIView):
    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        recipe = self.get_object(pk)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)
    
    
    

