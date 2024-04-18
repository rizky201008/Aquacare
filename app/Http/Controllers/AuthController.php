<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
//    function for show login page
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

//    function for show register page
    public function register()
    {
        return Inertia::render('Auth/Register');
    }
//    function for show register page
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

//    function for logout user
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

//    function for authenticate user
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // return redirect()->intended('dashboard');
            return Inertia::render('Dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}