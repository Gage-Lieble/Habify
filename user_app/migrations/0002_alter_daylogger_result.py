# Generated by Django 4.1.6 on 2023-02-08 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='daylogger',
            name='result',
            field=models.BooleanField(default=False),
        ),
    ]
