from django.db import models

# Create your models here.
class Discuss(models.Model):
    "Discuss Model"
    # id = models.IntegerField(primary_key=True, null=False, blank=False÷)
    username = models.CharField(max_length=255, null=False, blank=False, default="Anonymous")
    discussion_title = models.CharField(max_length=255, null=False, blank=False)
    discussion_text = models.TextField(blank=False, null=False)
    admin_approved = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now=True)
    like_count= models.IntegerField(default=0)

    def __str__(self):
        return f"{self.discussion_title}: {self.discussion_text}"
    
class User(models.Model):
    "User Model"
    name = models.CharField(max_length=255,null=False,blank=False)
    email = models.EmailField(blank=False,null=False)
    def __str__(self) -> str:
        return f"{self.name}:{self.email}"

class Announcements(models.Model):
    "Announcements Model"
    announcement = models.CharField(max_length=255,null=False,blank=False)
    time = models.DateTimeField(auto_now=True)

class Leaderboard(models.Model):
    "Leaderboard Model"
    username = models.CharField(max_length=255, null=False, blank=False, default="Anonymous")
    quiz_name = models.CharField(max_length=255, null=False, blank=False, default="x")
    points = models.IntegerField(default=0)
    def __str__(self):
        return f"{self.username}: {self.points}"
    
class Reply(models.Model):
    "Reply Model"
    discuss = models.ForeignKey(Discuss, on_delete=models.CASCADE, related_name='replies')
    username = models.CharField(max_length=255, null=False, blank=False, default="Anonymous")
    reply_text = models.TextField(blank=False, null=False)
    time = models.DateTimeField(auto_now=True)
    like_count = models.IntegerField(default=0)

    def __str__(self):
        return f"Reply to {self.discuss.discussion_title}: {self.reply_text}"

class images(models.Model):
    image = models.ImageField(upload_to="frontend/src/component/images/pastEvents")
    def __str__(self):
        return str(self.image)

class pastEvents(models.Model):
    heading = models.CharField(max_length = 100)
    description = models.TextField()
    images = models.ManyToManyField(images)

    def __str__(self):
        return self.heading
    

