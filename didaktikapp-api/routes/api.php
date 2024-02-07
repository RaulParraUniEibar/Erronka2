<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GalderaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/galderas', [GalderaController::class, 'index']);
Route::post('/galderas', [GalderaController::class, 'store']);
Route::get('/galderas/{galdera}', [GalderaController::class, 'show']);
Route::put('/galderas/{galdera}', [GalderaController::class, 'update']);
Route::delete('/galderas/{galdera}', [GalderaController::class, 'delete']);
