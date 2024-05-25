<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/', [ReportController::class, 'blogList']);
Route::middleware(['auth', 'role:admin,petugas,user'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('user', [DashboardController::class, 'userlist'])->name('user.list');
    Route::get('report', [ReportController::class, 'reportList'])->name('report');
    Route::post('report', [ReportController::class, 'reportPost'])->name('report.post');
    Route::get('report/{id}', [ReportController::class, 'reportDetail'])->name('report.detail');
});

Route::middleware(['auth', 'role:petugas'])->group(function () {
    Route::post('feedback', [ReportController::class, 'feedbackPost'])->name('feedback.post');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::prefix('blogs')->group(function () {
        Route::get('/', [BlogController::class, 'allPost'])->name('blogs.list');
        Route::post('update', [BlogController::class, 'updateBlogPost'])->name('blogs.update-post');
        Route::post('create', [BlogController::class, 'createBlogPost'])->name('blogs.create-post');
    });
    Route::put('report/{id}', [ReportController::class, 'updateReportPut'])->name('report.put');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
