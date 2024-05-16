<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});
 Route::get('/', [HomeController::class, 'index']);
Route::get('/', [ReportController::class, 'blogList']);
Route::middleware(['auth', 'role:admin,petugas,user'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    // Route::get('/dashboard',[UserController::class,'count'])->name('user.count');
    Route::get('user', [DashboardController::class, 'userlist'])->name('user.list');
    Route::get('report', [ReportController::class, 'reportList'])->name('report');
    Route::post('report', [ReportController::class, 'reportPost'])->name('report.post');
    Route::get('report/{id}', [ReportController::class, 'reportDetail'])->name('report.detail');
});

Route::middleware(['auth', 'role:petugas'])->group(function () {
    Route::post('feedback', [ReportController::class, 'feedbackPost'])->name('feedback.post');
});

Route::middleware(['auth', 'role:admin'])->prefix('blogs')->group(function () {
    Route::get('/', [BlogController::class, 'allPost'])->name('blogs.list');
    Route::get('create', [BlogController::class, 'createBlog'])->name('blogs.create');
    Route::post('/', [BlogController::class, 'createBlogPost'])->name('blogs.post');
    Route::put('report/{id}', [ReportController::class, 'updateReportPut'])->name('report.put');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
