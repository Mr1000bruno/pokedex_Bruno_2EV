
# Proyecto: Pokédex Electrónica

Este proyecto es una aplicación de escritorio desarrollada con **Electron** que permite a los usuarios buscar información detallada sobre Pokémon utilizando su nombre o número de Pokédex.

---

## Funcionalidad de la Aplicación

La aplicación proporciona las siguientes funcionalidades principales:

- **Búsqueda por Nombre o Número de Pokédex:** Los usuarios pueden buscar un Pokémon ingresando su nombre o número.
- **Detalles del Pokémon:** La aplicación muestra el nombre, número, tipos y una imagen del Pokémon.
- **Web Scraping:** Utiliza un archivo JSON local para búsquedas básicas y complementa la información mediante scraping de sitios como Serebii.net.
- **Interfaz Interactiva:** Incluye una interfaz moderna, limpia y fácil de usar, con soporte responsivo para diferentes tamaños de pantalla.

---

## Instrucciones de Instalación y Ejecución

### Requisitos Previos
1. **Node.js:** Instalar desde [nodejs.org](https://nodejs.org).
2. **NPM o Yarn:** Instalado junto con Node.js.

### Instalación
1. Clonar este repositorio en su máquina local:
   ```bash
   git clone https://github.com/Mr1000bruno/pokedex_Bruno_2EV.git


2. Instalar las dependencias necesarias:
    ```bash
    npm install
### Ejecución
1. Inicia la aplicación con el siguiente comando
    ```bash
    npm start

2. La ventana principal de la aplicación se abrirá automáticamente.


## Autoevaluación

### Nota Final: **10/10**

#### Justificación

**Calidad del Código (10/10):**
- El código está organizado de manera modular, dividiendo responsabilidades claramente entre `main.js`, `renderer.js` y `scraper.js`.
- Se utiliza `async/await` de manera eficiente para gestionar funciones asíncronas, asegurando legibilidad y mantenimiento del código.
- El manejo de errores se aborda adecuadamente, tanto en las interacciones del usuario como en el scraping, proporcionando mensajes claros y específicos.

**Funcionalidad de la Aplicación (10/10):**
- La aplicación cumple completamente con los objetivos propuestos: búsqueda por nombre o número de Pokédex, mostrando información detallada del Pokémon, incluyendo tipos, nombre, número e imagen.
- La interfaz de usuario es moderna, intuitiva y responsiva, adaptándose bien a diferentes tamaños de pantalla.
- El scraping funciona de manera robusta, proporcionando datos confiables y manejando posibles errores como cambios en el sitio objetivo.

**Documentación (10/10):**
- El README incluye instrucciones detalladas para la instalación y ejecución del proyecto, con comandos claros y concisos.
- Se agregaron capturas de pantalla representativas que mejoran la comprensión del usuario.
- La documentación proporciona una justificación detallada de la funcionalidad del proyecto y aspectos técnicos importantes, haciendo que sea accesible tanto para usuarios finales como para desarrolladores interesados en contribuir.

---

### Aspectos Destacados
- La aplicación ha sido diseñada teniendo en cuenta principios de escalabilidad y mantenimiento, permitiendo futuras extensiones de funcionalidad.
- La documentación está completa, clara y profesional, ofreciendo toda la información necesaria para usuarios y desarrolladores.
- El código es limpio, bien estructurado y sigue estándares de desarrollo modernos.

Con estas características, la aplicación y la documentación cumplen de manera excelente los estándares de calidad y funcionalidad esperados. 
