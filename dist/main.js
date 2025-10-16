import { series } from "./data.js"; //importamos los datos
console.log("Script loaded. Series count:", series.length);
const tableBody = document.getElementById("series-table-body");
//conseguimos el tableBody, en el html tendra el mismo id para identificarlo
//! da confirmación de que el elemento si existira 
let suma = 0;
series.forEach(serie => {
    const row = document.createElement("tr"); //creamos el row para poner dentro de la tabla
    row.innerHTML = `
    <td>${serie.getId()}</td>
    <td>${serie.getName()}</td>
    <td>${serie.getChannel()}</td>
    <td>${serie.getSeasons()}</td>
  `; //.innerHTML permite editar los contenidos internos del tag de row <tr>
    //Usamos ${} para identificarlo como variable
    tableBody.appendChild(row); //Añadimos la fila a tableBody
    suma += serie.getSeasons(); //Para el promedio
});
let promedio = suma / series.length;
const paragraphPromedio = document.getElementById("promedio_temporadas");
paragraphPromedio.textContent = "Seasons average: " + promedio.toString();
