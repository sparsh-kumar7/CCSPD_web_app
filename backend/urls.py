"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from bknd import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Discussions',views.DiscussView,'Discussion')
router.register(r'Users',views.UserView,'User')
router.register(r'Announcements',views.AnnouncementsView,'Announcement')
router.register(r'Leaderboard',views.LeaderboardView,'Leaderboard')
router.register(r'pastEvents',views.pastEvents,'pastEvents')
router.register(r'Discussions/(?P<discuss_pk>[^/.]+)/replies', views.ReplyViewSet, basename='discuss-replies')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
