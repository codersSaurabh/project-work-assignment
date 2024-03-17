
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static  import static
from api.views import EventView,RegistrationView,UserLoginView
from rest_framework import routers
route=routers.DefaultRouter()
route.register("",EventView ,basename='EventView')
root=routers.DefaultRouter()
root.register("",RegistrationView,basename="RegistrationView")
auth=routers.DefaultRouter()
auth.register("",UserLoginView,basename="UserDetail")

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/",include(route.urls)),
    path("data/",include(root.urls)),
    path("data/<str:username>/",include(root.urls)),
 path('login/', UserLoginView.as_view(), name='login'),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
