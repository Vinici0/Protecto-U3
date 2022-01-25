// const semesters = [{ primero: [] }, { segundo: [] }, { tercero: [] }, { cuarto: [] }, { quinto: [] }, { sexto: [] }, { seption: ["AplicaionesDistribuidas.json", "DiseñoEvaluacionProyectos-TI.json", "MineriaDatos.json", "ProgramacionAvanzada.json", "SeguridadInformatica.json"] }, { octavo: ["ArquitecturaSoftware.json", "GestionEmprendimiento.json", "GestionSeguridadInformatica.json", "TecnologiasEmergencia.json", "Profesionalizate.json"] }];
const semesters = [
    ["Algebralineal.json", "CalculoDiferencial.json", "CulturaAmbiental.json", "FundProgramacion.json", "Quimica.json"],
    ["CalculoVectorial.json", "EDO.json", "ComputacionDigital.json", "POO.json", "ComputacionDigital.json"],
    ["DESARROLLOSOFTWARE.json", "ESTADISTICA.json", "ESTRUCTURA.json", "METODOSNUMERICOS.json", "SISTEMASOPERATIVOS.json"],
    ["ADMIN_MAN_SISTEMAS.json", "FUNDAMENTOS_SISTEMAS_WEB.json", "INTERFACES_MULTIMEDIA.json", "LIDERAZGO.json", "REDES_COMUNICACIONES.json"],
    ["ASO.json", "ATW.json", "GestionBDD.json", "IW.json", "RealidadNa.json"],
    ["DesarrolloWeb.json", "Inteligencia_Artificial.json", "LecturayEscritura.json", "ModeladodeDatos.json", "ProgramacionIntegrativa.json"],
    ["ProgramacionAvanzada.json", "MineriaDatos.json", "SeguridadInformatica.json", "DiseñoEvaluacionProyectos-TI.json", "AplicacionesDistribuidas.json"],
    ["GestionSeguridadInformatica.json", "ArquitecturaSoftware.json", "GestionEmprendimiento.json", "TecnologiasEmergencia.json", "Profesionalizante.json"]
];
const countSemesters = ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "septimo", "octavo"];
const btns = document.querySelectorAll('.btnS');
const options = document.querySelectorAll('#op');
let numSemestre = 0;

btns.forEach(function (btn, index) {
    btn.addEventListener("click", function (e) {
        obtenerDatos(index);
        numSemestre = index;
    });
    // console.log(index)
});

async function obtenerDatos(index) {
    const response = await fetch("http://127.0.0.1:5501/Json/semesters-validos.json", {
        credentials: 'same-origin'
    });
    const json = await response.json();

    options.forEach(function (dato, i) {
        // let llamar = `materia${num}`
        // const dato;
        // console.log(llamar)
        dato.textContent = json[index].materia[i];
        dato.value = i;
    });
};

const btnOptions = document.querySelector(".tabla_semesters");
const btnOption = document.querySelector("#btnOption");
const positionActual = document.querySelector('#posicion-actual');
const cantidadEstudent = document.querySelector('#cantidad-estudiantes');

btnOption.addEventListener('click', function () {
    traerDatos(numSemestre);
    // console.log(numSemestre)
});

async function traerDatos(num) {
    console.log("TODO FUNCIONA");
    let valor = document.getElementById("materias-option").value;
    let ruta = "http://127.0.0.1:5501/Json/";
    const rutaPadre = ruta;
    let position = '',
        totalEstudiantes = 0;
    cantidadEstudent.innerHTML = totalEstudiantes;
    let rutaMateria = rutaPadre + 'semesters-validos.json';
    let res = document.querySelector('#muestra_semesters');
    res.innerHTML = ''; // Importante para empezar una nueva consulta
    let promedio = 0;
    let color = document.getElementById('color');
    for (i = 0; i < semesters.length; i++) {
        if (i === num) {
            let final = '';
            const allSemester = countSemesters[i];
            // const context = semesters[i];
            // console.log(countSemesters[i])
            // console.log(context.length)
            // console.log(position)
            ruta = ruta.concat(allSemester + "/");
            ruta = ruta.concat(semesters[num][valor]);
            // console.log(semesters[num][valor]);
            console.log(ruta);
            const response = await fetch(ruta, {
                credentials: 'same-origin'
            });
            const datos = await response.json();
            console.log(datos)
            
            for (let data of datos) {
                // console.log(data)
                // Agregación de los datos
                promedio = data.nota1 + data.nota2 + data.nota3;
               
      
               
                // console.log(resultado);
               

                if ((promedio >= 0 && promedio <= 29) && data.asis < 70) {
                    final = '<span style="color: #BF0B0B"> <b>Reprobado </b></span>';
                } else if ((promedio >= 0 && promedio <= 29) && data.asis >= 70) {
                    final = '<span style="color: #BF0B0B"> <b>Reprobado </b></span>';
                } else if ((promedio >= 30 && promedio <= 42) && data.asis < 70) {
                    final = '<span style="color: #FF8D34"> <b>Suspenso </b></span>';
                } else if ((promedio >= 30 && promedio <= 42) && data.asis >= 70) {
                    final = '<span style="color: #FF8D34"> <b>Suspenso </b></span>';
                } else if ((promedio > 42 && promedio <= 54) && data.asis < 70) {
                    final = '<span style="color: #ECC226"> <b>Reprobado por asistencia</b></span>';
                } else if ((promedio > 42 && promedio <= 54) && data.asis >= 70) {
                    final = '<span style="color: #14B906"><b> Aprobado</b></span>';
                } else if ((promedio >= 55 && promedio <= 60) && data.asis < 70) {
                    final = '<span style="color: #ECC226"> <b>Reprobado por asistencia</b></span>';
                } else if ((promedio >= 55 && promedio <= 60) && data.asis >= 70) {
                    final = '<span style="color: #1CB1DD"><b>Exonerado</b></span>';
                }

                
                 

                res.innerHTML += `<tr>
                <td>${data.nlista}</td>
                <td>${data.nombres}</td>
                <td>${data.semestre}</td>
                <td>${data.nota1}</td>
                <td>${data.nota2}</td>
                <td>${data.nota3}</td>
                <td>${promedio}</td>
                <td>${data.asis}%</td>
                <td>${final}</td>
                </tr>` ;


            }
            ruta = rutaPadre;
            const allMaterias = await fetch(rutaMateria, {
                credentials: 'same-origin'
            });
            const materias = await allMaterias.json();
            // console.log(materias[num].materia[valor]);
            position += `${countSemesters[i]}/${materias[num].materia[valor]}`;
            totalEstudiantes = `${datos.length}`;
            positionActual.innerHTML = position;
            cantidadEstudent.innerHTML = totalEstudiantes;
        }

    }

    // console.log(ruta)
}


var boton = document.getElementById('agregar');
var example = document.getElementById('example');
boton.addEventListener("click", agregar);

var cant = 0;
var data = []

function agregar() {
    var final;
    var nlista = parseInt(document.querySelector('#nlista').value);
    var nombres = document.querySelector('#nombres').value;
    var semestre = numSemestre + 1;
    // var semestre = parseInt(document.querySelector('#semestre').value);
    var nota1 = parseFloat(document.querySelector('#nota1').value);
    var nota2 = parseFloat(document.querySelector('#nota2').value);
    var nota3 = parseFloat(document.querySelector('#nota3').value);
    var notafinal = parseFloat(nota1 + nota2 + nota3);
    var asistencia = parseFloat(document.querySelector('#asistencia').value);
    

    if (notafinal >= 0 && notafinal <= 29) {
        final = '<span style="color: #BF0B0B"> <b>Reprobado </b></span>';
    } else if (notafinal >= 0 && notafinal <= 29) {
        final = '<span style="color: #BF0B0B"> <b>Reprobado </b></span>';
    } else if ((notafinal >= 30 && notafinal <= 42) && asistencia < 70) {
        final = '<span style="color: #FF8D34"> <b>Suspenso </b></span>';
    } else if ((notafinal >= 30 && notafinal <= 42) && asistencia >= 70) {
        final = '<span style="color: #FF8D34"> <b>Suspenso </b></span>';
    } else if ((notafinal > 42 && notafinal <= 54) && asistencia < 70) {
        final = '<span style="color: #ECC226"> <b>Reprobado por asistencia</b></span>';
    } else if ((notafinal > 42 && notafinal <= 54) && asistencia >= 70) {
        final = '<span style="color: #14B906"><b> Aprobado</b></span>';
    } else if ((notafinal >= 55 && notafinal <= 60) && asistencia < 70) {
        final = '<span style="color: #ECC226"> <b>Reprobado por asistencia</b></span>';
    } else if ((notafinal >= 55 && notafinal <= 60) && asis >= 70) {
        final = 'Exonerado';
    }

    
    

    if(nota1<21 && nota2 < 21 && nota3 < 21){
        data.push({
            "nlista": nlista,
            "nombres": nombres,
            "semestre":semestre,
            "nota1": nota1,
            "nota2": nota2,
            "nota3": nota3,
            "notalfinal": notafinal,
            "asistencia": asistencia,
            "resultado": final
        })

        var item0 = "row" + cant;

        var fila0 = '<tr item=' + item0 + '><td>' + nlista + '</td><td>' + nombres + '</td><td>' + semestre +
            '</td><td>' + nota1 +
            '</td><td>' + nota2 +
            '</td><td>' + nota3 +
            '</td><td>' + notafinal +
            '</td><td>' + asistencia +
            '%</td><td id="color">' + final +
            '</td></tr>';
        

        //agregar fila a la tabla 1
        $("#example").append(fila0);
        $("#nlista").val('');
        $("#nombres").val('');
        $("#semestre").val('');
        $("#nota1").val('');
        $("#nota2").val('');
        $("#nota3").val('');
        $("#notafinal").val('');
        $("#asistencia").val('');
        $("#final").val('');
        $("#nombres").focus();
    
        cant++;
    
        console.log(JSON.stringify(data));
        document.getElementById('datos-mal').innerHTML = '';

    }else{
        document.getElementById('datos-mal').innerHTML = 'Datos mal Ingresados';
        document.getElementById('datos-mal').style.color = 'red';
   
    }
}
