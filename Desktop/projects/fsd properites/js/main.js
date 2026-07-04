/* ============================================
   FSD PROPERTIES — MAIN JAVASCRIPT
   Shared functionality across all pages
   ============================================ */

// === SVG ICON SHORTCUTS ===
var SVG = {
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>',
  bed: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/></svg>',
  bath: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4 12h16a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h2a2 2 0 012 2v7"/></svg>',
  ruler: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1zM9 10h2m-2 4h2m4-8h0m0 4h0m0 4h0"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon" style="color: var(--success);"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" class="svg-icon"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
  starEmpty: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1" class="svg-icon"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>'
};

// === NAVBAR SCROLL ===
document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Hamburger menu
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileNavClose = document.getElementById('mobile-nav-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      mobileNav.classList.add('active');
      hamburger.classList.add('active');
      var overlay = document.getElementById('mobile-nav-overlay');
      if (overlay) overlay.classList.add('active');
    });

    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        var overlay = document.getElementById('mobile-nav-overlay');
        if (overlay) overlay.classList.remove('active');
      });
    }

    var mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    if (mobileNavOverlay) {
      mobileNavOverlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
      });
    }

    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        var overlay = document.getElementById('mobile-nav-overlay');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }

  updateSavedCount();
});

// === SAVED COUNT ===
function updateSavedCount() {
  var count = getSavedProperties().length;
  document.querySelectorAll('#saved-count').forEach(function(el) {
    el.textContent = count;
  });
}

// === TOAST NOTIFICATION ===
function showToast(message) {
  var toast = document.getElementById('toast');
  var toastMessage = document.getElementById('toast-message');
  if (!toast || !toastMessage) return;
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}

// === PROPERTY CARD COMPONENT ===
function createPropertyCard(property) {
  var agent = getAgentById(property.agentId);
  var saved = isPropertySaved(property.id);

  var purposeBadgeClass = property.purpose === 'Rent' ? 'badge-rent' : 'badge-sale';
  var purposeBadgeText = property.purpose === 'Rent' ? 'FOR RENT' : 'FOR SALE';

  var placeholderBg = 'linear-gradient(135deg, ' + property.color + ', ' + (property.color === '#c9a84c' ? '#1a1a1a' : '#c9a84c') + ')';

  var bedsHtml = '';
  if (property.bedrooms > 0) {
    bedsHtml = '<div class="property-card-detail">' + SVG.bed + ' ' + property.bedrooms + ' Beds</div>';
  }

  var bathsHtml = '';
  if (property.bathrooms > 0) {
    bathsHtml = '<div class="property-card-detail">' + SVG.bath + ' ' + property.bathrooms + ' Baths</div>';
  }

  var agentHtml = '';
  if (agent) {
    agentHtml =
      '<div class="property-card-agent-info">' +
        '<div class="property-card-agent-avatar" style="background: ' + agent.color + ';">' + agent.name.split(' ').map(function(n) { return n[0]; }).join('') + '</div>' +
        '<span class="property-card-agent-name">' + agent.name + '</span>' +
      '</div>';
  }

  var imageHtml = '';
  if (property.images && property.images.length > 0) {
    imageHtml = '<img src="' + property.images[0] + '" alt="' + property.title + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;">';
  } else {
    imageHtml = '<div class="property-placeholder" style="background: ' + placeholderBg + ';">' + SVG.image + '</div>';
  }

  return '<div class="property-card" data-id="' + property.id + '">' +
    '<div class="property-card-image">' +
      imageHtml +
      '<div class="property-card-badges">' +
        (property.featured ? '<span class="badge badge-gold">Featured</span>' : '') +
        '<span class="badge badge-dark">' + property.type + '</span>' +
        '<span class="badge ' + purposeBadgeClass + '">' + purposeBadgeText + '</span>' +
      '</div>' +
      '<button class="property-card-save ' + (saved ? 'saved' : '') + '" onclick="toggleSaveFromCard(event, ' + property.id + ')" title="Save property">' +
        SVG.heart +
      '</button>' +
    '</div>' +
    '<div class="property-card-body">' +
      '<div class="property-card-price price-shimmer">' + (property.purpose === 'Rent' ? 'PKR ' + property.priceDisplay : 'PKR ' + property.priceDisplay) + '</div>' +
      '<h3 class="property-card-title"><a href="detail.html?id=' + property.id + '">' + property.title + '</a></h3>' +
      '<div class="property-card-location">' + SVG.mapPin + ' ' + property.area + ', Faisalabad</div>' +
      '<div class="property-card-details">' +
        bedsHtml + bathsHtml +
        '<div class="property-card-detail">' + SVG.ruler + ' ' + property.size + '</div>' +
      '</div>' +
      '<div class="property-card-agent">' +
        agentHtml +
        '<a href="detail.html?id=' + property.id + '" class="property-card-view">View Details ' + SVG.arrowRight + '</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// === AGENT CARD COMPONENT ===
function createAgentCard(agent) {
  var listings = properties.filter(function(p) { return p.agentId === agent.id; }).length;

  var stars = '';
  for (var i = 0; i < 5; i++) {
    stars += (i < Math.floor(agent.rating) ? SVG.star : SVG.starEmpty);
  }

  return '<div class="agent-card">' +
    '<div class="agent-card-avatar" style="background: ' + agent.color + ';">' + agent.name.split(' ').map(function(n) { return n[0]; }).join('') + '</div>' +
    '<div class="agent-card-name">' + agent.name + (agent.verified ? ' ' + SVG.checkCircle : '') + '</div>' +
    '<div class="agent-card-specialization">' + agent.specialization + '</div>' +
    '<div class="agent-card-stats">' +
      '<div class="agent-card-stat">' + SVG.briefcase + ' ' + agent.experience + ' years</div>' +
      '<div class="agent-card-stat">' + SVG.home + ' ' + listings + ' listings</div>' +
    '</div>' +
    '<div class="agent-card-rating">' + stars + ' ' + agent.rating + ' (' + agent.reviews + ')</div>' +
    '<div class="agent-card-actions">' +
      '<a href="https://wa.me/' + agent.whatsapp + '" target="_blank" class="btn btn-whatsapp btn-sm">' + SVG.whatsapp + ' WhatsApp</a>' +
      '<a href="properties.html?agent=' + agent.id + '" class="btn btn-outline btn-sm">View Listings</a>' +
    '</div>' +
  '</div>';
}

// === SAVE/UNSAVE FROM CARD ===
function toggleSaveFromCard(event, id) {
  event.preventDefault();
  event.stopPropagation();

  if (isPropertySaved(id)) {
    unsaveProperty(id);
    showToast('Property removed from saved');
  } else {
    saveProperty(id);
    showToast('Property saved!');
  }
  updateSavedCount();

  var card = event.target.closest('.property-card');
  if (card) {
    var btn = card.querySelector('.property-card-save');
    if (isPropertySaved(id)) {
      btn.classList.add('saved');
    } else {
      btn.classList.remove('saved');
    }
  }
}

// === COUNT UP ANIMATION ===
function initCountUp() {
  var stats = document.querySelectorAll('.stat-number[data-target]');
  if (!stats.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(function(stat) {
    observer.observe(stat);
  });
}

function animateCount(element) {
  var target = parseInt(element.getAttribute('data-target'));
  var duration = 2000;
  var start = 0;
  var increment = target / (duration / 16);

  function update() {
    start += increment;
    if (start >= target) {
      element.textContent = target + '+';
      return;
    }
    element.textContent = Math.floor(start) + '+';
    requestAnimationFrame(update);
  }
  update();
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  var elements = document.querySelectorAll('.property-card, .category-card, .area-card, .agent-card, .why-card');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

// === KEYBOARD SHORTCUTS ===
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      document.getElementById('hamburger').classList.remove('active');
    }

    var lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }

    document.querySelectorAll('.modal-overlay.active').forEach(function(modal) {
      modal.classList.remove('active');
    });
  }
});

// === CLOSE MODALS ON OVERLAY CLICK ===
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
  if (e.target.id === 'lightbox') {
    e.target.classList.remove('active');
  }
});
