# Generated by Django 5.0.3 on 2024-03-16 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='data',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='event',
            name='location',
            field=models.CharField(max_length=200),
        ),
    ]
