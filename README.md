# Proyecto Rick and Morty

![Rick and Morty Logo](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## Descripción

Este proyecto es una aplicación web que consume la API pública de Rick and Morty para mostrar información detallada sobre los personajes de la serie. La aplicación permite a los usuarios:

- Visualizar personajes con sus detalles (nombre, estado, especie, etc.)
- Buscar personajes específicos
- Navegar entre distintas páginas de resultados mediante un sistema de paginación
- Ver información detallada de cada personaje

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)
- **Testing**: 
    - Mocha (Framework de pruebas)
    - Chai (Biblioteca de aserciones)
    - Mochawesome (Generador de reportes)
- **Gestión de paquetes**: npm

## Estructura del Proyecto

```
proyecto-rick-and-morty/
├── index.html              # Página principal
├── README.md               # Documentación del proyecto
├── package.json            # Configuración de npm y dependencias
├── js/
│   ├── main.js             # Punto de entrada de la aplicación
│   ├── services/
│   │   └── apiService.js   # Servicios para consumir la API
│   ├── ui/
│   │   ├── characterRender.js      # Renderizado de personajes
│   │   └── paginationController.js # Control de paginación
│   └── test/               # Pruebas unitarias
│       ├── index.html      # Runner de pruebas
│       ├── ejemplos/       # Ejemplos de pruebas
│       └── ui/             # Pruebas de componentes UI
└── css/                    # Estilos CSS
```

## Instalación

Para instalar y configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/proyecto-rick-and-morty.git
cd proyecto-rick-and-morty
```

2. Instala las dependencias:
```bash
npm install
```

## Cómo Ejecutar la Aplicación

Puedes ejecutar la aplicación de varias formas:

### Usando un servidor local

1. Si tienes Node.js instalado, puedes usar http-server:
```bash
npx http-server
```

2. Abre tu navegador y ve a `http://localhost:8080`

### Abriendo el archivo HTML directamente

Simplemente abre el archivo `index.html` en tu navegador favorito.

## Cómo Ejecutar las Pruebas

El proyecto incluye pruebas unitarias para verificar el funcionamiento correcto de los componentes.

### Ejecutar todas las pruebas:

```bash
npm test
```

### Ejecutar pruebas específicas de Rick and Morty:

```bash
npm run testRick
```

### Generar un reporte visual con Mochawesome:

```bash
npm run testMochawesome
```

Este comando generará un reporte HTML interactivo en la carpeta `mochawesome-report`.

## Licencia

Este proyecto está licenciado bajo la licencia MIT - ver el archivo LICENSE para más detalles.

