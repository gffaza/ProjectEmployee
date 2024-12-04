<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//testing, register, login
Route::get("/halo","App\Http\Controllers\UserController@halo");
Route::post("/register","App\Http\Controllers\UserController@register");
Route::post("/login","App\Http\Controllers\UserController@login");

//list pegawai
Route::get("/pegawai/{id}","App\Http\Controllers\PegawaiController@detailPegawai");
Route::get("/pegawai","App\Http\Controllers\PegawaiController@listPegawai");                                     
Route::post("/filtering/pegawai","App\Http\Controllers\PegawaiController@filterPegawai");                                     


//menambahkan data pegawai
Route::middleware('auth:sanctum')->group(function () {
Route::post("/pegawai","App\Http\Controllers\PegawaiController@tambahPegawai");                                     
Route::post("/pegawai/{id}","App\Http\Controllers\PegawaiController@ubahPegawai");                                     
Route::delete("/pegawai/{id}","App\Http\Controllers\PegawaiController@hapusPegawai");                                     
});
Route::get("", function () {
    $response = [];
    $response["kode"] = "401";
    $response["pesan"] = "Belom Login";
    return json_encode($response);
})->name("login");
