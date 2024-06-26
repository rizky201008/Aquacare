<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function count()
    {
        $userCount = User::count();
        return Inertia::render('Dashboard', [
            'userCount' => $userCount,

        ]);
    }
}
