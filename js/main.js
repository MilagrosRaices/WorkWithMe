(function(){
	
	// Variable
	
	const lista = document.getElementById("lista"),
	tareaInput = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");
	
	// Funciones
	
	const agregarTarea = function(){ 
		
		let tarea = tareaInput.value,
		nuevaTarea = document.createElement("li"),
		enlace = document.createElement("a"),
		contenido = document.createTextNode(tarea);
		

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}else if (localStorage.getItem('tarea')){
			tarea = JSON.parse(localStorage.getItem('tarea'))
		}



		//  contenido del enlace
		enlace.appendChild(contenido);
		// Atributo href
		/*enlace.setAttribute("href", "#");*/
		// Nueva tarea
		nuevaTarea.appendChild(enlace);
		// Nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (let i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	const comprobarInput = function(){
		tareaInput.className
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	const eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (let i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}	
	
}());