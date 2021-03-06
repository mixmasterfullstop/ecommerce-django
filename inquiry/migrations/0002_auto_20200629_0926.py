# Generated by Django 3.0.7 on 2020-06-29 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inquiry', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='inquiry',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='inquiry',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='inquiry',
            name='number',
            field=models.IntegerField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='inquiry',
            name='name',
            field=models.CharField(max_length=60, null=True),
        ),
    ]
