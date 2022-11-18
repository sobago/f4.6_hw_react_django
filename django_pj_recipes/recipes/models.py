from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField('Название категории', max_length=64)
    
    def __str__(self):
        return f'{self.id} : {self.name}'
    
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = "Категории"
    

class Recipe(models.Model):
    name = models.CharField('Название блюда', max_length=128)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    composition = models.CharField('Состав блюда', max_length=256)
    description = models.TextField('Рецепт приготовления', max_length=1024)
    created = models.DateTimeField('Создано', auto_now_add=True)
    
    def __str__(self):
        return f'{self.id} : {self.name}'
    
    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'
        ordering = ['category', 'created']
