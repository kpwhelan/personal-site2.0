<?php

namespace App\Http\Controllers;

use App\Models\BlogSubscriber;
use Illuminate\Http\Request;

class BlogSubscribersController extends Controller {
    public function addBlogSubscriber(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.BlogSubscriber::class,
        ], [
            'email.unique' => 'This email is already subscribed.'
        ]);

        $blog_subscriber = new BlogSubscriber();

        $blog_subscriber->name = $request['name'];
        $blog_subscriber->email = $request['email'];

        if (!$blog_subscriber->save()) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, we\'re having trouble, try again.'
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Thanks for subscribing!'
        ]);
    }
}
