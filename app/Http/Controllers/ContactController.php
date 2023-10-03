<?php

namespace App\Http\Controllers;

use App\Models\ContactRecord;
use Illuminate\Http\Request;

class ContactController extends Controller {
    public function postContact(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        $contact_record = new ContactRecord();
        $contact_record->name = $request['name'];
        $contact_record->email = $request['email'];
        $contact_record->subject = $request['subject'];
        $contact_record->message = $request['message'];

        if (!$contact_record->save()) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong, please try again.'
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Message Sent Successfully!'
        ], 201);
    }
}
