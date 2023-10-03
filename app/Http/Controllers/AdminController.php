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

        $records = ContactRecord::orderBy('created_at', 'DESC')->get();

        return Inertia::render('Admin', [
            'records' => $records
        ]);
    }
}
