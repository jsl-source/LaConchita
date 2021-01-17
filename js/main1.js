$(document).ready(function () {


    var nombre="";
    var telefono="";
    var email="";
    var mensaje="";
    var noticias=0;


    $('#btn-env1').click(function (e) { 
        e.preventDefault();
        
        if($('#nombre1').val()=="" && $('#email1').val()=="" && $('#mensaje1').val()==""){
            $('#lblnombre1').addClass('text-danger');
            $('#lblemail1').addClass('text-danger');
            $('#lblmensaje1').addClass('text-danger');
            $("#nombre1").keyup(function() {
                $('#lblnombre1').removeClass('text-danger');
            });
                $("#email1").keyup(function() {
                $('#lblemail1').removeClass('text-danger');
            });
                $("#mensaje1").keyup(function() {
                $('#lblmensaje1').removeClass('text-danger');
            });

        }else{
            if($('#nombre1').val()==""){
                
                $('#lblnombre1').addClass('text-danger');
                $("#nombre1").keyup(function() {
                    $('#lblnombre1').removeClass('text-danger');
                });

                nombre="";
                
               
            }else{
                
                  var letras_latinas = /^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;
                  var valnombre=letras_latinas.test($('#nombre1').val());
                  if(valnombre){
                            
                        nombre=$('#nombre1').val();
                            
                        if($('#email1').val()==""){
            
                                $('#lblemail1').addClass('text-danger');
                                $("#email1").keyup(function() {
                                    $('#lblemail1').removeClass('text-danger');
                                });
                                
                                email="";
            
                        }else{
                            var eremail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                            var valemail=eremail.test($('#email1').val());
                            if(valemail){
                                email=$('#email1').val();
                                if($('#mensaje1').val()==""){

                                    $('#lblmensaje1').addClass('text-danger');
                                    $("#mensaje1").keyup(function() {
                                        $('#lblmensaje1').removeClass('text-danger');
                                    });
                                    mensaje="";
                    
                                }else{

                                   
                                    mensaje=$('#mensaje1').val();
                                    $("#mensaje1").keyup(function() {
                                        $('#lblmensaje1').removeClass('text-danger');
                                    });
                                
                                    
                                    if($('#telefono1').val()==""){

                                        telefono="0";
                                        if( $("#news1").is(":checked")){

                                            noticias=1;
                                        
                                
                                        }else{
                                
                                            noticias=0;
                                           
                                    
                                        }
                                        $.ajax({
                                            url:'controllers/usr_controllers.php',
                                            type:'POST',
                                            data:'nombre='+nombre+'&telefono='+telefono+'&email='+email+'&mensaje='+mensaje+'&noticias='+noticias
                                        }).done(function(resp){
                                
                                        
                                            if (resp==0){
                                
                                                alert("No se incluyo el registro en la base de datos");
                                
                                            }
                                            else{
                                
                                                $('#letreroload1').removeClass('d-block');
                                                $('#letreroload1').addClass('d-none');
                                                $('#letreroico1').removeClass('d-none');
                                                $('#letreroico1').addClass('d-block');
                                                $("#formulario2")[0].reset();
                            
                                                setTimeout(function(){ 

                                                    $('#letrero1').addClass('d-block');
                                                    $('#letreroico1').removeClass('d-block');
                                                    $('#letreroico1').addClass('d-none');
                                            
                                                }, 1000);
                            
                                
                                            
                                            }
                                
                                        });
                    
                                        
                            
                                    }else{
                        
                                        var ertelefono=/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{7})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{7}|\d{10}|\d{12}$/;
                                        var valtelefono=ertelefono.test($('#telefono1').val());
                                        if(valtelefono){

                                            
                                            telefono=$('#telefono1').val();
                                            $('#letrero1').removeClass('d-block');
                                            $('#letrero1').addClass('d-none');
                                            $('#letreroload1').removeClass('d-none');
                                            $('#letreroload1').addClass('d-block');
                                            if( $("#news1").is(":checked")){

                                                noticias=1;
                                            
                                    
                                            }else{
                                    
                                                noticias=0;
                                        
                                            }
                                            $.ajax({
                                                url:'controllers/usr_controllers.php',
                                                type:'POST',
                                                data:'nombre='+nombre+'&telefono='+telefono+'&email='+email+'&mensaje='+mensaje+'&noticias='+noticias
                                            }).done(function(resp){
                                    
                                            
                                                if (resp==0){
                                    
                                                    alert("No se incluyo el registro en la base de datos");
                                    
                                                }
                                                else{
                                    
                                                    $('#letreroload1').removeClass('d-block');
                                                    $('#letreroload1').addClass('d-none');
                                                    $('#letreroico1').removeClass('d-none');
                                                    $('#letreroico1').addClass('d-block');
                                                    $("#formulario2")[0].reset();
                                
                                                    setTimeout(function(){ 
    
                                                        $('#letrero1').addClass('d-block');
                                                        $('#letreroico1').removeClass('d-block');
                                                        $('#letreroico1').addClass('d-none');
                                                
                                                    }, 1000);
                                
                                    
                                                
                                                }
                                    
                                            });
                                            
                                            
                                        }else{

                                            // $('#letrero1').removeClass('d-block');
                                            // $('#letrero1').addClass('d-none');
                                            // $('#letreroload1').removeClass('d-none');
                                            // $('#letreroload1').addClass('d-block');
                            
                                            $('#lbltelefono1').addClass('text-danger');
                                            $("#telefono1").keyup(function() {
                                                $('#lbltelefono1').removeClass('text-danger');
                                            });
                                            telefono="";
                                        }
                                        
                                    }
                                    
                    
                                    
                                }
                            
                            }else{
            
                                $('#lblemail1').addClass('text-danger');
                                $("#email1").keyup(function() {
                                    $('#lblemail1').removeClass('text-danger');
                                });
                                email="";
                            }
                        }
                  
                   }else{
                       
                        $('#lblnombre1').addClass('text-danger');    
                        $("#nombre1").keyup(function() {
                            $('#lblnombre1').removeClass('text-danger');
                        });
            
                   }
               
            }
            

        }
    
    });

});

