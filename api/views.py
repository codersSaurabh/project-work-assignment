from django.shortcuts import render
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from api.render import UserRenderer
from .models import Registration,Event
from .serializer import RegistrationSerializer,EventSerializer,UserLoginSerializer
from rest_framework import viewsets,status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }
class EventView(viewsets.ModelViewSet):
    queryset=Event.objects.all()
    serializer_class=EventSerializer
class RegistrationView(viewsets.ModelViewSet):
    queryset=Registration.objects.all()
    serializer_class=RegistrationSerializer
class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.data.get('email')
   
    password = serializer.data.get('password')
    
    user=Registration.objects.filter(email=email,password=password).exists()
   
       
    
    
    # print(if_user)
    # user = authenticate(request,Email=email, Password=password)
    # print(user)
    if (user):
      data=Registration.objects.filter(email=email,password=password).values()
      id=(data[0]['id'])
      
    #   token = get_tokens_for_user(user)
      return Response({'token':{'email':email,'id':id}, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'token':'Email or Password is not Valid'}, status=status.HTTP_200_OK)

