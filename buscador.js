function buscarZapatillas() {
	const searchTerm = document.getElementById('searchInput').value;

	// Realizar la solicitud al backend para obtener los resultados
	fetch(`http://localhost:3000/buscar?q=${encodeURIComponent(searchTerm)}`)
	  .then(response => response.json())
	  .then(data => {
		// Mostrar los resultados en la lista
		const resultadosElement = document.getElementById('resultados');
		resultadosElement.innerHTML = '';

		data.forEach(zapatilla => {
		  const li = document.createElement('li');
		  li.textContent = zapatilla.nombre;
		  resultadosElement.appendChild(li);
		});
	  })
	  .catch(error => console.error('Error al buscar zapatillas:', error));
  }