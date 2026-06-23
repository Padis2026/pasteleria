// ====================================
// PASTELERÍA MIL SABORES — DATOS
// ====================================

const products = [
  {
    id: 'TC001', category: 'tortas-cuadradas', catLabel: 'Tortas Cuadradas',
    name: 'Torta Cuadrada de Chocolate',
    desc: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.',
    price: 45000, emoji: '🍫',
    image: '../assets/torta-cuadrada-chocolate.jpg',
    customizable: true
  },
  {
    id: 'TC002', category: 'tortas-cuadradas', catLabel: 'Tortas Cuadradas',
    name: 'Torta Cuadrada de Frutas',
    desc: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.',
    price: 50000, emoji: '🍓',
    image: '../assets/torta-cuadrada-frutas.jpg',
    customizable: true
  },
  {
    id: 'TT001', category: 'tortas-circulares', catLabel: 'Tortas Circulares',
    name: 'Torta Circular de Vainilla',
    desc: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.',
    price: 40000, emoji: '🎂',
    image: '../assets/torta-circular-vainilla.jpg',
    customizable: true
  },
  {
    id: 'TT002', category: 'tortas-circulares', catLabel: 'Tortas Circulares',
    name: 'Torta Circular de Manjar',
    desc: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.',
    price: 42000, emoji: '🍮',
    image: '../assets/torta-circular-manjar.jpg',
    customizable: true
  },
  {
    id: 'PI001', category: 'postres-individuales', catLabel: 'Postres Individuales',
    name: 'Mousse de Chocolate',
    desc: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.',
    price: 5000, emoji: '🍫',
    image: '../assets/mousse-chocolate.jpg',
    customizable: false
  },
  {
    id: 'PI002', category: 'postres-individuales', catLabel: 'Postres Individuales',
    name: 'Tiramisú Clásico',
    desc: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.',
    price: 5500, emoji: '☕',
    image: '../assets/tiramisu-clasico.jpg',
    customizable: false
  },
  {
    id: 'PSA001', category: 'sin-azucar', catLabel: 'Productos Sin Azúcar',
    name: 'Torta Sin Azúcar de Naranja',
    desc: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.',
    price: 48000, emoji: '🍊',
    image: '../assets/torta-naranja-sin-azucar.jpg',
    customizable: true
  },
  {
    id: 'PSA002', category: 'sin-azucar', catLabel: 'Productos Sin Azúcar',
    name: 'Cheesecake Sin Azúcar',
    desc: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.',
    price: 47000, emoji: '🧀',
    image: '../assets/cheesecake-sin-azucar.jpg',
    customizable: false
  },
  {
    id: 'PT001', category: 'tradicional', catLabel: 'Pastelería Tradicional',
    name: 'Empanada de Manzana',
    desc: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.',
    price: 3000, emoji: '🍎',
    image: '../assets/empanada-manzana.jpg',
    customizable: false
  },
  {
    id: 'PT002', category: 'tradicional', catLabel: 'Pastelería Tradicional',
    name: 'Tarta de Santiago',
    desc: 'Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.',
    price: 6000, emoji: '🏛️',
    image: '../assets/tarta-santiago.jpg',
    customizable: false
  },
  {
    id: 'PG001', category: 'sin-gluten', catLabel: 'Productos Sin Gluten',
    name: 'Brownie Sin Gluten',
    desc: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.',
    price: 4000, emoji: '🟫',
    image: '../assets/brownie-sin-gluten.jpg',
    customizable: false
  },
  {
    id: 'PG002', category: 'sin-gluten', catLabel: 'Productos Sin Gluten',
    name: 'Pan Sin Gluten',
    desc: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.',
    price: 3500, emoji: '🍞',
    image: '../assets/pan-sin-gluten.jpg',
    customizable: false
  },
  {
    id: 'PV001', category: 'vegana', catLabel: 'Productos Vegana',
    name: 'Torta Vegana de Chocolate',
    desc: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.',
    price: 50000, emoji: '🌱',
    image: '../assets/torta-vegana-chocolate.jpg',
    customizable: true
  },
  {
    id: 'PV002', category: 'vegana', catLabel: 'Productos Vegana',
    name: 'Galletas Veganas de Avena',
    desc: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.',
    price: 4500, emoji: '🌾',
    image: '../assets/galletas-veganas-avena.jpg',
    customizable: false
  },
  {
    id: 'TE001', category: 'especiales', catLabel: 'Tortas Especiales',
    name: 'Torta Especial de Cumpleaños',
    desc: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.',
    price: 55000, emoji: '🎉',
    image: '../assets/torta-cumpleanos.jpg',
    customizable: true
  },
  {
    id: 'TE002', category: 'especiales', catLabel: 'Tortas Especiales',
    name: 'Torta Especial de Boda',
    desc: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.',
    price: 60000, emoji: '💍',
    image: '../assets/torta-boda.jpg',
    customizable: true
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'tortas-cuadradas', label: 'Tortas Cuadradas' },
  { id: 'tortas-circulares', label: 'Tortas Circulares' },
  { id: 'postres-individuales', label: 'Postres Individuales' },
  { id: 'sin-azucar', label: 'Sin Azúcar' },
  { id: 'tradicional', label: 'Tradicional' },
  { id: 'sin-gluten', label: 'Sin Gluten' },
  { id: 'vegana', label: 'Vegana' },
  { id: 'especiales', label: 'Especiales' }
];

function formatPrice(n) {
  return '$' + n.toLocaleString('es-CL') + ' CLP';
}

function renderProductCard(p, discountPct = 0) {
  const finalPrice = Math.round(p.price * (1 - discountPct / 100));
  const discountHtml = discountPct > 0
    ? `<span style="text-decoration:line-through;color:var(--text-light);font-size:0.85rem">${formatPrice(p.price)}</span>
       <span class="product-price" style="color:var(--success)">${formatPrice(finalPrice)}</span>`
    : `<span class="product-price">${formatPrice(p.price)}</span>`;

  return `
    <div class="product-card" id="prod-${p.id}">
      <div class="product-img">
        ${p.image ? `<img src="${location.pathname.includes('/pages/') ? p.image : p.image.replace('../', '')}" alt="${p.name}">` : p.emoji}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div>${discountHtml}</div>
          <button class="btn btn-primary btn-sm" onclick="openAddToCart('${p.id}')">Agregar</button>
        </div>
      </div>
    </div>
  `;
}
