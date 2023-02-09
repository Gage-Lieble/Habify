from django.urls import path
from . import views
app_name = 'user_app'

urlpatterns = [
    path('', views.landing, name='landing'),
    path('api/new/', views.CreateUser),
    path('api/', views.UserView.as_view()),
    path('api/login/', views.login_user, name="login"),
    path('api/logout/', views.logout_user, name="logout"),
    path('api/csrf/', views.get_csrf),
    path('api/log/', views.DayLogView.as_view(), name="daylog"),
    path('api/daylog/', views.NewDayLog),
]