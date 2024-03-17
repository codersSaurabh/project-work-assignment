from rest_framework import serializers
from .models import Registration,Event
class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registration
        fields='__all__'
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields='__all__'

class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = Registration
    fields = ['email', 'password']
