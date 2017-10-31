<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function showUpLoadForm(){
            return view('csv.subir_csv_principal');
    }
    public function upload(Request $request)
    {
     
       //sube el archivo a la carpeta storage/app/csv
        $file = $request->file('fileToUpload')->store('public/csv');
     //$file = Storage::putFile('csv', $request->file('fileToUpload'));
        //$path = $request->file('avatar')->store('csv');
      // $file = Storage::disk('public_uploads')->put('csv', file('fileToUpload'));
        //$file = $request->file('fileToUpload')->store('csv');
        $url = storage_path().$file;

      //  $b = str_replace('\\', '/',$url);
       // $b = str_replace(' ','',$b);

       
        $data['ruta'] = $file;

        $data['nodo'] = $request->input('nomb_tabla');
        return view('csv.listar_nodos_au',['ruta'=>$data]);
     
    }
}