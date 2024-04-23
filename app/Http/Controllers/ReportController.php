<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function reportList()
    {
        $user = Auth::user();
        if ($user->roles->name === 'admin') {
            $reports = Report::latest()->get();
        } else {
            $reports = $user->reports()->get();
        }
        return Inertia::render('Report', [
            'reports' => $reports
        ]);
    }

    public function reportPost(Request $request)
    {
        $request->validate([
            'rasa' => 'required',
            'suhu' => 'required',
            'kekentalan' => 'required',
            'detail' => 'required'
        ]);

        $user_id = auth()->user()->id;

        $this->createReport(array_merge($request->all(), ['user_id' => $user_id]));

        return redirect()->back()->with('message', 'Laporan berhasil dikirim');
    }

    public function updateReportPut()
    {
        $data = request()->all();
        $this->updateReport($data);
        return redirect()->back()->with('message', 'Laporan berhasil diupdate');
    }

    public function feedbackList()
    {
        return Inertia::render('Feedback', [
            'feedbacks' => Feedback::latest()->get()
        ]);
    }


    private function createReport(array $data)
    {
        try {
            Report::create([
                'rasa' => $data['rasa'],
                'suhu' => $data['suhu'],
                'kekentalan' => $data['kekentalan'],
                'detail' => $data['detail'],
                'status' => $data['status'] ?? 'pending',
                'user_id' => $data['user_id']
            ]);
        } catch (\Exception $e) {
            throw new $e->getMessage();
        }
    }

    private function updateReport($data)
    {
        try {
            Report::find($data['id'])->update([
                'rasa' => $data['rasa'],
                'suhu' => $data['suhu'],
                'kekentalan' => $data['kekentalan'],
                'detail' => $data['detail'],
                'status' => $data['status'] ?? 'pending',
                'user_id' => $data['user_id']
            ]);
        } catch (\Exception $e) {
            throw new $e->getMessage();
        }
    }
}
