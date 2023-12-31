# Generated by Django 4.2.7 on 2023-11-27 18:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bknd', '0009_alter_leaderboard_unique_together'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='Anonymous', max_length=255)),
                ('reply_text', models.TextField()),
                ('time', models.DateTimeField(auto_now=True)),
                ('like_count', models.IntegerField(default=0)),
                ('discuss', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='bknd.discuss')),
            ],
        ),
    ]
