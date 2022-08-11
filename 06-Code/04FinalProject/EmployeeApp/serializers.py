from ast import Or
from rest_framework import serializers
from EmployeeApp.models import Departments,Employees, Products, Orders

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Departments 
        fields=('DepartmentId','DepartmentName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees 
        fields=('EmployeeId','EmployeeName','Department','DateOfJoining','PhotoFileName')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:        
        model =Products
        fields=('ProductId','ProductName','ProductType','DateOfExpiration')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Orders 
        fields=('OrderId','OrderName','Product','DateOfOrder')