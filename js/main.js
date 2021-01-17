$(document).ready(function () {


    var nombre="";
    var telefono="";
    var email="";
    var mensaje="";
    var noticias=0;

   $('#img1').click(function () { 

        var img1=$('#img1').attr('src');
        $("#imggal").attr("src",img1);

   });
   $('#img2').click(function () { 

    var img2=$('#img2').attr('src');
    $("#imggal").attr("src",img2);

});
$('#img3').click(function () { 

    var img3=$('#img3').attr('src');
    $("#imggal").attr("src",img3);

});
$('#img4').click(function () { 

    var img4=$('#img4').attr('src');
    $("#imggal").attr("src",img4);

});
$('#img5').click(function () { 

    var img5=$('#img5').attr('src');
    $("#imggal").attr("src",img5);

});
$('#img6').click(function () { 

    var img6=$('#img6').attr('src');
    $("#imggal").attr("src",img6);

});
$('#img7').click(function () { 

    var img7=$('#img7').attr('src');
    $("#imggal").attr("src",img7);

});
$('#img8').click(function () { 

    var img8=$('#img8').attr('src');
    $("#imggal").attr("src",img8);

});
$('#img9').click(function () { 

    var img9=$('#img9').attr('src');
    $("#imggal").attr("src",img9);

});
$('#img10').click(function () { 

    var img10=$('#img10').attr('src');
    $("#imggal").attr("src",img10);

});
$('#img11').click(function () { 

    var img11=$('#img11').attr('src');
    $("#imggal").attr("src",img11);

});
$('#img12').click(function () { 

    var img12=$('#img12').attr('src');
    $("#imggal").attr("src",img12);

});
$('#img13').click(function () { 

    var img13=$('#img13').attr('src');
    $("#imggal").attr("src",img13);

});
$('#img1').click(function () { 

    var img1=$('#img1').attr('src');
    $("#imggal").attr("src",img1);

});
$('#img15').click(function () { 

    var img15=$('#img15').attr('src');
    $("#imggal").attr("src",img15);

});

    $('#btn-env').click(function (e) { 


        e.preventDefault();
        
        if($('#nombre').val()=="" && $('#email').val()=="" && $('#mensaje').val()==""){
            $('#lblnombre').addClass('text-danger');
            $('#lblemail').addClass('text-danger');
            $('#lblmensaje').addClass('text-danger');
            $("#nombre").keyup(function() {
                $('#lblnombre').removeClass('text-danger');
            });
                $("#email").keyup(function() {
                $('#lblemail').removeClass('text-danger');
            });
                $("#mensaje").keyup(function() {
                $('#lblmensaje').removeClass('text-danger');
            });

        }else{


            if($('#nombre').val()==""){
                
                $('#lblnombre').addClass('text-danger');
                $("#nombre").keyup(function() {
                    $('#lblnombre').removeClass('text-danger');
                });

                nombre="";
                
               
            }else{
                   
                    
                  var letras_latinas = /^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;
                  var valnombre=letras_latinas.test($('#nombre').val());
                  if(valnombre){
                            
                        nombre=$('#nombre').val();
                            
                        if($('#email').val()==""){
            
                                $('#lblemail').addClass('text-danger');
                                $("#email").keyup(function() {
                                    $('#lblemail').removeClass('text-danger');
                                });
                                
                                email="";
            
                        }else{
                            var eremail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
                            var valemail=eremail.test($('#email').val());
                            if(valemail){
                                email=$('#email').val();
                                if($('#mensaje').val()==""){

                                    $('#lblmensaje').addClass('text-danger');
                                    $("#mensaje").keyup(function() {
                                        $('#lblmensaje').removeClass('text-danger');
                                    });
                                    mensaje="";
                    
                                }else{

                                    mensaje=$('#mensaje').val();
                                    $("#mensaje").keyup(function() {
                                        $('#lblmensaje').removeClass('text-danger');
                                    });


                                    if($('#telefono').val()==""){

                                        telefono="0";
                                        
                                        $('#letrero').removeClass('d-block');
                                        $('#letrero').addClass('d-none');
                                        $('#letreroload').removeClass('d-none');
                                        $('#letreroload').addClass('d-block');
                                        if( $("#news").is(":checked")){

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
                                
                                               
                                                $('#letreroload').removeClass('d-block');
                                                $('#letreroload').addClass('d-none');
                                                $('#letreroico').removeClass('d-none');
                                                $('#letreroico').addClass('d-block');
                                                $("#formulario1")[0].reset();
                            
                                                setTimeout(function(){ 

                                                    $('#letrero').addClass('d-block');
                                                    $('#letreroico').removeClass('d-block');
                                                    $('#letreroico').addClass('d-none');
                                            
                                                }, 1000);
                                            
                                            }
                                
                                        });
                    
                                        
                            
                                    }else{

                                       
                        
                                        var ertelefono=/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{7})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{7}|\d{10}|\d{12}$/;
                                        var valtelefono=ertelefono.test($('#telefono').val());
                                        if(valtelefono){

                                            
                                            telefono=$('#telefono').val();
                                            
                                            $('#letrero').removeClass('d-block');
                                            $('#letrero').addClass('d-none');
                                            $('#letreroload').removeClass('d-none');
                                            $('#letreroload').addClass('d-block');

                                            if( $("#news").is(":checked")){

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
                                    
                                                   
                                           
                                                    $('#letreroload').removeClass('d-block')
                                                    $('#letreroload').addClass('d-none');
                                                    $('#letreroico').addClass('d-block');
                                                    $("#formulario1")[0].reset();
                                
                                                    setTimeout(function(){ 

                                                        $('#letrero').addClass('d-block');
                                                        $('#letreroico').removeClass('d-block');
                                                        $('#letreroico').addClass('d-none');
                                                
                                                    }, 1000);
                                                    
                                
                                    
                                                
                                                }
                                    
                                            });
                                            
                                            
                                        }else{
                            
                                            $('#lbltelefono').addClass('text-danger');
                                            $("#telefono").keyup(function() {
                                                $('#lbltelefono').removeClass('text-danger');
                                            });
                                            telefono="";
                                        }
                                        
                                    }
                                    
                    
                                    
                                }
                            
                            }else{
            
                                $('#lblemail').addClass('text-danger');
                                $("#email").keyup(function() {
                                    $('#lblemail').removeClass('text-danger');
                                });
                                email="";
                            }
                        }
                  
                   }else{
                       
                        $('#lblnombre').addClass('text-danger');    
                        $("#nombre").keyup(function() {
                            $('#lblnombre').removeClass('text-danger');
                        });
            
                   }
               
            }
            

        }
    
    });

});

