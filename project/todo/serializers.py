from rest_framework.serializers import ModelSerializer

from .models import User, Project, TODO

class UserModelSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'

class TODOModelSerializer(ModelSerializer):

    class Meta:
        model = TODO
        fields = '__all__'