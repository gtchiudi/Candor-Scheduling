# Generated by Django 4.2.3 on 2023-07-26 17:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0005_alter_request_trailer_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='warehouse',
        ),
        migrations.AddField(
            model_name='request',
            name='warehouse',
            field=models.ForeignKey(default=12345678, on_delete=django.db.models.deletion.CASCADE, to='members.warehouse'),
            preserve_default=False,
        ),
    ]
