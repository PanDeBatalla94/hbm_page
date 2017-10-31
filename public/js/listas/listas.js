

function obtener_nodos(){


  var html='';
//ontienevalores de nodos que se actualizan
  const divListado = document.getElementById('listaNodos');
  const fDB = firebase.database().ref();
  /*preDB.on('value', snap => function(){

 
  html = html+'<div class="card"> <div class="card-header" role="tab" id="headingOne"><h5 class="mb-0">';
  html = html+'       <a data-toggle="collapse" data-parent="#accordion" href="#'+preDB.key()+'" aria-expanded="true" aria-controls="collapseOne">';
  html = html+         preDB.key();
  html = html+'       </a> </h5></div>';

  html = html+'   <div id="'+preDB.key()+'" class="collapse " role="tabpanel" aria-labelledby="headingOne">';
  html = html+'     <div class="card-block">';
  html = html+'<div class="table-responsive" >';
  html = html+'        <table class="table table-bordered">';

 //   html = html + html_tab;
//   html = html+'</tr>';
   html = html+'</table>';
   html = html+'     </div>';
   html = html+'     </div>';
   html = html+'   </div>';
   html = html+' </div>';

});*/
var sNodo;
divListado.innerHTML='';
fDB.on("child_added",function (snapshot) {
  
            key = snapshot.key;         
           // tablas.push([key]);
            //snapshot.forEach(function (childSnapshot) {

               // key = childSnapshot.key;
                //console.log(key);
                //aNodos.push(key);
                /*starCountRef = firebase.database().ref("/"+key);
                starCountRef.on('value', function (snapshot) {
                    console.log(snapshot.val());
                    usuarios.push([key,snapshot.val()]);
                });*/

                sNodo = key;
                //MOSTRAR TODOS LOS NODOS
                html = '';
                html = html+'<div class="card"> <div class="card-header" role="tab" id="headingOne"><h5 class="mb-0">';
                html = html+'       <a data-toggle="collapse" data-parent="#accordion" href="#'+key+'" aria-expanded="true" aria-controls="collapseOne" onclick="get_nodo(\''+sNodo+'\')">';
                html = html+         key;
                html = html+'       </a> </h5></div>';

                html = html+'   <div id="'+key+'" class="collapse " role="tabpanel" aria-labelledby="headingOne">';
                html = html+'     <div class="card-block"><form><div id="tab_'+key+'"></div></form>';
                

               //   html = html + html_tab;
              //   html = html+'</tr>';

                 html = html+'     </div>';
                 html = html+'     </div>';
                 html = html+'   </div>';
                 html = html+' </div>';
                divListado.insertAdjacentHTML('beforeend', html); 
           // });
//

}); 





}
var tam='';
var rowId='';
function get_nodo(sNodo){

  var html_tab = '';
  const divTabla= document.getElementById('tab_'+sNodo);

  const fDB = firebase.database().ref().child(sNodo);
  html_tab = html_tab+'<div class="table-responsive" >';
  html_tab = html_tab+'<table class="table table-bordered">';
  //cabecera tabla
  const fDBLast = firebase.database().ref().child(sNodo).limitToFirst(1);
  html_tab = html_tab+'<tr><th>id</th> ';
  fDBLast.once("child_added",function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      key = childSnapshot.key; //nodos principale
      html_tab = html_tab+'<th>'+key+'</th>';
    });
  });
  //tabla
  html_tab = html_tab+'</tr> ';

  fDB.on("child_added",function (snapshot) {
      html_tab = html_tab+'<tr> <td>'+snapshot.key+'</td>';
      snapshot.forEach(function (childSnapshot) {
      //CREA TABLA CON INFORMACION PERTENECIENTE AL NODO               
      html_tab = html_tab+'<td>'+childSnapshot.val()+'</td>';           
    });

    html_tab = html_tab+'</tr>';
                
 
  }); 
  html_tab = html_tab+'        </table>';
  html_tab = html_tab+'        </div>';

 // console.log(html_tab);
  divTabla.innerHTML=  html_tab; 




  //funcion para habilitar inpur en las tablas

  $('#tab_'+sNodo + ' tr').click(function () {
   
   
    row = $(this);
  
    var sCellValue = '';
    var tTd = '';
    var input = '';
    var sValue = '';
    var aInput = $(this)[0].parentElement.getElementsByTagName("input"); //todas las filas

    var element = $(this)[0].children[0];

 
    if(rowId !=  element.innerText)
    {
      for (var j = 0; j < aInput.length; j++)
      { 
         sValue = aInput[j].value;
         aInput[j].parentElement.innerHTML = sValue;
         j--;
      }
    }

    var element = $(this)[0].children[0].getElementsByTagName("input")[0];
    if(element == undefined)
    {
      for(var i = 0 ; i < $(this)[0].children.length; i++)
      {
        sCellValue = $(this)[0].children[i].innerText;
        tTd = $(this).find('td');
        input = document.createElement("input");
        input.type = "text";
        input.className = "form-control";
        input.value = sCellValue;
        tTd[i].innerText= ''; 
        tTd[i].append(input);

        rowId = $(this)[0].children[0].innerText;
      }


    }

    

    
  })

}