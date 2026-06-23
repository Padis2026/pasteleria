// ====================================
// CARRITO DE COMPRAS
// ====================================

function getCart() {
  return JSON.parse(localStorage.getItem('ms_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('ms_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1, message = '') {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.message === message);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty, message });
  }
  saveCart(cart);
  showToast(`✅ ${product.name} agregado al carrito`);
}

function removeFromCart(productId, message = '') {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.message === message));
  saveCart(cart);
}

function updateQty(productId, message, newQty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.message === message);
  if (item) {
    item.qty = Math.max(1, newQty);
  }
  saveCart(cart);
}

function getCartTotal() {
  const user = getUser();
  const cart = getCart();
  let subtotal = 0;
  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (p) subtotal += p.price * item.qty;
  });

  const discount = getDiscount(user, subtotal);
  const total = subtotal - discount;
  return { subtotal, discount, total };
}

function getDiscount(user, subtotal) {
  if (!user) return 0;
  let pct = 0;

  // +50 años → 50%
  if (user.birthYear) {
    const age = new Date().getFullYear() - user.birthYear;
    if (age >= 50) pct = Math.max(pct, 50);
  }

  // Código FELICES50 → 10%
  if (user.codigoFelices50) pct = Math.max(pct, 10);

  // INACAP + cumpleaños → descuento 100% en producto especial (manejo aparte)
  return Math.round(subtotal * pct / 100);
}

function isINACAPBirthday(user) {
  if (!user || !user.emailINACAP) return false;
  const today = new Date();
  const dob = new Date(user.birthdate);
  return dob.getDate() === today.getDate() && dob.getMonth() === today.getMonth();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((acc, i) => acc + i.qty, 0);
  document.querySelectorAll('#cartBadge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'inline-block' : 'none';
  });
}

function clearCart() {
  localStorage.removeItem('ms_cart');
  updateCartBadge();
}
