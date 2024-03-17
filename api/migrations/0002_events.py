# Generated by Django 5.0.3 on 2024-03-16 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('Ename', models.CharField(max_length=200)),
                ('data', models.CharField(default='', max_length=500)),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
                ('location', models.CharField(max_length=30)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
    ]
