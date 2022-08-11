from django.db import models

# Create your models here.

class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)

class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    Department = models.CharField(max_length=500)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=500)

class Products(models.Model):
    ProductId = models.AutoField(primary_key=True)
    ProductName = models.CharField(max_length=500)
    ProductType = models.CharField(max_length=500)
    DateOfExpiration = models.DateField()

class Orders(models.Model):
    OrderId = models.AutoField(primary_key=True)
    OrderName = models.CharField(max_length=100)
    Product = models.CharField(max_length=100)
    DateOfOrder = models.DateField()
