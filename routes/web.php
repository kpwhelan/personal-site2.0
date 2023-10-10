<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogSubscribersController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostsController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about-me', function () {
    return Inertia::render('AboutMe', []);
})->name('about-me');

Route::get('/contact', function () {
    return Inertia::render('Contact', []);
})->name('contact');

Route::get('/blog', function() {
    $posts = Post::all();
    return Inertia::render('Blog', ['posts' => $posts]);
})->name('blog');

Route::post('/contact', [ContactController::class, 'postContact'])->name('send-contact');

Route::get('/admin', [AdminController::class, 'index'])->name('get-admin')->middleware('auth');
Route::post('admin/mark-as-responded', [AdminController::class, 'markRecordAsResponded'])->name('mark-as-responded')->middleware('auth');

Route::prefix('blog/posts')->group(function() {
    Route::post('/', [PostsController::class, 'create'])->name('submitPost')->middleware(['auth']);
    Route::get('/{id}', [PostsController::class, 'show'])->name('findPost');
});

Route::post('subscribe', [BlogSubscribersController::class, 'addBlogSubscriber'])->name('add-subscriber');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
