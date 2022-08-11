from django.urls import re_path as url
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^department$',views.departmentApi),
    url(r'^department/([0-9]+)$',views.departmentApi),

    url(r'^employee$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi),

    url(r'^product$',views.productApi),
    url(r'^product/([0-9]+)$',views.productApi),

    url(r'^order$',views.orderApi),
    url(r'^order/([0-9]+)$',views.orderApi),

    url(r'^employee/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)