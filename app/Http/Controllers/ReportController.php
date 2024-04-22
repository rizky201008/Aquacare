<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Report;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function reportList()
    {
        return Inertia::render('Report',[
            'report' => Report::latest()->get()
        ]);
    }

    public function feedbackList() {
        return Inertia::render('Feedback',[
            'feedback' => Feedback::latest()->get()
        ]);
    }
}
