<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostsController extends Controller {
    public function index() {
        $posts = Post::all();


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request) {
        $title = $request['title'];
        $body = $request['body'];
        $image_url = "https://source.unsplash.com/{$request['imageUrl']}";

        $post = new Post();
        $post->title = $title;
        $post->body = $body;
        $post->image_url = $image_url;

        if (!$post->save()) {
            return response()->json([
                'success' => false,
                'message' => 'Didn\'t save, check the logs'
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Ya Buddy!!!'
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        $post = Post::find($id);

        if (!$post) {
            return Inertia::render('Post', [
                'success' => false,
                'message' => 'Sorry, we\'re having trouble finding that post...'
            ]);
        }

        return Inertia::render('Post', [
            'post' => $post,
            'success' => true,
            'message' => 'Successfully retrieved post!'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
