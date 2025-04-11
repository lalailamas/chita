# Prueba Técnica - Chita Factoring Online

Este repositorio contiene la solución a la prueba técnica de Chita Factoring Online, desarrollada con **Next.js** y **TailwindCSS**.

## 🚀 Tecnologías utilizadas

- Next.js 
- React
- TailwindCSS


## 📱 Responsive Design

La aplicación es completamente responsive. Se adapta a dispositivos móviles, tablets y pantallas de escritorio.

## 🧩 Estructura del proyecto

src/
│── app/
│   │── components/          # Componentes reutilizables (e.g., CloseButton, FooterButtons, ModalHeader, ModalTabs, SecurityMessage, TabEmpresa, TabPersonal)
│   │── modal/               # Página que contiene el componente Modal
│   │── globals.css          # Estilos globales con TailwindCSS
│   │── layout.js            # Layout raíz de la aplicación
│   │── page.js              # Página principal de la aplicación

public/                      # Archivos estáticos como imágenes e íconos
│── [imágenes como lock.svg, close.svg]

## 📝 Consideraciones

- La interfaz fue desarrollada pensando en la accesibilidad y la experiencia de usuario.
- Se priorizó la semántica del HTML y la separación de componentes para mantener el código limpio y escalable.
- El modal es totalmente responsive y adapta su contenido de manera fluida.

## 🧪 Cómo ejecutar el proyecto

1. Clona el repositorio:
  
   git clone [\[url\]](https://github.com/lalailamas/chitafactoring.git)

2. Instala las dependencias: 

		npm install

3. Ejecuta el servidor de desarrollo:

	    npm run dev


## 🌐 Live Demo

[Deploy here](https://chitafactoring.vercel.app/)