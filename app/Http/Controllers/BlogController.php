<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function allPost()
    {
        $blogs = Blog::latest()->get();
        return Inertia::render('Blog', ['blogs' => $blogs]);
    }

    public function createBlog()
    {
        return Inertia::render('Blog');
    }

    public function createBlogPost(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240'
        ]);

        $request['slug'] = $this->createSlug($request->title);
        $image = $request->file('image');
        $blog = $this->saveBlog($request->all());

        $this->saveImage($image, $blog->id);

        return redirect()->back()->with('message', 'Artikel berhasil dibuat');

    }

    public function updateBlogPost(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $request['slug'] = $this->createSlug($request->title);
        $blog = Blog::find($request->id);
        $blog->update($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $this->saveImage($image, $blog->id);
        }

        return redirect()->back()->with('message', 'Artikel berhasil diupdate');
    }

    private function createSlug(string $title): string
    {
        return Str::slug($title);
    }

    private function saveBlog(array $data)
    {
        return Blog::create(
            $data
        );
    }

    private function saveImage(array|UploadedFile $file, int $blog): void
    {
        $file->store('blogs');
        $path = Storage::path('blogs/' . $file->hashName());
        $url = $file->hashName();
        $this->replaceImage([
            'new_path' => $path,
            'new_url' => $url
        ], $blog);
    }

    private function replaceImage(array $data, int $blogId): void
    {
        $blog = Blog::find($blogId);
        if ($blog->image_path !== null) {
            $this->deleteImage($blog->image_path);
        }
        $blog->update([
            'image_path' => $data['new_path'],
            'image_url' => $data['new_url']
        ]);
    }

    private function deleteImage($path): void
    {
        if (FileFacade::exists($path)) {
            FileFacade::delete($path);
        }
    }
}
