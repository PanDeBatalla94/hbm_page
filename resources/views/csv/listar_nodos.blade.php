@extends('cabecera')

@section('js')



<script type="text/javascript">
     jQuery(document).ready(function() {
      obtener_nodos();
    })
  </script>

@append


@section('contenido')
<b>Nodos</b>


<div id="listaNodos"></div>

@endsection