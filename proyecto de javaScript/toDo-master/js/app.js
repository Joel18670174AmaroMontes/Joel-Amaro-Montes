var today = new Date();
var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];

let weekDay = days[today.getDay()];/*  //  Dia de la semana [Lunes, Martes, Miercoles......] */
let monthDay = today.getDate(); /* //  Dia del mes [1, 2, 3, 4 .......] */
let month = today.getMonth(); /* //    Mes [Eenro, Febrero, Marzo ......] */
let monthName = months[month];
let year = today.getFullYear(); /* //  Año */


var fecha = document.getElementById('fecha'); /* // Obtiene el elemento h1 con ID=Fecha */
fecha.innerHTML =`${weekDay}, ${monthDay} ${monthName} ${year}`; /* // se agrega codigo HTML a la variable fecha, se reflejará en el H1 */

var inputTarea = document.getElementById('inputTarea');
var btnAdd = document.getElementById('btnAdd');
var lista = document.querySelector('.lista');

lista.addEventListener('click', function() { btnDone(event)});
btnAdd.addEventListener('click', function() { addElement('li', inputTarea.value) });

function addElement (lbl, text){
    if(text === '') {
        return;
    }
    const htmlCode = `<p class="work">${text}</p>` +
                     '<i job="done" class="fa fa-check-circle fa-2x done"></i>' +
                     '<i job="remove" class="fa fa-trash fa-2x remove"></i>';
    const element = document.createElement(lbl);
    element.innerHTML = htmlCode;
    
    lista.appendChild(element);
    inputTarea.value = '';
   }

   function btnDone (event) {
       let elem = event.target;
       let elementJob = elem.attributes.job.value;
       if (elementJob === 'done'){
           const p = elem.parentNode.firstElementChild;
           p.classList.toggle('workDone');
       }
       else if(elementJob === 'remove'){
        const li = elem.parentNode;
        lista.removeChild(li);
/* let paragraph = event.target.parentNode.firstElementChild;
    paragraph.classList.toggle('workDone'); */

       }

}
