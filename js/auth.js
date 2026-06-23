// ====================================
// AUTENTICACIÓN & UTILIDADES
// ====================================

function getUser() {
  return JSON.parse(localStorage.getItem('ms_user') || 'null');
}

function setUser(user) {
  localStorage.setItem('ms_user', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('ms_user');
  updateNavAuth();
  showToast('👋 Sesión cerrada');
  setTimeout(() => window.location.href = getRootPath() + 'index.html', 1000);
}

function getRootPath() {
  // Detectar si estamos en /pages/ o en raíz
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

function updateNavAuth() {
  const user = getUser();
  const link = document.getElementById('navAuthLink');
  if (!link) return;

  if (user) {
    link.textContent = '👤 ' + user.name.split(' ')[0];
    link.href = getRootPath() + 'pages/perfil.html';
  } else {
    link.textContent = 'Iniciar Sesión';
    link.href = getRootPath() + 'pages/login.html';
  }
}

// Toast notification
function showToast(msg, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// Modal para agregar al carrito (con opción de mensaje personalizado)
let pendingProductId = null;

function openAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  pendingProductId = productId;

  let modal = document.getElementById('addCartModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'addCartModal';
    modal.className = 'modal-overlay hidden';
    modal.innerHTML = `
      <div class="modal">
        <button class="modal-close" onclick="closeAddCartModal()">✕</button>
        <h2 class="form-title" id="modalProductName"></h2>
        <p class="form-subtitle" id="modalProductPrice"></p>
        <div class="form-group" id="msgGroup" style="display:none">
          <label>Mensaje personalizado (opcional)</label>
          <input type="text" id="modalMsg" placeholder="Ej: ¡Feliz Cumpleaños María!" maxlength="60" />
          <div class="hint">Máximo 60 caracteres</div>
        </div>
        <div class="form-group">
          <label>Cantidad</label>
          <input type="number" id="modalQty" value="1" min="1" max="20" />
        </div>
        <button class="btn btn-primary btn-block" onclick="confirmAddToCart()">🛒 Agregar al Carrito</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) closeAddCartModal(); });
  }

  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = formatPrice(product.price);
  document.getElementById('msgGroup').style.display = product.customizable ? 'block' : 'none';
  document.getElementById('modalQty').value = 1;
  if (document.getElementById('modalMsg')) document.getElementById('modalMsg').value = '';
  modal.classList.remove('hidden');
}

function closeAddCartModal() {
  const modal = document.getElementById('addCartModal');
  if (modal) modal.classList.add('hidden');
}

function confirmAddToCart() {
  const qty = parseInt(document.getElementById('modalQty').value) || 1;
  const msg = document.getElementById('modalMsg') ? document.getElementById('modalMsg').value.trim() : '';
  addToCart(pendingProductId, qty, msg);
  closeAddCartModal();
}
