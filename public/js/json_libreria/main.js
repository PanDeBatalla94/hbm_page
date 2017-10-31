
function convertir_csv(){ //convertir csv a json y subir informacion a firebase

   //get nombre tabla
    nodo =  document.getElementById('nomb_tabla').value;
    archivo =  document.getElementById('archivo').value;
    var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"+nodo); 

   d3.tsv("/upload_csv/web-start/json/"+archivo, function(data) {

   for (var i = 0 ; i < data.length; i++) 
   {
    //reemplazar valores   
    for (var key in data[i]) {

      data[i][key] = data[i][key].replace('{','');
      data[i][key] = data[i][key].replace('}','');
    }
       messagesRef.push(data[i]);    
    }

  });
}


function obtener_nodos(){

   var html='';
   var messagesRef = new Firebase("https://pruebas-csv.firebaseio.com/"); 


  messagesRef.on('child_added',function(snap) {
    
  html='';
  html = html+'<div class="card"> <div class="card-header" role="tab" id="headingOne"><h5 class="mb-0">';
  html = html+'       <a data-toggle="collapse" data-parent="#accordion" href="#'+snap.key()+'" aria-expanded="true" aria-controls="collapseOne">';
  html = html+         snap.key();
  html = html+'       </a> </h5></div>';

  html = html+'   <div id="'+snap.key()+'" class="collapse " role="tabpanel" aria-labelledby="headingOne">';
  html = html+'     <div class="card-block">';
  html = html+'<div class="table-responsive" >';
  html = html+'        <table class="table table-bordered">';

  count = 0;
  html_tab='';
  snap.forEach(function(child) {


 
    html_tab = html_tab+'<tr> ';
    if(count == 0){
      html_tab = html_tab+'<th>id</th>';
      for(var j = 0 ; j<Object.keys(child.val()).length ; j++ )
      {
           html_tab = html_tab+'<th>'+Object.keys(child.val())[j]+'</th>';
      }
      count ++;
    }
    html_tab = html_tab+'</tr>';
    html_tab = html_tab+'<tr onclick="modificar_registro(this);">';
    html_tab = html_tab+'<td>'+child.key()+'</td>';

    for(var j = 0 ; j<Object.keys(child.val()).length ; j++ )
    {
      var valor = child.child(Object.keys(child.val())[j]).val();
      html_tab = html_tab+'<td>'+valor+'</td>';
    }
      html_tab = html_tab+'</tr>';

   });
   html = html + html_tab;
//   html = html+'</tr>';
   html = html+'</table>';
   html = html+'     </div>';
   html = html+'     </div>';
   html = html+'   </div>';
   html = html+' </div>';

   document.getElementById('listaNodos').insertAdjacentHTML('beforeend', html);

});


//db.ref("-Users/-KUanJA9egwmPsJCxXpv").update({ displayName: "New trainer" });


}
var input_sel = true;
var row_sel = '';

var row_active = [];
function modificar_registro(row){
  var col = row.getElementsByTagName("td");
 // var t = col[i].innerHTML;
  row_active[col[0].innerHTML] = true;
  
  console.log(col[0].innerHTML);
  if( col[0].innerHTML !=row_sel  && row_active[col[0].innerHTML]){
    input_sel = false;
    
    row_sel= col[0].innerHTML;

    for (var i = 0 ; i< col.length; i++)
    {
      var node = document.createElement("input"); 
      node.value = col[i].innerHTML;
       col[i].innerHTML = '';
      col[i].appendChild(node);
    }
  }
 
  //var myJsonString = JSON.stringify(yourArray);
 // console.log(id);
}


