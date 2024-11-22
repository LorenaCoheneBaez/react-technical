# React technical test

## Tabla de contenidos:

1. **[Objetivo](#objetivo)**
1. **[Pautas](#pautas)**
1. **[Tecnologías usadas](#tecnologías-usadas)**
1. **[Instalación de la base de datos](#instalación-de-la-base-de-datos)**
1. **[¿Cómo instalar el proyecto?](#cómo-instalar-el-proyecto)**
1. **[Consideraciones](#consideraciones)**

## Objetivo:

Implementar una aplicación web usando React, que permita listar y filtrar items de venta.

### Pautas:
Cargar los items por segmentos (mediante paginación) de 10 items y a medida que el usuario va navegando por la página y llega al final de la misma, se carga el siguiente segmento. 

Implementar una card que tiene que contar con los siguientes elementos: 
- título 
- imagen 
- descripción 
- botón (link para ver más detalles) 
- opcional: cuando el usuario clickee el botón se debe renderizar un modal, donde se visualiza más información del ítem.

Implementar un componente que permita filtrar las cards por algún criterio de búsqueda (title por ejemplo), el mismo debería estar ubicado al top de la página

#### Criterios de Aceptación 
- La aplicación debe ser implementada usando React, apoyándose en todas las herramientas, hooks y demás utilidades ofrecidas por la librería. 
- El scaffolding de la aplicación se puede hacer usando alguna de las herramientas soportadas por la comunidad, react create app o vite. 
- Los estilos deben estar implementados en CSS estándar. Se permite el uso de preprocesadores como Sass si lo prefieres, pero no está permitido el uso de frameworks como Tailwind o Bootstrap.
- El diseño planteado debe escalar tanto para mobile como para desktop (responsive).
- Se valora un diseño escalable, que facilite la adición de nuevos componentes a la página. ● Se valora la implementación de tanto pruebas unitarias como de integración. 
- Se valora el uso de html semántico.

***
## Tecnologías usadas

<p align="left">
<!–– REACT ––>
  <a href="https://reactjs.org/" target="_blank" data-bs-toggle="tooltip" title="ReactJS"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/> </a>
 <!–– JAVASCRIPT ––>
<a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" data-bs-toggle="tooltip" title="JavaScript"> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javaScript"/> </a>
<!-- JSON -->
<a href="https://www.w3schools.com/whatis/whatis_json.asp" alt="Express Js" data-bs-toggle="tooltip" title="JSON" ><img src= "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /></a>
<!-- HTML -->
<a href="https://developer.mozilla.org/es/docs/Web/HTML" alt="HTML5" data-bs-toggle="tooltip" title="HTML" ><img src= "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /></a>
<!–– SASS ––>
<a href="https://sass-lang.com" target="_blank" data-bs-toggle="tooltip" title="SASS"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/></a>
<!–– CSS ––>
<a href="https://www.w3schools.com/css/" target="_blank" data-bs-toggle="tooltip" title="CSS3"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> </a>
  <!–– VITE ––>
<a href="https://vite.dev/" target="_blank" data-bs-toggle="tooltip" title="Vite"> <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"/> </a>
  <!–– TYPESCRIPT ––>
<a href="https://www.typescriptlang.org/" target="_blank" data-bs-toggle="tooltip" title="TYPESCRIPT"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TYPESCRIPT"/> </a>
  </p>

***

## Instalación de la base de datos (JSON Server)

### Requisitos previos:
- Es necesario tener instalado **Node.js** y **npm**. Si no los tienes, puedes descargar Node.js desde [aquí](https://nodejs.org/).

### Instrucciones:

1. **Clonar el repositorio**:
   Clona el proyecto en tu máquina local si no lo has hecho aún:
   ```bash
   git clone [<url_del_repositorio>](https://github.com/LorenaCoheneBaez/react-technical.test)
   cd <react-technical.test>
   ```
   2. **instalar dependencias**:
   ```bash
   npm install
   ```
   3. **Levantar servidor db-json**:
   ```bash
   npm run start-server
   ```
   3. **Levantar servidor vite**:
   ```bash
   npm run dev
   ```

## Consideraciones:
### Uso de un Estado Global para los Ítems

En este proyecto, opté por utilizar un **estado global** para gestionar los ítems (productos). Esta decisión se tomó con la visión de que los **filtros** se pensaron como **componentes reutilizables** que podrían ser fácilmente escalables en el futuro, en caso de que la aplicación crezca y se añadan más filtros o funcionalidades.

### Paginación en el Frontend

La **paginación** se manejó desde el **frontend** en lugar de hacerlo directamente en la base de datos (db-json). La razón de esta decisión es que, aunque se podría haber implementado la paginación en el servidor, **todos los productos debían cargarse inicialmente** de todos modos debido a que los filtros y la paginación dependen del estado global.

### Escalabilidad y Mantenimiento

Este enfoque facilita la **escalabilidad futura**, ya que si la aplicación crece, se puede extender el estado global, añadir más filtros y aplicar nuevas lógicas de paginación de ser necesario.

### Pruebas Unitarias y de Funcionalidad

En este desafío técnico, **no se han implementado pruebas unitarias ni de funcionalidad** debido a las limitaciones de tiempo y el enfoque en la entrega del proyecto dentro del plazo establecido. Sin embargo, las pruebas son un aspecto clave para asegurar la calidad y el buen funcionamiento de la aplicación, y son algo que planeo implementar en una versión futura del proyecto.
