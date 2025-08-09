# Proyecto Rick and Morty - Testing con Mocha & Chai

![Rick and Morty Logo](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## Descripción

Este proyecto es una aplicación web moderna que consume la API pública de Rick and Morty para mostrar información detallada sobre los personajes de la serie. La aplicación cuenta con un diseño atractivo y funcional que permite a los usuarios:

- 🎭 **Visualizar personajes**: Mostrar personajes con detalles completos (nombre, estado, especie, género, imagen)
- 🔍 **Búsqueda inteligente**: Buscar personajes específicos por nombre
- 📄 **Navegación por páginas**: Sistema de paginación fluido para explorar todos los personajes
- 🎨 **Interfaz moderna**: Diseño responsive con gradientes, animaciones y efectos visuales
- 🧪 **Testing robusto**: Suite completa de pruebas unitarias y de integración
- 📊 **Reportes detallados**: Generación automática de reportes de pruebas con Mochawesome

## ✨ Características Principales

### Interfaz de Usuario

- Diseño moderno con tema Rick & Morty
- Tarjetas de personajes con imágenes circulares
- Efectos hover y transiciones suaves
- Header personalizado con navegación integrada
- Responsive design para todos los dispositivos

### Sistema de Testing

- Test Runner interactivo en navegador
- Reportes HTML visualmente atractivos
- Navegación entre secciones de la aplicación
- Cobertura de componentes UI y servicios API

## 🛠️ Tecnologías Utilizadas

- **Frontend**:

  - HTML5 semántico
  - CSS3 con variables personalizadas y gradientes
  - JavaScript ES6+ (Módulos, Async/Await, Clases)
  - Bootstrap 5.3.2 para layout responsive
  - Google Fonts (Orbitron, Roboto)

- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

- **Testing & QA**:
  - **Mocha**: Framework de pruebas JavaScript
  - **Chai**: Biblioteca de aserciones (assert, expect, should)
  - **Mochawesome**: Generador de reportes HTML interactivos
- **Herramientas de Desarrollo**:
  - npm para gestión de paquetes
  - Vercel para deployment y configuración de rutas

## 📁 Estructura del Proyecto

```
mocha-chai/
├── 📄 index.html                    # Página principal de personajes
├── 📄 vercel.json                   # Configuración de deployment y rutas
├── 📄 package.json                  # Dependencias y scripts npm
├── 📄 README.md                     # Documentación del proyecto
├── 🖼️  img/
│   └── rick.ico                     # Favicon del proyecto
├── 📁 app/                          # Código fuente de la aplicación
│   ├── 📄 main.js                   # Punto de entrada principal
│   ├── 📁 services/
│   │   └── apiService.js            # Servicios para consumir la API
│   └── 📁 ui/
│       ├── characterRender.js       # Renderizado de personajes
│       └── paginationController.js  # Control de paginación
├── 📁 test/                         # Suite de pruebas
│   ├── 📄 index.html                # Test Runner en navegador
│   ├── 📁 ejemplos/                 # Ejemplos de diferentes estilos de pruebas
│   │   ├── assertTest.js            # Pruebas usando assert
│   │   ├── expectTest.js            # Pruebas usando expect
│   │   └── shouldTest.js            # Pruebas usando should
│   ├── 📁 services/
│   │   └── apiTest.js               # Pruebas de integración de la API
│   └── 📁 ui/
│       ├── paginationTest.js        # Pruebas del controlador de paginación
│       └── renderTest.js            # Pruebas del renderizador de personajes
└── 📁 mochawesome-report/           # Reportes generados automáticamente
    ├── 📄 report.html               # Reporte HTML principal
    ├── 📄 report.json               # Datos del reporte en JSON
    └── 📁 assets/                   # Recursos del reporte (CSS, JS, fuentes)
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Navegador web moderno

### Pasos de instalación

1. **Clonar el repositorio**:

```bash
git clone https://github.com/mdonas/mocha-chai.git
cd mocha-chai
```

2. **Instalar dependencias**:

```bash
npm install
```

3. **Verificar la instalación**:

```bash
npm test
```

## 🎮 Cómo Usar la Aplicación

### Ejecutar la aplicación

#### Opción 1: Servidor local con Node.js

```bash
npx http-server
```

Luego abre `http://localhost:8080` en tu navegador.

#### Opción 2: Abrir directamente

Abre el archivo `index.html` en tu navegador favorito.

### Navegación en la aplicación

1. **Página Principal**: Explora personajes de Rick and Morty

   - Usa la barra de búsqueda para encontrar personajes específicos
   - Navega entre páginas usando los botones de paginación
   - Haz hover sobre las tarjetas para ver efectos visuales

2. **Test Runner**: Accede desde el botón "Test Runner" en el header

   - Ejecuta pruebas en tiempo real en el navegador
   - Ve resultados detallados de cada test
   - Regresa a la página principal con el botón "← Volver a Personajes"

3. **Reporte Mochawesome**: Accede desde el botón "Mochawesome Report"
   - Ve estadísticas completas de las pruebas
   - Explora resultados organizados por suites
   - Navega de vuelta con el botón de navegación integrado

## 🧪 Sistema de Testing

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar pruebas de la API

```bash
npm run testApi
```

### Generar reporte completo con Mochawesome

```bash
npm run report
```

Este comando:

- Ejecuta todas las pruebas
- Genera un reporte HTML interactivo
- Abre automáticamente el reporte en tu navegador
- Incluye gráficos, estadísticas y navegación integrada

### Tipos de pruebas incluidas

1. **Pruebas de Estilo de Aserciones** (`test/ejemplos/`):

   - `assertTest.js`: Ejemplos usando el estilo `assert`
   - `expectTest.js`: Ejemplos usando el estilo `expect`
   - `shouldTest.js`: Ejemplos usando el estilo `should`

2. **Pruebas de Integración** (`test/services/`):

   - Verificación de la estructura de respuestas de la API
   - Manejo de errores y casos edge
   - Validación de datos de personajes

3. **Pruebas de Componentes UI** (`test/ui/`):
   - Renderizado correcto de personajes
   - Funcionalidad del sistema de paginación
   - Manejo de estados de error

## 🎨 Personalización y Temas

El proyecto utiliza un tema personalizado inspirado en Rick and Morty:

- **Colores principales**:
  - Verde aguamarina (#00adb5)
  - Verde brillante (#43e97b)
  - Grises oscuros para fondos (#232526, #393e46)
- **Fuentes**:

  - Orbitron para títulos (estilo futurista)
  - Roboto para texto general

- **Efectos visuales**:
  - Gradientes lineales
  - Sombras suaves y hover effects
  - Transiciones animadas
  - Diseño responsive

## 🌐 Deployment y Configuración

El proyecto está configurado para deployment en Vercel con las siguientes rutas:

- `/` → Página principal de personajes
- `/testing` → Test Runner en navegador
- `/report` → Reporte Mochawesome
- `/assets/*` → Recursos del reporte

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👥 Autores

- **Marcos & César** - Desarrollo inicial y diseño

## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por proporcionar la API gratuita
- Comunidad de Mocha y Chai por las excelentes herramientas de testing
- Adult Swim y Dan Harmon por crear Rick and Morty

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐
