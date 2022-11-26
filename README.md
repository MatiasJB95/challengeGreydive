## Greydive Challeng
Matias Badano

 [Demo](https://genuine-kulfi-3cbeb0.netlify.app)


# Descripción
Una pequeña descripción de como hice la app.
El estilo es el mismo que esta en el ejemplo.

Home:

Utilize useState, useEffect, una funcion getData via fetch para simular una conexion con el db.json. Con la informacion obtenía mostre los nombres de los clientes y al mismo tiempo lo use como url ya que el id que venia del json eran iguales y no se iba a poder diferenciar entre los objetos mostrados.
Para los links y las rutas obviamente use el package react-router-dom

Cliente
Hook useParams y useEffect para comparar lo que me enviaba por url con el cliente correspondiente, donde dicha informacion pasa al useState.
useState para mostrar una pantalla de carga basica. Ya después es mostrar los datos obtenidos del json. Agregue dos simples función para mostrar las respuestas no verbales como en el ejemplo, y otra para contar las tareas. 
