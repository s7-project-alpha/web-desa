<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisionMissionValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'content',
        'description',
        'order_position',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // Scope untuk filter berdasarkan type
    public function scopeVision($query)
    {
        return $query->where('type', 'vision');
    }

    public function scopeMission($query)
    {
        return $query->where('type', 'mission');
    }

    public function scopeValue($query)
    {
        return $query->where('type', 'value');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order_position', 'asc');
    }

    // Accessor untuk mendapatkan label type yang readable
    public function getTypeLabel()
    {
        return match($this->type) {
            'vision' => 'Visi',
            'mission' => 'Misi',
            'value' => 'Nilai Dasar',
            default => ucfirst($this->type),
        };
    }
}
