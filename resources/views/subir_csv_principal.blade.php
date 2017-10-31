@extends('cabecera')

@section('contenido')


    <div>

      <!-- Messages container -->
      <div id="messages-card" >
        <div class="row" ></div>
        <div class="col-offset-sm-2 col-sm-5">
          
           <form id="message-form" action="{{action('UploadController@upload')}}" enctype="multipart/form-data"  method="post" accept-charset="utf-8"  > 
            {{ csrf_field() }}
          

            <div  class="form-group">
              <label for="exampleInputEmail1">Nuevo nodo:</label>
              <input class="form-control" type="text" id="nomb_tabla" name="nomb_tabla" placeholder="nombre nodo" class="col-sm-5" required="">
 
            </div>
            <div   class="form-group">
              Archivo csv:
              <input class="form-control" type="file" name="fileToUpload" id="fileToUpload"  class="btn btn-default" >


            </div>
            <div   class="form-group">
              
              <button class="form-control btn btn-primary" type="submit"   class="col-sm-3" >
                Generar
             </button>
            </div>
           
          </form>

        <div>
          
        </div>
        
        </div>
      </div>

    </div>
  <div  role="tablist" aria-multiselectable="true" id="listaNodos">

</div>
@endsection
