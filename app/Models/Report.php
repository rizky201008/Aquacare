<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'rasa',
        'suhu',
        'kekentalan',
        'warna',
        'bau',
        'keasaman',
        'detail',
        'status',
        'user_id',
        'long',
        'lat',
    ];

    public function feedback(): HasMany
    {
        return $this->hasMany(Feedback::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
