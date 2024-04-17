<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', [AuthController::class, 'login'])->name('login');
Route::get('register', [AuthController::class, 'register'])->name('register');
Route::get('dashboard', [AuthController::class, 'dashboard'])->name('dashboard');
Route::post('login', [AuthController::class, 'authenticate'])->name('login.post');
Route::post('register', [AuthController::class, 'registerUser'])->name('register.post');
Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [DashboardController::class, ''])->name('dashboard');
});
