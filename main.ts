import { series } from "./data.js"; //importamos los datos

//console.log("Script loaded. Series count:", series.length);


//TABLA DE INFORMACIÓN Y CARD
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢
const tableBody = document.getElementById("series-table-body")!; 
    //conseguimos el tableBody, en el html tendra el mismo id para identificarlo
    //! da confirmación de que el elemento si existira 

const card = document.getElementById("info_serie") as HTMLElement;
const cardImage = document.getElementById("serie_imagen") as HTMLImageElement;
const cardTitle = document.getElementById("serie_titulo") as HTMLElement;
const cardDescription = document.getElementById("serie_descripcion") as HTMLElement;
const cardLink = document.getElementById("serie_link") as HTMLAnchorElement;

let suma: number = 0;

series.forEach(serie => {
  const row = document.createElement("tr"); //creamos el row para poner dentro de la tabla
  row.innerHTML = `
    <td>${serie.getId()}</td>
    <td><a href=${serie.getLink()} > ${serie.getName()} </a> </td>
    <td>${serie.getChannel()}</td>
    <td>${serie.getSeasons()}</td>
  `; //.innerHTML permite editar los contenidos internos del tag de row <tr>
        //Usamos ${} para identificarlo como variable
  tableBody.appendChild(row); //Añadimos la fila a tableBody

  suma+= serie.getSeasons(); //Para el promedio

  //Para la interactive card añadimos un listener
  row.addEventListener("click", () => {
    // Ponemos la info
    cardImage.src = serie.getImage();
    cardTitle.textContent = serie.getName();
    cardDescription.textContent = serie.getDescription();
    cardLink.href = serie.getLink();
    cardLink.textContent = serie.getLink();

    // Mostramos la card
    card.classList.remove("d-none");
  });

});



//PROMEDIO
//◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢◤◢
let promedio: number = suma/series.length ;

const paragraphPromedio = document.getElementById("promedio_temporadas")!; 
paragraphPromedio.textContent = "Seasons average: "+ promedio.toString() ;



