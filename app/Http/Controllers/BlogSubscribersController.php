<?php

namespace App\Http\Controllers;

use App\Models\BlogSubscriber;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\Newsletter\Facades\Newsletter as Newsletter;

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

        if (!$this->addMailchimpSubscriber($blog_subscriber->name, $blog_subscriber->email)) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, we\'re having trouble, try again.'
            ], 500);
        }

        if (!$blog_subscriber->save()) {
            try {
                Newsletter::unsubscribe($blog_subscriber->email);
            } catch(Exception $e) {
                Log::error($e);
            }

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

    private function addMailchimpSubscriber(String $name, String $email): bool {
        if ($this->isSubscribedToMailChimp($email) || !Newsletter::subscribeOrUpdate($email, ['FNAME' => $name])) return false;

       return true;
    }

    private function isSubscribedToMailChimp(String $email): bool {
        return Newsletter::isSubscribed($email);
    }
}
