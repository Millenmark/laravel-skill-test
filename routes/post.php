<?php

use App\Http\Controllers\Posts\PostController;
use Illuminate\Support\Facades\Route;

Route::controller(PostController::class)
  ->group(function () {
    Route::get('/', 'index')
      ->name('posts.index');

    Route::get('/{post}', 'show')->name('posts.show');

    Route::post('/', 'store')
      ->name('posts.store');

    Route::delete('/{post}', 'destroy')->name('posts.destroy');
  });
