# Greydive Challenge - Matias Badano

### Descripción

Este proyecto es parte del desafío de entrevista de trabajo de Greydive. A continuación, se detalla la implementación y las habilidades trabajadas.

## Implementación

### Home

- Se utilizó el hook `useState` y `useEffect` para gestionar el estado de la aplicación y realizar la llamada a la API simulada mediante `fetch` para obtener los datos del archivo `db.json`.
- Con la información obtenida, se mostraron los nombres de los clientes y se utilizaron como parte de la URL, ya que los IDs proporcionados en el JSON eran únicos y permitían distinguir entre los objetos mostrados.
- Para gestionar las rutas y los enlaces, se utilizó el paquete `react-router-dom`.

### Cliente

- Se utilizó el hook `useParams` y `useEffect` para comparar el parámetro recibido en la URL con el cliente correspondiente y actualizar el estado con los datos del cliente seleccionado.
- Se utilizó el hook `useState` para mostrar una pantalla de carga básica mientras se obtienen los datos del cliente.
- Una vez obtenidos los datos del cliente del JSON, se mostraron en la interfaz.
- Se agregaron dos funciones sencillas para mostrar las respuestas no verbales, siguiendo el estilo del ejemplo proporcionado, y para contar las tareas realizadas.

## Habilidades trabajadas

- **React**: Biblioteca de JavaScript utilizada para construir la interfaz de usuario de la aplicación.
- **Hooks**: Utilización de los hooks `useState`, `useEffect` y `useParams` para gestionar el estado, efectos secundarios y parámetros de la aplicación.
- **React Router**: Utilización del paquete `react-router-dom` para gestionar las rutas y enlaces en la aplicación de una manera declarativa.
- **Consumo de API**: Uso de `fetch` para realizar solicitudes HTTP a la API simulada y obtener los datos necesarios para mostrar en la interfaz.
- **Desarrollo Front-end**: Implementación de componentes, estados y lógica de renderizado en el lado del cliente utilizando React.
## Demo
 [Demo](https://genuine-kulfi-3cbeb0.netlify.app)
 ## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://app.aluracursos.com/emprega-one/profile/matiasss95)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matiasjb95/)




