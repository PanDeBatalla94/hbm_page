<?php

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
    return view('welcome');
});

Route::get('/csv/listar', function () {
    return view('csv.listar_nodos');
});


/*Route::get('csv', function () {
    return view('subir_csv_principal');
});
*/
Route::get('/csv', "UploadController@showUpLoadForm");
Route::post('/csv', "UploadController@upload");
