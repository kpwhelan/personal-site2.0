<?php

namespace App\Http\Controllers;

use App\Models\ContactRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index() {
        if (!Gate::allows('is_admin', Auth::user())) abort(401);

        $records = ContactRecord::orderBy('created_at', 'DESC')
            ->where('responded_to', false)
            ->get();

        return Inertia::render('Admin', [
            'records' => $records
        ]);
    }

    public function markRecordAsResponded(Request $request) {
        $record_id = $request['record_id'];

        $record = ContactRecord::find($record_id);

        $record->responded_to = true;

        if (!$record->save()) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong bud.'
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Done, nice work buddy'
        ], 200);
    }
}
