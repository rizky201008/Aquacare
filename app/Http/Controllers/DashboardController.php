<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }
    public function count()
    {
        $userCount = User::count();
        return Inertia::render('Dashboard', [
            'userCount' => $userCount,

        ]);
    }
    public function userlist()
    {
        return Inertia::render('User', ['users' => User::get()]);
    }
    public function report()
    {
        return Inertia::render('Report');
    }
    public function feedback()
    {
        return Inertia::render('Feedback');
    }
    
}
