from django.urls import path, re_path
from . import views
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('categories', views.CategoryListAPIView.as_view(), name='categories'),
    path('recipes/<int:pk>', views.RecipeDetail.as_view()),
    path('recipes/<str:category>', views.RecipeListAPIView.as_view(), name='recipes'),
    path('openapi', get_schema_view(
        title='API',
        description='API description'), name='openapi-schema'),
]
