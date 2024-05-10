<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->get();

        return Inertia::render('Homepage', [
            'blogs' => $blogs
        ]);
    }
}
