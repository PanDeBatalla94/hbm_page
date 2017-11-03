<!doctype html>
<!--
  Copyright 2015 Google Inc. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      https://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License
-->
<html lang="en">
<head>
  <meta charset="utf-8">

  <title></title>
  <!-- Web Application Manifest -->
  <link rel="manifest" href="manifest.json">
  <!-- Tile icon for Win8 -->
  <meta name="msapplication-TileColor" content="#3372DF">
  <meta name="msapplication-navbutton-color" content="#303F9F">
  <!-- Material Design Lite -->
  
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script> 

  {!! Html::style('css/bootstrap/css/bootstrap.min.css') !!}
  {!! Html::style('css/bootstrap/css/font-awesome.min.css') !!}
  {!! Html::style('css/bootstrap/css/simple-sidebar.css') !!}

  {!! Html::script('css/bootstrap/js/jquery-3.2.1.min.js') !!}
  {!! Html::script('css/bootstrap/js/bootstrap.min.js') !!}
  {!! Html::script('js/listas/listas.js') !!}
@yield('js')


  <script src="https://cdn.firebase.com/js/client/2.0.2/firebase.js"></script>

<script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js"></script>
<script type="text/javascript">
     var config = {
    apiKey: "AIzaSyC4IXtK4W4CCoSWJnI66BQAQzT7fhjggo4",
    authDomain: "pruebas-csv.firebaseapp.com",
    databaseURL: "https://pruebas-csv.firebaseio.com",
    projectId: "pruebas-csv",
    storageBucket: "pruebas-csv.appspot.com",
    messagingSenderId: "597256255260"
  };
  firebase.initializeApp(config);
</script>

</head>
<body>
 <div>
    <nav id="navbar-example2" class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#fat">@fat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#mdo">@mdo</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#one">one</a>
            <a class="dropdown-item" href="#two">two</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#three">three</a>
          </div>
        </li>
      </ul>
</nav>

 </div>

<div id="wrapper">


  
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        
 


<div class="container" id="page-content-wrapper">

  <div class="container-fluid">
  <button type="button" class="btn btn-default" aria-label="Left Align" id="menu-toggle">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
</div>
@yield('contenido')

</div>
 </div>






<!-- Import and configure the Firebase SDK -->
<!-- These scripts are made available when the app is served or deployed on Firebase Hosting -->
<!-- If you do not want to serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup -->



<script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    </script>
</body>
</html>
