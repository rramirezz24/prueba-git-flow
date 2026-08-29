const txtTarea = document.getElementById("taskInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareasPendientes = document.getElementById("ListaTareasPendientes");
const listaTareasCompletadas = document.getElementById("ListaTareasCompletadas");

//-----------------------------//---------------------------//


btnAgregar.addEventListener("click", () => {

    //controlar que la tarea no este repetida
    const tareaRepetida = Array.from(listaTareasPendientes.children).some((li) => {
        return li.textContent.trim() === txtTarea.value.trim();
    });
    //alerta de tarea repetida
    if (tareaRepetida) {
        alert("La tarea ya existe.");
        return;
    }

    //controlar que la tarea no este vacia
    if (txtTarea.value.trim() === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    const li = document.createElement("li");
    li.className = "listaTareas__item";


    //boton para completar tarea

    const btnCompletar = document.createElement("button");
    btnCompletar.innerHTML = '<i class="bi bi-check-lg"></i>';
    btnCompletar.className = "btnCompletar";

    btnCompletar.addEventListener("click", () => {
        console.log("Tarea completada:");
        // Mover la tarea a la lista de tareas completadas
        listaTareasCompletadas.appendChild(li);
        btnEliminar.style.display = "none";
        btnEditar.style.display = "none";
        btnCompletar.style.display = "none";
        btnRestaurar.style.display = "inline-block"; });


    //restaurar tarea a pendientes
    const btnRestaurar = document.createElement("button");
    btnRestaurar.innerHTML =  'X';
    btnRestaurar.className = "btnRestaurar";
    btnRestaurar.style.display = "none";
    
    btnRestaurar.addEventListener("click", () => {
        console.log("Tarea restaurada:");
        // Mover la tarea de nuevo a la lista de tareas pendientes
        listaTareasPendientes.appendChild(li);
        btnEliminar.style.display = "inline-block";
        btnEditar.style.display = "inline-block";
        btnCompletar.style.display = "inline-block";
        btnRestaurar.style.display = "none";
    });

    //CREACION DEL TEXTO DE LA TAREA
    const texto = document.createElement("span");
    texto.textContent = txtTarea.value.trim();

    //CREACION DEL BOTON ELIMINAR
    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = '<i class="bi bi-trash"></i>';
    btnEliminar.className = "btnEliminar";
    btnEliminar.addEventListener("click", () => {
        li.remove();
    });

    //crear boton de editar

    const btnEditar = document.createElement("button");
    btnEditar.innerHTML = '<i class="bi bi-pencil"></i>';
    btnEditar.className = "btnEditar";
    btnEditar.addEventListener("click", () => {
        const nuevaTarea = prompt("Editar tarea:", texto.textContent);
        if (nuevaTarea !== null) {
            texto.textContent = nuevaTarea.trim();
        }
    });

    //
    
    li.appendChild(btnRestaurar);
    li.appendChild(btnCompletar);
    li.appendChild(texto);
    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);
    

    //agregar li a la lista de tareas
    listaTareasPendientes.appendChild(li);

    //limpiar input
    txtTarea.value = "";




});

//-----------------------------//---------------------------//


// Permitir agregar tarea al presionar Enter
txtTarea.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btnAgregar.click();
    }
});

