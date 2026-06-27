#  Pastelería Mil Sabores — Tienda Online

**Proyecto:** TI3V31 — Forma C  
**Ramo:** Programación Front End  
**Institución:** INACAP  

---

## Descripción

Plataforma de e-commerce para **Pastelería Mil Sabores**, una pastelería chilena con 50 años de historia que en 1995 colaboró en la creación de la torta más grande del mundo (Récord Guinness). La tienda online permite a los clientes explorar el catálogo, personalizar pedidos, gestionar su carrito de compras y hacer seguimiento de sus pedidos.

---

##  Estructura del Proyecto

```
pasteleria/
│
├── index.html              → Página principal (Inicio)
│
├── assets/                 → Imágenes de productos y favicon
│   ├── favicon.jpg
│   ├── torta-cuadrada-chocolate.jpg
│   ├── torta-cuadrada-frutas.jpg
│   ├── torta-circular-vainilla.jpg
│   ├── torta-circular-manjar.jpg
│   ├── mousse-chocolate.jpg
│   ├── tiramisu-clasico.jpg
│   ├── torta-naranja-sin-azucar.jpg
│   ├── cheesecake-sin-azucar.jpg
│   ├── empanada-manzana.jpg
│   ├── tarta-santiago.jpg
│   ├── brownie-sin-gluten.jpg
│   ├── pan-sin-gluten.jpg
│   ├── torta-vegana-chocolate.jpg
│   ├── galletas-veganas-avena.jpg
│   ├── torta-cumpleanos.jpg
│   └── torta-boda.jpg
│
├── css/
│   └── styles.css          → Hoja de estilos global
│
├── js/
│   ├── data.js             → Productos, categorías y renderizado de tarjetas
│   ├── cart.js             → Lógica del carrito de compras y descuentos
│   ├── auth.js             → Autenticación, sesión y modales
│   └── app.js              → Inicialización global
│
└── pages/
    ├── catalogo.html       → Catálogo con búsqueda y filtros avanzados
    ├── registro.html       → Registro de nuevos usuarios
    ├── login.html          → Inicio de sesión
    ├── carrito.html        → Carrito de compras y confirmación de pedido
    ├── boleta.html         → Boleta/comprobante de compra
    ├── seguimiento.html    → Seguimiento de estado del pedido
    ├── perfil.html         → Perfil de usuario y historial de pedidos
    └── blog.html           → Blog de recetas y comunidad INACAP
```

---

##  Cómo ejecutar el proyecto

Este proyecto es **100% estático** (HTML, CSS y JavaScript puro). No requiere servidor, instalación de dependencias ni compilación.

### Pasos:

1. Descomprimir el archivo `pasteleria.zip`
2. Abrir la carpeta `pasteleria/`
3. Hacer doble clic en `index.html`

>  **Importante:** Para que las rutas relativas funcionen correctamente, abrir siempre `index.html` desde dentro de la carpeta `pasteleria/`. No mover archivos individualmente.

>  **Recomendado:** Usar la extensión **Live Server** de VS Code para una mejor experiencia de desarrollo.

---

##  Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de todas las páginas |
| CSS3 | Estilos, diseño responsive, animaciones |
| JavaScript (Vanilla ES6+) | Lógica de negocio, carrito, autenticación |
| LocalStorage | Persistencia de sesión, carrito y pedidos |
| Google Fonts | Tipografías Pacifico y Lato |
| Web Share API | Compartir en redes sociales |

---

##  Diseño Visual

Los colores y tipografías siguen estrictamente la propuesta visual del enunciado:

| Elemento | Valor |
|---|---|
| Fondo principal | `#FFF5E1` — Crema Pastel |
| Acento rosa | `#FFC0CB` — Rosa Suave |
| Acento chocolate | `#8B4513` — Chocolate |
| Texto principal | `#5D4037` — Marrón Oscuro |
| Texto secundario | `#B0BEC5` — Gris Claro |
| Fuente cuerpo | Lato (Google Fonts) |
| Fuente títulos | Pacifico (Google Fonts) |

---

## ✅ Requerimientos Funcionales Implementados

### 1. Registro y Autenticación de Usuarios
- Formulario de registro con validación completa en tiempo real
- Sistema de login con verificación de credenciales
- Sesión persistente mediante `localStorage`
- **Descuento 50%** automático para usuarios con 50 años o más (detectado por fecha de nacimiento)
- **Descuento 10% de por vida** al registrarse con el código `FELICES50`
- **Torta gratis en cumpleaños** para estudiantes que se registren con correo institucional INACAP (`@inacap.cl` o `@inacapmail.cl`)

### 2. Gestión de Perfiles de Usuario
- Perfil editable: nombre, teléfono, dirección y preferencias
- Historial completo de pedidos realizados
- Recomendaciones personalizadas según preferencias del usuario
- Visualización de beneficios activos (descuentos, membresía INACAP)

### 3. Catálogo de Productos
- 16 productos organizados en 8 categorías según el enunciado
- Imágenes reales para cada producto
- Filtro por categoría, precio máximo y tipo (personalizable / saludable)
- Buscador de texto en tiempo real (nombre, descripción, categoría)
- Ordenamiento por precio, nombre o personalizables primero
- Descuentos aplicados visualmente en el precio (precio tachado + precio final)
- Mensajes personalizados para tortas personalizables

### 4. Carrito de Compras
- Agregar, eliminar y modificar cantidad de productos
- Resumen detallado con subtotal, descuento aplicado y total
- Selector de fecha de entrega, horario y dirección
- Botones para compartir el carrito en redes sociales

### 5. Procesamiento y Seguimiento de Pedidos
- Confirmación de pedido con número único generado automáticamente
- **Boleta de compra** (`boleta.html`) con detalle completo: productos, precios, IVA, descuentos, datos de entrega
- Boleta imprimible (función de impresión del navegador)
- **Seguimiento de pedido** (`seguimiento.html`) con línea de tiempo animada de 5 estados:
  -  Pedido recibido
  -  Preparando
  -  Listo para despacho
  -  En despacho
  -  Entregado
- Buscador de pedido por número de orden o correo electrónico

### 6. Gestión de Envíos
- Selección de fecha y horario preferido de entrega (4 franjas horarias)
- Campo para notas adicionales de entrega
- Dirección de entrega autocompletada desde el perfil del usuario

### 7. Promoción en Redes Sociales
- Botones de compartir en **WhatsApp, Facebook, Twitter/X e Instagram** en:
  - Página de inicio
  - Catálogo
  - Carrito
  - Boleta
  - Seguimiento
  - Blog (por artículo)
  - Perfil (por pedido)

---

##  Páginas Adicionales (Deseos del Enunciado)

### Blog y Comunidad (`blog.html`)
- 6 artículos completos sobre repostería
- Artículos de estudiantes INACAP (ganache, harinas sin gluten, decoración, repostería vegana)
- Historia del Récord Guinness 1995
- Programa de alianza con INACAP
- Filtro por categoría (Recetas, Tips, Historia, Comunidad)
- Modal de lectura completa por artículo
- Compartir individual por artículo en redes sociales
- Formulario de suscripción a newsletter

### Impacto Comunitario (`index.html`)
- Sección destacada en la página principal
- Descripción del apoyo a estudiantes INACAP
- Apoyo a productores locales
- Legado de 50 años de la pastelería

### Búsqueda Avanzada (`catalogo.html`)
- Barra de búsqueda de texto libre
- Filtro por categoría (9 opciones)
- Slider de precio máximo con valor en tiempo real
- Selector de ordenamiento (4 criterios)
- Checkboxes para "solo personalizables" y "opciones saludables"
- Botón para limpiar todos los filtros
- Contador de resultados en tiempo real

---

##  Almacenamiento de Datos

El proyecto utiliza `localStorage` del navegador para persistir:

| Clave | Contenido |
|---|---|
| `ms_user` | Usuario actualmente en sesión |
| `ms_users` | Lista de todos los usuarios registrados |
| `ms_cart` | Productos en el carrito actual |

> Los datos persisten entre sesiones del navegador mientras no se limpie el almacenamiento local.

---

##  Cómo Probar las Funcionalidades

### Probar descuento +50 años:
1. Ir a **Registrarse**
2. Ingresar una fecha de nacimiento de hace más de 50 años (ej: 01/01/1970)
3. Al guardar, el descuento del 50% se aplica automáticamente en el catálogo

### Probar código FELICES50:
1. Ir a **Registrarse**
2. En el campo "Código promocional" escribir `FELICES50`
3. Se activa el 10% de descuento de por vida

### Probar beneficio INACAP:
1. Ir a **Registrarse**
2. Usar un correo que termine en `@inacap.cl` o `@inacapmail.cl`
3. Usar como fecha de nacimiento el día de hoy (mismo día y mes)
4. Al iniciar sesión aparecerá el mensaje de torta gratis

### Probar el flujo completo de compra:
1. Ir al **Catálogo** → Agregar productos
2. Ir al **Carrito** → Revisar resumen → Confirmar pedido
3. Seleccionar fecha y dirección → Confirmar
4. Ver la **Boleta** generada automáticamente
5. Ir a **Seguimiento** para ver el estado del pedido

---

## Autor

Desarrollado como proyecto de evaluación para el ramo **Programación Front End**.  
Instituto INACAP — 2024.
