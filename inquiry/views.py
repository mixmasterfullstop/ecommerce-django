from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm
from  .models import Inquiry
from django.contrib import messages
from  .forms import inquire,UserCreateForm

# Create your views here.
def inquiry(request):
    if request.method == 'GET':
        return render(request, 'inquiry/inquires.html',{'form': inquire})
    else:
        
        user = Inquiry.objects.create(name=request.POST['name'],email=request.POST['email'],inquiry=request.POST['memo'],number=request.POST['number'])
        user.save()
        return redirect('home')

def about(request):
    return render(request,'inquiry/about.html')

def home(request):
    return render(request,'inquiry/index.html')


def contact(request):
    return render(request,'inquiry/contact.html')


def login(request):

    return render(request,'inquiry/login.html',{'form':AuthenticationForm()})
def admin(request):
    return render(request, 'admin/index')

def signup(request):
    if request.method == 'POST':
        form = UserCreateForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request,f'account created for {username}')
            return redirect('login')

    else:
     form =  UserCreateForm
    return render(request,'inquiry/register.html',{'form':form})