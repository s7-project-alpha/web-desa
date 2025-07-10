<?php
// app/Http/Controllers/DashboardController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        // Data statistik dashboard
        $stats = [
            'total_admin' => User::active()->count(),
            'total_modules' => 9, // Total modul yang akan dibuat
            'last_login' => auth()->user()->updated_at->diffForHumans(),
            'system_status' => 'active'
        ];

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            'user' => auth()->user(),
        ]);
    }
}
