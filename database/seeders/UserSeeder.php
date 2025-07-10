<?php
// database/seeders/UserSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin Desa Tanjung Selamat',
            'email' => 'admin@desatanjungselamat.id',
            'username' => 'admin',
            'password' => Hash::make('password123'),
            'role' => 'admin',
            'is_active' => true,
        ]);
    }
}

// Jangan lupa tambahkan di database/seeders/DatabaseSeeder.php:
// public function run()
// {
//     $this->call([
//         UserSeeder::class,
//     ]);
// }
