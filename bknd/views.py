from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics

# Create your views here.

class DiscussView(viewsets.ModelViewSet):
    serializer_class = DiscussSerializer
    queryset = Discuss.objects.all()
    queryset = queryset.filter(admin_approved = True).order_by('-time')

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        print(obj)
        obj.like_count = obj.like_count + 1
        obj.save(update_fields=("like_count", ))
        return super().retrieve(request, *args, **kwargs)

class pastEvents(viewsets.ModelViewSet):
    serializer_class = previousEventsSerializer
    queryset = pastEvents.objects.all()
    def get_queryset(self):
        return self.queryset

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class AnnouncementsView(viewsets.ModelViewSet):
    serializer_class = AnnouncementsSerializer
    queryset = Announcements.objects.all()
    queryset = queryset.order_by('-time')

class LeaderboardView(viewsets.ModelViewSet):
    serializer_class = LeaderboardSerializer
    queryset = Leaderboard.objects.all()
    queryset = queryset.values('username').annotate(points=models.Sum('points')).order_by('-points')[:15]#.values('username','quiz_name','points')
    def create(self, request, *args, **kwargs):
        username = request.data.get('username')
        quiz_name = request.data.get('quiz_name')
        points = request.data.get('points', 0)

        # Get or create a leaderboard entry for the given username and quiz_name
        leaderboard_entry, created = Leaderboard.objects.get_or_create(
            username=username,
            quiz_name=quiz_name,
            defaults={'points': points}
        )

        # If the entry already exists, update points only if the new points are greater
        if not created and points > leaderboard_entry.points:
            leaderboard_entry.points = points
            leaderboard_entry.save()
        return Response({'message': 'Leaderboard entry saved successfully'}, status=status.HTTP_201_CREATED)
    
class ReplyViewSet(viewsets.ModelViewSet):
    serializer_class = ReplySerializer

    def get_queryset(self):
        discuss_id = self.kwargs.get('discuss_pk')
        return Reply.objects.filter(discuss_id=discuss_id)

    def create(self, request, discuss_pk=None, *args, **kwargs):
        # Ensure that the reply is associated with the correct discussion
        data = request.data.copy()
        discuss = Discuss.objects.get(pk=discuss_pk)
        data['discuss'] = discuss.id
        return super().create(request, *args, **kwargs)
"""""
@api_view(['GET', 'POST'])
def DiscussView(request):

    if request.method == 'GET':
        discussion = Discuss.objects.all()
        serializer = DiscussSerializer(discussion, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DiscussSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)"""