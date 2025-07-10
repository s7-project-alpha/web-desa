<?php
// app/Http/Middleware/AdminMiddleware.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()) {
            return redirect()->route('login');
        }

        if (!auth()->user()->isAdmin() || !auth()->user()->is_active) {
            auth()->logout();
            return redirect()->route('login')->with('error', 'Akses ditolak. Hanya admin yang dapat mengakses sistem ini.');
        }

        return $next($request);
    }
}

// Jangan lupa register middleware di app/Http/Kernel.php:
// protected $middlewareAliases = [
//     'admin' => \App\Http\Middleware\AdminMiddleware::class,
// ];
