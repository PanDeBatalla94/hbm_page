@extends('csv.listar_nodos')
@section('js')

{!! Html::script('js/json_libreria/d3.js') !!}
{!! Html::script('js/json_libreria/d3.min.js') !!}
{!! Html::script('js/convertir_csv.js') !!}


<script type="text/javascript">
     jQuery(document).ready(function() {
     	var ruta = "{{$ruta['ruta']}}";
     	var nodo = "{{$ruta['nodo']}}";
     	var bSuccess = false;
     	//console.log("{{ Storage::path($ruta['ruta']) }}");
     
     	//"{{$ruta['ruta']}}"
     	var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"+"{{$ruta['nodo']}}"); 

     	var database = firebase.database();
		d3.tsv( "{{Storage::url($ruta['ruta'])}}",function(data) {
		for (var i = 0 ; i < data.length; i++) 
		{ 
			bSuccess = false;
		//reemplazar valores   
		var count =0;
		var id;
		for (var key in data[i]) {

		  data[i][key] = data[i][key].replace('{','');
		  data[i][key] = data[i][key].replace('}','');
		  if(count==0)
		  {
				id=data[i][key] ;
		  }
		  count++;
		}
		
		   firebase.database().ref("{{$ruta['nodo']}}"+"/"+id).set(data[i]).then(function() { bSuccess =true; })

		}

		});

		//if(bSuccess)
		//{
		//	window.location.href=
		//}
     	//convertir_csv(ruta, nodo);
      //obtener_nodos();
    });
     function onSuccess(res) {
	  return true;
	}

  </script>

@append
