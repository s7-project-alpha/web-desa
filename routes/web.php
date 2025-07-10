<?php
// routes/web.php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\VisionMissionValueController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Route awal yang baru
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Routes untuk Vision Mission Values (dalam group auth middleware)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('vision-mission-values', VisionMissionValueController::class)
        ->names([
            'index' => 'vision-mission-values.index',
            'create' => 'vision-mission-values.create',
            'store' => 'vision-mission-values.store',
            'show' => 'vision-mission-values.show',
            'edit' => 'vision-mission-values.edit',
            'update' => 'vision-mission-values.update',
            'destroy' => 'vision-mission-values.destroy',
        ]);

    // Route khusus untuk mengambil data berdasarkan type
    Route::get('api/vision-mission-values/{type}', [VisionMissionValueController::class, 'getByType'])
        ->name('vision-mission-values.by-type');
});
