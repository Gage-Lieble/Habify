from django.shortcuts import render

# Create your views here.

def index(request):
    context = {
        'test': 49
    }
    return render(request, 'index.html',context)