from django.contrib import admin
from .models import *
# Register your models here.

class DiscussionAdmin(admin.ModelAdmin):
    readonly_fields = ('id','time','like_count')
    list_display = [
        'id',
        'username',
        'discussion_title',
        'discussion_text',
        'admin_approved',
        'like_count',
        'time',
    ]

class UserAdmin(admin.ModelAdmin):
    search_fields = ['name','email']
    list_display = ['name','email']

class AnnouncementsAdmin(admin.ModelAdmin):
    list_display = ['announcement','time']

class LeaderboardAdmin(admin.ModelAdmin):
    list_display = ['username','quiz_name','points']

class ReplyAdmin(admin.ModelAdmin):
    list_display = ['id', 'discuss', 'username', 'time']

admin.site.register(Discuss,DiscussionAdmin)
admin.site.register(User,UserAdmin)
admin.site.register(Announcements,AnnouncementsAdmin)
admin.site.register(Leaderboard,LeaderboardAdmin)
admin.site.register(Reply,ReplyAdmin)
admin.site.register(pastEvents)
admin.site.register(images)