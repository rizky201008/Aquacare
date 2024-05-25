<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'image_url',
        'image_path'
    ];

    public function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn($value) => ($value) ?Storage::url("blogs/".$value) : null,
        );
    }
}
