<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', [AuthController::class, 'login'])->name('login');
Route::get('register', [AuthController::class, 'register'])->name('register');
Route::post('login', [AuthController::class, 'authenticate'])->name('login.post');
Route::post('register', [AuthController::class, 'registerUser'])->name('register.post');
Route::get('dashboard', function () {
    return "Hello";
})->name('dashboard');
