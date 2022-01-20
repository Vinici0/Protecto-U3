
document.querySelector('#cargarCatalogo').addEventListener('click',traerDatos);

function traerDatos (){
    console.log('Dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","Json/Notas.json",true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            // cargarXML(this);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);

            let res = document.querySelector('#muestra');
        //    let num = 4 + datos[0].edad;
            // console.log(num);
            res.innerHTML = '';
            res2 = 0;
            res3 = 0;
            res4 = 0;
            res5 = 0;
            res6 = 0;
            asis = 0;

            // document.getElementById('color').style.background = 'blue';
            for(let item of datos){
                // console.log(item._id);
                // console.log(item);
                
                res.innerHTML += `<tr>
                <td>${item.semestre}</td>
                <td>${item.materia}</td>
                <td>${item._id}</td>
                <td>${item.nombre}</td>
                <td>${item.nota1}</td>
                <td>${item.nota2}</td>
                <td>${item.nota3}</td>
                <td id="color${res3++}">${resultado = item.nota1 + item.nota2 + item.nota3}</td>
                <td>${asis = item.asistencia}/100</td>
                <td id="dataa${res5++}"></td>
          
               
                </tr>`;
                let color = "color"+res2++;
                let color2 = "dataa"+res6++;
                console.log(color2);
                // console.log(resultado);
                if(resultado >= 0 && resultado <=29){
                    document.getElementById(color).style.background = '#B22222';
                }else if(resultado >=30 && resultado <=42){
                    document.getElementById(color).style.background = '#FF8C00';
                }else if(resultado >=43 && resultado <=60){
                    document.getElementById(color).style.background = '#228B22';
                }

                if((resultado >= 0 && resultado <=29) && asis<70){
                    document.getElementById(color2).innerHTML = 'Reprobo';
                }else if((resultado >= 0 && resultado <=29) &&asis>=70){
                    document.getElementById(color2).innerHTML = 'Reprobo';
                }else if((resultado >=30 && resultado <=42) && asis<70){
                    document.getElementById(color2).innerHTML= 'Reprobo';
                }else if((resultado >=30 && resultado <=42) && asis>=70){
                    document.getElementById(color2).innerHTML= 'Suspenso';
                }else if((resultado >=43 && resultado <=54) && asis<70){
                    document.getElementById(color2).innerHTML= 'Reprobo';
                }else if((resultado >=43 && resultado <=54) && asis>=70){
                    document.getElementById(color2).innerHTML= 'Aprueba';
                }else if((resultado >=55 && resultado <=60) && asis<70){
                    document.getElementById(color2).innerHTML= 'Reprobo';
                }else if((resultado >=55 && resultado <=60) && asis>=70){
                    document.getElementById(color2).innerHTML= 'Exonerado';
                }else{
                    document.getElementById(color2).innerHTML= 'WTF';
                }    
            }
          
        }
    }

    
}




function funBoton(){
    res = document.querySelector('#muestra');
    nombre = document.getElementById("nombre").value;
    id = document.getElementById("id").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    pago = document.getElementById("pago").value;
    res.innerHTML += `<tr>
                <td>${id}</td> 
                <td>${nombre}</td>  
                <td>${edad}</td>
                <td>${correo}</td>  
                <td>${pago}</td>
                </tr>`;
}

$(document).ready(function () {
        $("#ocultar").click(function () {
        $(".tabla").hide();
    });

        $("#cargarCatalogo").click(function () {
        $(".tabla").show();
    });

    $('.img1').mouseover(function(e) {  
        $('.img1').trigger(e.type);
    })
})
    
