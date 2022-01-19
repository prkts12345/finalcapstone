<?php

use App\Http\Controllers\API\FlightController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/addpassenger', [FlightController::class, 'create']);
Route::get('/editpass/{id}', [FlightController::class, 'edit']);
Route::put('/updatepass/{id}', [FlightController::class, 'update']);
Route::delete('/deleteflight/{id}', [FlightController::class, 'destroy']);
Route::get('!fj$rh$44Su', [FlightController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
