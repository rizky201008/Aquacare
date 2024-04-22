<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
