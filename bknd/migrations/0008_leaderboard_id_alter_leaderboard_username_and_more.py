# Generated by Django 4.2.7 on 2023-11-25 20:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bknd', '0007_remove_leaderboard_id_alter_leaderboard_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='leaderboard',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='leaderboard',
            name='username',
            field=models.CharField(default='Anonymous', max_length=255),
        ),
        migrations.AlterUniqueTogether(
            name='leaderboard',
            unique_together={('username', 'quiz_name')},
        ),
    ]