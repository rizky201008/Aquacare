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
        'detail',
        'status',
        'user_id',
    ];

    public function feedback():HasMany
    {
        return $this->hasMany(Feedback::class);
    }
}
