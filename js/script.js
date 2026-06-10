/* ============================================================
   Stackly — Artisan Bakery  |  Main Script
   ============================================================ */

'use strict';

// ── Product Catalogue ────────────────────────────────────────

const PRODUCTS = [
  // Cakes
  { id: 1,  name: 'Chocolate Dream Cake',    cat: 'cakes',    emoji: '🎂', img: 'images/cake_choc.webp',          price: 42.00, rating: 5.0, reviews: 124, desc: 'Rich dark chocolate sponge, ganache filling, velvety buttercream.', badge: 'bestseller', tags: ['nut-free'] },
  { id: 2,  name: 'Classic Vanilla Gâteau',  cat: 'cakes',    emoji: '🍰', img: 'images/cake_vanilla.webp',       price: 38.00, rating: 4.8, reviews: 87,  desc: 'Light vanilla sponge layered with Madagascar vanilla bean cream.', badge: 'new', tags: [] },
  { id: 3,  name: 'Red Velvet Delight',      cat: 'cakes',    emoji: '🎂', img: 'images/cupcake_vanilla.webp',    price: 44.00, rating: 4.9, reviews: 62,  desc: 'Crimson sponge with cream cheese frosting and white chocolate.', badge: 'hot', tags: ['nut-free'] },
  { id: 4,  name: 'Lemon Drizzle Tart',      cat: 'cakes',    emoji: '🍋', img: 'images/lemon-drizzle-bakewell-tart.webp',         price: 32.00, rating: 4.7, reviews: 49,  desc: 'Buttery pastry shell, lemon curd, toasted meringue peaks.', badge: null, tags: ['nut-free'] },
  // Breads
  { id: 5,  name: 'Country Sourdough',       cat: 'breads',   emoji: '🍞', img: 'images/bread_sourdough.webp',    price: 9.50,  rating: 5.0, reviews: 215, desc: '48-hour cold ferment, open crumb, crackling crust.', badge: 'bestseller', tags: ['vegan'] },
  { id: 6,  name: 'Classic Baguette',        cat: 'breads',   emoji: '🥖', img: 'images/bread_baguette.webp',     price: 4.00,  rating: 4.9, reviews: 183, desc: 'Traditional French baguette baked twice daily — crisp outside, chewy inside.', badge: null, tags: ['vegan', 'nut-free'] },
  { id: 7,  name: 'Seeded Wholemeal Loaf',   cat: 'breads',   emoji: '🍞', img: 'images/bread_sourdough.webp',    price: 7.50,  rating: 4.7, reviews: 74,  desc: 'Sunflower, pumpkin and sesame seeds in a dense, nutty loaf.', badge: null, tags: ['vegan'] },
  { id: 8,  name: 'Rosemary Focaccia',       cat: 'breads',   emoji: '🫓', img: 'images/cake_red.webp',           price: 8.00,  rating: 4.8, reviews: 91,  desc: 'Extra virgin olive oil, sea salt flakes and fresh rosemary.', badge: 'new', tags: ['vegan', 'nut-free'] },
  // Pastries
  { id: 9,  name: 'Butter Croissant',        cat: 'pastries', emoji: '🥐', img: 'images/pastry_croissant.webp',   price: 4.50,  rating: 5.0, reviews: 302, desc: 'Made with AOP Charentes-Poitou butter, 72 laminated layers.', badge: 'bestseller', tags: [] },
  { id: 10, name: 'Chocolate Éclair',        cat: 'pastries', emoji: '🍫', img: 'images/pastry_eclair.webp',      price: 5.50,  rating: 4.9, reviews: 166, desc: 'Choux pastry, crème pâtissière, glossy dark chocolate glaze.', badge: 'hot', tags: ['nut-free'] },
  { id: 11, name: 'Raspberry Danish',        cat: 'pastries', emoji: '🌸', img: 'images/cake_vanilla.webp',       price: 5.00,  rating: 4.8, reviews: 138, desc: 'Flaky Danish dough, vanilla cream, fresh raspberry compote.', badge: null, tags: [] },
  { id: 12, name: 'Mille-Feuille',           cat: 'pastries', emoji: '🧇', img: 'images/pastry_millefeuille.webp',price: 6.50,  rating: 4.9, reviews: 88,  desc: 'Three layers of caramelised puff pastry and diplomat cream.', badge: 'new', tags: [] },
  // Cookies
  { id: 13, name: 'Triple Choc Cookie',      cat: 'cookies',  emoji: '🍪', img: 'images/cookie_choc.webp',        price: 3.50,  rating: 4.9, reviews: 197, desc: 'Dark, milk and white chocolate in a thick, fudgy cookie.', badge: 'bestseller', tags: ['nut-free'] },
  { id: 14, name: 'Oat & Raisin Cookie',     cat: 'cookies',  emoji: '🍪', img: 'images/cookie_oat.webp',         price: 3.00,  rating: 4.6, reviews: 83,  desc: 'Rolled oats, plump raisins, cinnamon and brown butter.', badge: null, tags: ['nut-free'] },
  { id: 15, name: 'Iced Sugar Cookie',       cat: 'cookies',  emoji: '🍭', img: 'images/cookie_sugar.webp',       price: 3.50,  rating: 4.7, reviews: 114, desc: 'Hand-decorated with royal icing. Perfect for gifting.', badge: 'new', tags: ['nut-free'] },
  // Cupcakes
  { id: 16, name: 'Vanilla Dream Cupcake',   cat: 'cupcakes', emoji: '🧁', img: 'images/pastry_millefeuille.webp',price: 4.50,  rating: 4.8, reviews: 109, desc: 'Fluffy vanilla sponge with swirled Swiss meringue buttercream.', badge: null, tags: ['nut-free'] },
  { id: 17, name: 'Salted Caramel Cupcake',  cat: 'cupcakes', emoji: '🧁', img: 'images/pastry_eclair.webp',      price: 5.00,  rating: 4.9, reviews: 142, desc: 'Chocolate sponge, caramel core, salted caramel buttercream.', badge: 'hot', tags: ['nut-free'] },
  { id: 18, name: 'Blueberry Muffin',        cat: 'cupcakes', emoji: '🫐', img: 'images/muffin_blueberry.webp',   price: 3.80,  rating: 4.6, reviews: 66,  desc: 'Bursting with fresh blueberries, lemon zest and streusel top.', badge: null, tags: ['nut-free'] },
  // Extras
  { id: 19, name: 'Glazed Doughnut',         cat: 'pastries', emoji: '🍩', img: 'images/delicious-glazed-donut-on-stone-plate-kitchen-background-copyspace-for-text-free-photo.webp',       price: 3.50,  rating: 4.7, reviews: 78,  desc: 'Yeast-raised ring donut with pink strawberry glaze and sprinkles.', badge: null, tags: ['nut-free'] },
  { id: 20, name: 'Dark Chocolate Brownie',  cat: 'cookies',  emoji: '🟫', img: 'images/brownie.webp',            price: 4.00,  rating: 5.0, reviews: 231, desc: 'Fudgy, dense and intensely chocolatey — best served warm.', badge: 'bestseller', tags: ['nut-free', 'gf'] },
];

// ── Cart State ───────────────────────────────────────────────

let cart = JSON.parse(localStorage.getItem('lf_cart') || '[]');

function saveCart() {
  localStorage.setItem('lf_cart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  renderCart();
  updateCartCount();
  showToast(`Added "${product.name}" to cart 🛒`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
  updateCartCount();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
  updateCartCount();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ── Cart UI ──────────────────────────────────────────────────

function renderCart() {
  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartSubtotal');
  if (!itemsEl) return;

  // Clear existing items (keep the empty state element)
  Array.from(itemsEl.querySelectorAll('.cart-item')).forEach(el => el.remove());

  if (cart.length === 0) {
    emptyEl.style.display = '';
    footerEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'flex';

  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.id = product.id;
    el.innerHTML = `
      <div class="cart-item-img">
        <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none';this.parentElement.innerHTML='<span>${product.emoji}</span>'" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-price">$${(product.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" data-id="${product.id}" aria-label="Decrease">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${product.id}" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${product.id}" aria-label="Remove item">✕</button>
    `;
    itemsEl.appendChild(el);
  });

  if (totalEl) totalEl.textContent = `$${getCartTotal().toFixed(2)}`;
}

function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

// Cart sidebar open/close
function openCart()  { document.getElementById('cartSidebar')?.classList.add('open');  document.getElementById('cartOverlay')?.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { document.getElementById('cartSidebar')?.classList.remove('open'); document.getElementById('cartOverlay')?.classList.remove('open'); document.body.style.overflow = ''; }

// ── Toast Notifications ──────────────────────────────────────

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icon  = type === 'success' ? '✅' : '❌';
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
  container.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ── Product Card Renderer ─────────────────────────────────────

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function createProductCard(product) {
  const badgeMap = { new: 'badge-new', sale: 'badge-sale', hot: 'badge-hot', bestseller: 'badge-bestseller' };
  const badgeLabel = { new: 'New', sale: 'Sale', hot: '🔥 Hot', bestseller: '⭐ Best' };

  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id  = product.id;
  card.dataset.cat = product.cat;

  card.innerHTML = `
    <div class="product-img-wrap">
      ${product.badge ? `<span class="product-badge ${badgeMap[product.badge]}">${badgeLabel[product.badge]}</span>` : ''}
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.nextSibling&&(this.nextSibling.style.display='flex')" />
        <span class="product-emoji-fb" style="display:none">${product.emoji}</span>
      </div>
      <div class="product-actions">
        <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="product-action-btn wishlist-btn" data-id="${product.id}" title="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
    </div>
    <div class="product-body">
      <div class="product-cat">${product.cat}</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-rating">
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="product-footer">
        <div class="product-price">
          <span class="price-current">$${product.price.toFixed(2)}</span>
        </div>
        <button class="add-to-cart-btn atc-btn" data-id="${product.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Add
        </button>
      </div>
    </div>
  `;
  return card;
}

// ── Quick View Modal ─────────────────────────────────────────

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const overlay = document.getElementById('modalOverlay');
  const body    = document.getElementById('modalBody');
  if (!overlay || !body) return;

  let qty = 1;

  body.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-img">
        <img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg)" onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=font-size:5rem>${product.emoji}</span>'" />
      </div>
      <div class="modal-product-details">
        <div class="product-cat" style="margin-bottom:8px">${product.cat}</div>
        <h2>${product.name}</h2>
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-count">${product.reviews} reviews</span>
        <div class="modal-price">$${product.price.toFixed(2)}</div>
        <p class="modal-desc">${product.desc}</p>
        <div class="modal-qty">
          <label>Qty:</label>
          <div class="modal-qty-controls">
            <button class="qty-btn" id="modalQtyDec">−</button>
            <span class="qty-value" id="modalQtyVal">1</span>
            <button class="qty-btn" id="modalQtyInc">+</button>
          </div>
        </div>
        <button class="btn btn-primary modal-add-btn" id="modalAddBtn">
          Add to Cart — $${product.price.toFixed(2)}
        </button>
        <div class="modal-tags">
          ${product.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const qtyVal = body.querySelector('#modalQtyVal');
  const addBtn = body.querySelector('#modalAddBtn');

  body.querySelector('#modalQtyDec').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    qtyVal.textContent = qty;
    addBtn.textContent = `Add to Cart — $${(product.price * qty).toFixed(2)}`;
  });

  body.querySelector('#modalQtyInc').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
    addBtn.textContent = `Add to Cart — $${(product.price * qty).toFixed(2)}`;
  });

  addBtn.addEventListener('click', () => {
    addToCart(productId, qty);
    closeModal();
  });
}

function closeModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Homepage — Featured Products ─────────────────────────────

function initFeaturedProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const featured = PRODUCTS.slice(0, 8);
  featured.forEach(p => grid.appendChild(createProductCard(p)));

  // Tab filtering
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.innerHTML = '';
      const subset = filter === 'all' ? PRODUCTS.slice(0, 8) : PRODUCTS.filter(p => p.cat === filter).slice(0, 8);
      if (subset.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-light);grid-column:1/-1;padding:40px 0">No items in this category yet.</p>';
        return;
      }
      subset.forEach(p => grid.appendChild(createProductCard(p)));
    });
  });
}

// ── Homepage — Best Sellers ───────────────────────────────────

function initBestSellers() {
  const grid = document.getElementById('bestsellersGrid');
  if (!grid) return;

  const top6 = PRODUCTS.filter(p => p.badge === 'bestseller' || p.reviews >= 100).slice(0, 6);
  top6.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'bestseller-card';
    card.dataset.id = product.id;
    card.innerHTML = `
      <span class="bestseller-rank">${String(i + 1).padStart(2, '0')}</span>
      <div class="bestseller-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='${product.emoji}'" />
      </div>
      <div class="bestseller-info">
        <h4>${product.name}</h4>
        <p>${renderStars(product.rating)} (${product.reviews})</p>
        <div class="bestseller-price">$${product.price.toFixed(2)}</div>
      </div>
      <button class="btn btn-primary btn-sm atc-btn" data-id="${product.id}">+ Add</button>
    `;
    grid.appendChild(card);
  });
}

// ── Shop Page ────────────────────────────────────────────────

function initShopPage() {
  const grid = document.getElementById('shopProductsGrid');
  if (!grid) return;

  const ITEMS_PER_PAGE = 8;
  let currentPage = 1;
  let currentProducts = [...PRODUCTS];
  let isFirstRender = true;

  function renderPagination(totalPages, current) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    pagination.innerHTML = '';
    if (totalPages <= 1) { pagination.style.display = 'none'; return; }
    pagination.style.display = 'flex';

    const prev = document.createElement('button');
    prev.className = 'page-btn page-btn--prev';
    prev.textContent = '← Prev';
    prev.disabled = current === 1;
    prev.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderShopGrid(currentProducts, true); } });
    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === current ? ' active' : '');
      btn.textContent = i;
      btn.addEventListener('click', () => { currentPage = i; renderShopGrid(currentProducts, true); });
      pagination.appendChild(btn);
    }

    const next = document.createElement('button');
    next.className = 'page-btn page-btn--next';
    next.textContent = 'Next →';
    next.disabled = current === totalPages;
    next.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; renderShopGrid(currentProducts, true); } });
    pagination.appendChild(next);
  }

  function renderShopGrid(products, scroll) {
    grid.innerHTML = '';
    if (products.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--text-light);grid-column:1/-1;padding:60px 0;font-size:1rem">No products match your filters. <a href="#" style="color:var(--primary);font-weight:700" id="clearFiltersLink">Clear filters</a></p>';
      document.getElementById('clearFiltersLink')?.addEventListener('click', e => { e.preventDefault(); resetFilters(); });
      renderPagination(0, 0);
      return;
    }
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    products.slice(start, start + ITEMS_PER_PAGE).forEach(p => grid.appendChild(createProductCard(p)));
    const count = document.getElementById('resultsCount');
    if (count) count.textContent = `Showing ${Math.min(start + ITEMS_PER_PAGE, products.length)} of ${products.length} product${products.length !== 1 ? 's' : ''}`;
    renderPagination(totalPages, currentPage);
    if (scroll) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyFilters() {
    currentPage = 1;
    const checkedCats   = Array.from(document.querySelectorAll('input[name="cat"]:checked')).map(i => i.value);
    const checkedDiets  = Array.from(document.querySelectorAll('input[name="diet"]:checked')).map(i => i.value);
    const checkedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map(i => parseFloat(i.value));
    const maxPrice = parseFloat(document.getElementById('priceRange')?.value || 100);
    const sort = document.getElementById('sortSelect')?.value || 'default';

    let filtered = PRODUCTS.filter(p => {
      if (!checkedCats.includes('all') && checkedCats.length && !checkedCats.includes(p.cat)) return false;
      if (checkedDiets.length && !checkedDiets.every(d => p.tags.includes(d))) return false;
      if (p.price > maxPrice) return false;
      if (checkedRatings.length && p.rating < Math.min(...checkedRatings)) return false;
      return true;
    });

    if (sort === 'price-low')  filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'rating')     filtered.sort((a, b) => b.rating - a.rating);
    if (sort === 'newest')     filtered.sort((a, b) => b.id - a.id);

    currentProducts = filtered;
    renderShopGrid(filtered, false);
  }

  function resetFilters() {
    document.querySelectorAll('input[name="cat"]').forEach((el, i) => el.checked = i === 0);
    document.querySelectorAll('input[name="diet"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[name="rating"]').forEach(el => el.checked = false);
    const range = document.getElementById('priceRange');
    if (range) { range.value = 100; document.getElementById('priceValue').textContent = '$100'; }
    currentPage = 1;
    applyFilters();
  }

  // "All Items" mutual exclusion with other categories
  const allCatEl = document.querySelector('input[name="cat"][value="all"]');
  document.querySelectorAll('input[name="cat"]').forEach(el => {
    el.addEventListener('change', () => {
      if (el.value === 'all' && el.checked) {
        document.querySelectorAll('input[name="cat"]').forEach(c => { if (c !== el) c.checked = false; });
      } else if (el.value !== 'all' && el.checked && allCatEl) {
        allCatEl.checked = false;
      }
    });
  });

  // URL params: search and cat
  const params = new URLSearchParams(window.location.search);
  const urlCat    = params.get('cat');
  const urlSearch = params.get('search');

  if (urlSearch) {
    const q = urlSearch.toLowerCase();
    const toolbar = document.querySelector('.shop-toolbar');
    if (toolbar) {
      const note = document.createElement('p');
      note.style.cssText = 'font-size:0.9rem;color:var(--text-mid);margin-bottom:16px;';
      note.innerHTML = `Search results for "<strong>${urlSearch}</strong>" — <a href="shop.html" style="color:var(--primary);font-weight:700">Clear search</a>`;
      toolbar.after(note);
    }
    currentProducts = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    );
    const count = document.getElementById('resultsCount');
    if (count) count.textContent = `Found ${currentProducts.length} result${currentProducts.length !== 1 ? 's' : ''} for "${urlSearch}"`;
    renderShopGrid(currentProducts, false);
  } else {
    if (urlCat && urlCat !== 'all') {
      const catEl = document.querySelector(`input[name="cat"][value="${urlCat}"]`);
      if (catEl) {
        document.querySelectorAll('input[name="cat"]').forEach(el => el.checked = false);
        catEl.checked = true;
      }
    }
    applyFilters();
  }

  // Price slider
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', () => { priceValue.textContent = `$${priceRange.value}`; });
  }

  // Sort applies immediately
  document.getElementById('sortSelect')?.addEventListener('change', applyFilters);

  // Apply / Clear buttons
  document.getElementById('applyFiltersBtn')?.addEventListener('click', applyFilters);
  document.getElementById('clearFiltersBtn')?.addEventListener('click', resetFilters);
  document.getElementById('filtersClear')?.addEventListener('click', resetFilters);

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      grid.classList.toggle('products-grid--list', btn.dataset.view === 'list');
    });
  });

  // Filter sidebar mobile toggle
  document.getElementById('filterToggle')?.addEventListener('click', () => {
    document.getElementById('filtersSidebar')?.classList.toggle('open');
  });
}

// ── Header Scroll Behaviour ──────────────────────────────────

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    lastY = y;
  }, { passive: true });
}

// ── Hamburger Menu ───────────────────────────────────────────

function initMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Mobile: toggle the Categories sub-menu instead of following href
  const dropdownParent  = nav.querySelector('.nav-dropdown');
  const dropdownTrigger = dropdownParent?.querySelector(':scope > .nav-link');
  const dropdownMenu    = dropdownParent?.querySelector('.dropdown-menu');

  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.classList.toggle('mobile-open');
      }
    });
  }

  // Close nav on regular nav-link click (skip the dropdown trigger)
  nav.querySelectorAll('.nav-link').forEach(link => {
    if (link === dropdownTrigger) return;
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      dropdownMenu?.classList.remove('mobile-open');
    });
  });

  // Close nav when a dropdown item is chosen
  nav.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      dropdownMenu?.classList.remove('mobile-open');
    });
  });
}

// ── Search ───────────────────────────────────────────────────

function initSearch() {
  document.querySelectorAll('#searchToggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const bar = document.getElementById('searchBar');
      if (!bar) return;
      const isOpen = bar.classList.toggle('open');
      if (isOpen) setTimeout(() => document.getElementById('searchInput')?.focus(), 50);
    });
  });

  function performSearch() {
    const input = document.getElementById('searchInput');
    const query = (input?.value || '').trim();
    if (!query) {
      showToast('Please enter a search term.', 'error');
      return;
    }
    window.location.href = 'shop.html?search=' + encodeURIComponent(query);
  }

  document.querySelectorAll('.search-submit').forEach(btn => {
    btn.addEventListener('click', performSearch);
  });

  document.querySelectorAll('#searchInput').forEach(input => {
    input.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });
  });
}

// ── Announcement Bar ─────────────────────────────────────────

function initAnnouncement() {
  document.querySelector('.announcement-close')?.addEventListener('click', () => {
    const bar = document.querySelector('.announcement-bar');
    if (bar) bar.style.display = 'none';
  });
}

// ── Newsletter ───────────────────────────────────────────────

function initNewsletter() {
  document.getElementById('newsletterForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    showToast('You\'re subscribed! Welcome to Stackly. 🎉', 'success');
    if (input) input.value = '';
  });
}

// ── Delegated Event Listeners (cart + modal) ─────────────────

function initDelegatedEvents() {
  document.addEventListener('click', e => {
    // Add to cart buttons
    const atcBtn = e.target.closest('.atc-btn');
    if (atcBtn) {
      const id = parseInt(atcBtn.dataset.id);
      addToCart(id);
      atcBtn.classList.add('added');
      setTimeout(() => atcBtn.classList.remove('added'), 1200);
      return;
    }

    // Quick view buttons
    const qvBtn = e.target.closest('.quick-view-btn');
    if (qvBtn) {
      openQuickView(parseInt(qvBtn.dataset.id));
      return;
    }

    // Wishlist buttons
    const wlBtn = e.target.closest('.wishlist-btn');
    if (wlBtn) {
      wlBtn.querySelector('svg')?.setAttribute('fill', 'var(--accent)');
      showToast('Added to wishlist ❤️', 'success');
      return;
    }

    // Cart item qty controls
    const qtyBtn = e.target.closest('.qty-btn[data-action]');
    if (qtyBtn) {
      const id    = parseInt(qtyBtn.dataset.id);
      const delta = qtyBtn.dataset.action === 'inc' ? 1 : -1;
      updateQty(id, delta);
      return;
    }

    // Cart item remove
    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn) {
      removeFromCart(parseInt(removeBtn.dataset.id));
      return;
    }

    // Best seller card click → quick view
    const bsCard = e.target.closest('.bestseller-card');
    if (bsCard && !e.target.closest('.atc-btn')) {
      openQuickView(parseInt(bsCard.dataset.id));
      return;
    }
  });

  // Cart open/close
  document.querySelectorAll('#cartToggle').forEach(btn => btn.addEventListener('click', openCart));
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  // Modal close
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCart(); closeModal(); }
  });
}

// ── Intersection Observer — fade-in animations ──────────────

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card, .testimonial-card, .bestseller-card').forEach(el => {
    el.classList.add('fade-in-target');
    observer.observe(el);
  });
}

// Inline style for fade-in animations
(function injectFadeStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in-target { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .fade-in-target.visible { opacity: 1; transform: translateY(0); }
    .products-grid--list { grid-template-columns: 1fr !important; }
    .products-grid--list .product-card { display: flex; flex-direction: row; }
    .products-grid--list .product-img-wrap { width: 160px; flex-shrink: 0; aspect-ratio: unset; }
    .products-grid--list .product-body { padding: 20px 24px; }
    .cart-item-img span, .bestseller-img span, .hero-product-img span,
    .product-img span, .modal-product-img span, .promo-cake-visual { display:flex; align-items:center; justify-content:center; width:100%; height:100%; }
  `;
  document.head.appendChild(style);
})();

// ── Init ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartCount();
  initHeader();
  initMenu();
  initSearch();
  initAnnouncement();
  initNewsletter();
  initDelegatedEvents();

  const isShopPage = !!document.getElementById('shopProductsGrid');
  if (isShopPage) {
    initShopPage();
  } else {
    initFeaturedProducts();
    initBestSellers();
  }

  // Small delay to let DOM paint before observing
  setTimeout(initAnimations, 100);
});
