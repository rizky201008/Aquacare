<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $reportsCount = Report::count();
        $approvedReportsCount = Report::where('status', 'approved')->count();
        $pendingReportsCount = Report::where('status', 'pending')->count();
        return Inertia::render('Dashboard',[
            'reportsCount' => $reportsCount,
            'approvedReportsCount' => $approvedReportsCount,
            'pendingReportsCount' => $pendingReportsCount,
        ]);
    }
    public function count()
    {
        $userCount = User::count();
        return Inertia::render('Dashboard', [
            'userCount' => $userCount,

        ]);
    }
    public function userlist()
    {
        return Inertia::render('User', ['users' => User::get()]);
    }

}
