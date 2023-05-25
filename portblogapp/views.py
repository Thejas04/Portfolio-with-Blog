from django.shortcuts import redirect, render
from django.http import HttpResponse
from .models import blogpost
from django.views.generic import ListView, DetailView
from . forms import SubscibersForm
from django.contrib import messages




# Create your views here.


def index(request):
    return render(request, 'index.html')
  
class blog(ListView):
    model = blogpost
    template_name = 'blog.html'


    def blog(request):
      if request.method == 'POST':
        form = SubscibersForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Subscription Successful')
            return redirect('/blog')
      else:
       form = SubscibersForm()
      context = {
         'form': form,
    }
      return render(request, '/blog.html', context)
        