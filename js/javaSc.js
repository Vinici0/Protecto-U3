
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
            resltado = 0;
            // document.getElementById('color').style.background = 'blue';
            for(let item of datos){
                // console.log(item._id);
                // console.log(item);
                
                res.innerHTML += `<tr>
                <td>${item.nombre}</td>
                <td>${item.nota1}</td>
                <td>${item.nota2}</td>
                <td>${item.nota3}</td>
                <td id="color${res3++}">${resultado = item.nota1 + item.nota2 + item.nota3}</td>
                </tr>`;
                let color = "color"+res2++;
                // console.log(resultado);
                if(resultado >= 0 && resultado <=29){
                    document.getElementById(color).style.background = '#B22222';
                }else if(resultado >=30 && resultado <=42){
                    document.getElementById(color).style.background = '#FF8C00';
                }else if(resultado >=43 && resultado <=54){
                    document.getElementById(color).style.background = '#228B22';
                }
              
             
            }

          
      

          
        }
    }

    
 

}

