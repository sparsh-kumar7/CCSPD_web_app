# Generated by Django 4.2.7 on 2023-11-19 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bknd', '0003_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='discuss',
            name='username',
            field=models.CharField(default='Anonymous', max_length=255),
        ),
    ]
