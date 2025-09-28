<?php

namespace App\Http\Controllers\Posts;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        $posts = Post::latest()
            ->paginate(8);

        return Inertia::render('post/index', [
            'posts' => PostResource::collection($posts->items())->resolve(),
            'links' => $posts->linkCollection(),
            'meta' => [
                'prev_page_url' => $posts->previousPageUrl(),
                'next_page_url' => $posts->nextPageUrl(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string|min:10',
        ]);


        Post::create([
            'content' => $validated['content'],
            'user_id' => auth()->id(),
        ]);

        return redirect()->back();
    }

    public function show(Post $post)
    {
        return Inertia::render('post/show', [
            'post' => new PostResource($post)->resolve()
        ]);
    }

    public function destroy(Request $request, Post $post)
    {
        if ($request->user()->cannot('delete', $post)) {
            return redirect()
                ->back()
                ->withErrors(['message' => 'You are not allowed to delete this post.']);
        }

        $post->delete();

        return redirect('/posts')
            ->with('success', 'Post deleted successfully.');
    }
}
