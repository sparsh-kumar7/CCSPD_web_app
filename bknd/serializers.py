from rest_framework import serializers
from .models import *

class DiscussSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discuss
        fields = ['id', 'username','discussion_title', 'discussion_text', 'admin_approved','like_count','time']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name','email',)
    
class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = ('announcement','time',)

class LeaderboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leaderboard
        fields = ('username','quiz_name','points',)

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = '__all__'

    
class imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = images
        fields = '__all__'

class previousEventsSerializer(serializers.ModelSerializer):
    images = imageSerializer(many=True)
    class Meta:
        depth = 1
        model = pastEvents
        fields = ('heading','description',"images")