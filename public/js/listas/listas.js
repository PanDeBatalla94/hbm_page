

function obtener_nodos(){


  var html='';
//ontienevalores de nodos que se actualizan
  const divListado = document.getElementById('listaNodos');
  const fDB = firebase.database().ref();
  var sNodo;
  divListado.innerHTML='';
  fDB.on("child_added",function (snapshot) {
 
      key = snapshot.key;         
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


  fDB.on("child_removed",function (snapshot) {
    document.getElementById(snapshot.key).parentElement.remove();
  }); 





}
var tam='';
var rowId='';

function get_nodo(sNodo){
 /* const fDEB = firebase.database().ref();
  fDEB.on("child_added",function (snapshot) {
      key = snapshot.key;          
  }); */
  var html_tab = '';
  var html_tab_row = '';
  const divTabla= document.getElementById('tab_'+sNodo);
  const fDB = firebase.database().ref().child(sNodo+"/");
  
  html_tab = html_tab+'<div class="table-responsive" >';
  html_tab = html_tab+'<table class="table table-bordered">';
  //cabecera tabla
  const fDBLast = firebase.database().ref().child(sNodo).limitToFirst(1);
  html_tab = html_tab+'<thead><tr><th class="oculto">id</th> ';
  fDBLast.once("child_added",function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      key = childSnapshot.key; //nodos principale
      html_tab = html_tab+'<th>'+key+'</th>';
    });
  });
  //tabla
  html_tab = html_tab+'</tr></thead><tbody id="body_'+sNodo+'"> ';
  html_tab = html_tab+'        </tbody></table>';
  html_tab = html_tab+'        </div>';

  divTabla.innerHTML=  html_tab; 

  //fDB.on("child_added",function (snapshot) {
    fDB.on("value",function (snapshot) {

  // document.getElementById('tab_'+sNodo).getElementsByTagName('tbody')[0].children.innerHTML = '';
  $('#body_'+sNodo).html('');
      snapshot.forEach( function (childSnapshot) {
      html_tab_row = '';
   
        //var pars = childSnapshot.val();
      html_tab_row = html_tab_row+'<tr onclick= "click_row($(this),\''+sNodo+'\')"> ';
        
        html_tab_row =  html_tab_row+'<td class="oculto">'+childSnapshot.key+'</td>';

        childSnapshot.forEach(function (childchildsnapshot) {
         // console.log(childchildsnapshot.key);
          console.log(childchildsnapshot.val());
          html_tab_row = html_tab_row+'<td>'+childchildsnapshot.val()+'</td>';           
        })
      html_tab_row = html_tab_row+'</tr>';
      //insertamos en el tbody
      divTabla.children[0].children[0].children[1].insertAdjacentHTML('beforeEnd',html_tab_row);
      });
     
  }); 



fDB.on("child_removed",function (snapshot) {
  $('tr:contains("'+snapshot.key+'")').remove();
  }); 

}

function click_row(e,nodo){

    var sCellValue = '';
    var tTd = '';
    var input = '';
    var sValue = '';
    var aInput = e[0].parentElement.getElementsByTagName("input"); //todas las filas
    var element = e[0].children[0];

    if(rowId !=  element.innerText)
    {
      for (var j = 0; j < aInput.length; j++)
      { 
         sValue = aInput[j].value;
         aInput[j].parentElement.innerHTML = sValue;
         j--;
      }
    }
    element = e[0].children[0].getElementsByTagName("input")[0];
    if(element == undefined)
    {
      for(var i = 0 ; i < e[0].children.length; i++)
      {
        sCellValue = e[0].children[i].innerText;
        tTd = e.find('td');
        input = document.createElement("input");
        input.type = "text";
        input.className = "form-control";
        input.value = sCellValue;
        tTd[i].innerText= ''; 
        tTd[i].append(input);
        rowId = e[0].children[0].innerText;
      }
     // MODIFICAR REGISTRO AL PRESIONAR ENTER
      $(e[0]).keypress(function (event) {
        console.log(e);
          if(event.charCode == 13)
          {
            modificar_row(e,nodo);
          }          
        })
    }
}

function modificar_row(row,nodo){
  event.preventDefault();
  var sId = row[0].children[0].children[0].value;
  var array={};
  var updates={};
  var json ;

  var aTh = row[0].parentElement.parentElement.children[0].children[0].children;

  for(var i = 1 ; i < row[0].children.length; i++)
  {

    //console.log(aTh[i].innerText + " -> "+row[0].children[i].children[0].value);
    array[aTh[i].innerText] = row[0].children[i].children[0].value;
  }

  updates["/"+nodo+"/"+sId] = array;

  json = JSON.stringify(array);

  firebase.database().ref().update(
    updates
    );//.then(function() { bSuccess =true; })


}