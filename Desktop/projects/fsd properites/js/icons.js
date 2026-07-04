/* ============================================
   FSD PROPERTIES — SVG ICONS
   Custom SVG icon system (replaces Font Awesome)
   ============================================ */

const ICONS = {
  // Navigation & UI
  home: '<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"/>',
  search: '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M6 18L18 6M6 6l12 12"/>',
  chevronRight: '<path d="M9 5l7 7-7 7"/>',
  chevronLeft: '<path d="M15 19l-7-7 7-7"/>',
  chevronDown: '<path d="M19 9l-7 7-7-7"/>',
  arrowRight: '<path d="M17 8l4 4m0 0l-4 4m4-4H3"/>',
  arrowLeft: '<path d="M7 16l-4-4m0 0l4-4m-4 4h18"/>',
  filter: '<path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>',
  grid: '<path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>',
  list: '<path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>',
  plus: '<path d="M12 4v16m8-8H4"/>',
  edit: '<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>',
  trash: '<path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>',
  eye: '<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>',

  // Property
  bed: '<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/>',
  bath: '<path d="M4 12h16a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h2a2 2 0 012 2v7"/>',
  ruler: '<path d="M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1zM9 10h2m-2 4h2m4-8h0m0 4h0m0 4h0"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  couch: '<path d="M5 11a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4zM3 11V8a2 2 0 012-2h14a2 2 0 012 2v3M5 17v2m14-2v2"/>',
  parking: '<path d="M7 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm3 8V8m4 4V8"/>',
  calendar: '<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  car: '<path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M7 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"/>',
  building: '<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  store: '<path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4M5 21V10.7M19 21V10.7"/>',
  warehouse: '<path d="M3 21h18M3 21V8l9-5 9 5v13M9 21v-6h6v6"/>',
  farm: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-4a3 3 0 016 0v4M9 11h.01M15 11h.01"/>',
  mapPin: '<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',

  // Communication
  phone: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>',
  email: '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  message: '<path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',

  // Features
  check: '<path d="M5 13l4 4L19 7"/>',
  checkCircle: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  xCircle: '<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  heart: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  star: '<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>',
  shield: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  phone: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>',
  heart: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  heartOutline: '<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>',
  searchLarge: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  lock: '<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
  user: '<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  users: '<path d="M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>',
  briefcase: '<path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  key: '<path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>',
  globe: '<path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>',
  bolt: '<path d="M13 10V3L4 14h7v7l9-11h-7z"/>',
  shieldCheck: '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  phoneAlt: '<path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  mobile: '<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>',

  // Media
  image: '<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
  camera: '<path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>',

  // Social
  facebook: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>',
  instagram: '<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5"/>',
  twitter: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>',
  youtube: '<path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/>',

  // Misc
  link: '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',
  share: '<path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>',
  logout: '<path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>',
  userPlus: '<path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>',
  dollar: '<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  clock: '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  info: '<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  warning: '<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>',
  refresh: '<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
  externalLink: '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>',
  scissors: '<path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L4.939 4.939m7.061 7.061l-2.879-2.879M12 12l2.879-2.879"/>',
};

/**
 * Generate an SVG icon by name
 * @param {string} name - Icon name from ICONS object
 * @param {string} size - CSS size (default: '1em')
 * @param {string} color - Stroke color (default: 'currentColor')
 * @returns {string} SVG markup string
 */
function icon(name, size, color) {
  size = size || '1em';
  color = color || 'currentColor';
  var paths = ICONS[name] || ICONS['info'];
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon svg-icon-' + name + '">' + paths + '</svg>';
}

/**
 * Create icon element for direct DOM insertion
 * @param {string} name - Icon name
 * @param {string} size - CSS size
 * @param {string} color - Stroke color
 * @returns {HTMLElement} SVG element
 */
function createIconElement(name, size, color) {
  var temp = document.createElement('div');
  temp.innerHTML = icon(name, size, color);
  return temp.firstChild;
}

/* ============================================
   CATEGORY ILLUSTRATION SVGs
   Colorful detailed icons for property types
   ============================================ */

const CATEGORY_ICONS = {
  house: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <rect x="16" y="30" width="32" height="22" rx="2" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <path d="M12 32L32 14L52 32" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 32L32 14L52 32V50H12V32Z" fill="#dc2626"/>
    <path d="M12 32L32 14L52 32" fill="#ef4444"/>
    <rect x="26" y="38" width="12" height="14" rx="1" fill="#92400e" stroke="#1e293b" stroke-width="1.5"/>
    <circle cx="35" cy="45" r="1" fill="#fbbf24"/>
    <rect x="18" y="34" width="6" height="6" rx="1" fill="#7dd3fc" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="40" y="34" width="6" height="6" rx="1" fill="#7dd3fc" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="21" y1="34" x2="21" y2="40" stroke="#1e293b" stroke-width="1"/>
    <line x1="43" y1="34" x2="43" y2="40" stroke="#1e293b" stroke-width="1"/>
    <rect x="30" y="10" width="4" height="8" rx="1" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
    <path d="M30 14H26" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  apartment: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <rect x="18" y="12" width="28" height="40" rx="2" fill="#3b82f6" stroke="#1e293b" stroke-width="2"/>
    <rect x="22" y="16" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="30" y="16" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="38" y="16" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="22" y="24" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="30" y="24" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="38" y="24" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="22" y="32" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="30" y="32" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="38" y="32" width="6" height="5" rx="1" fill="#bfdbfe" stroke="#1e293b" stroke-width="1"/>
    <rect x="28" y="42" width="8" height="10" rx="1" fill="#92400e" stroke="#1e293b" stroke-width="1.5"/>
    <circle cx="34" cy="47" r="0.8" fill="#fbbf24"/>
    <rect x="14" y="20" width="4" height="32" rx="1" fill="#60a5fa" stroke="#1e293b" stroke-width="1.5"/>
  </svg>`,

  plot: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <path d="M16 46L32 14L48 46H16Z" fill="#fbbf24" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
    <path d="M16 46L32 14L48 46" fill="#f59e0b"/>
    <line x1="24" y1="30" x2="40" y2="30" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3 2"/>
    <line x1="20" y1="38" x2="44" y2="38" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3 2"/>
    <circle cx="32" cy="22" r="2" fill="#1e293b"/>
    <line x1="32" y1="18" x2="32" y2="14" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="28" y1="14" x2="36" y2="14" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
    <text x="32" y="56" text-anchor="middle" font-size="7" font-weight="bold" fill="#1e293b" font-family="sans-serif">LAND</text>
  </svg>`,

  commercial: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <rect x="12" y="22" width="40" height="30" rx="2" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="12" y="16" width="40" height="10" rx="2" fill="#f97316" stroke="#1e293b" stroke-width="2"/>
    <text x="32" y="24" text-anchor="middle" font-size="8" font-weight="bold" fill="white" font-family="sans-serif">24</text>
    <rect x="16" y="28" width="10" height="8" rx="1" fill="#7dd3fc" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="28" y="28" width="10" height="8" rx="1" fill="#7dd3fc" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="40" y="28" width="8" height="8" rx="1" fill="#7dd3fc" stroke="#1e293b" stroke-width="1.5"/>
    <rect x="16" y="40" width="32" height="6" rx="1" fill="#e2e8f0" stroke="#1e293b" stroke-width="1"/>
    <rect x="26" y="42" width="12" height="10" rx="1" fill="#92400e" stroke="#1e293b" stroke-width="1.5"/>
    <circle cx="36" cy="47" r="0.8" fill="#fbbf24"/>
    <rect x="18" y="12" width="4" height="6" rx="1" fill="#ef4444" stroke="#1e293b" stroke-width="1"/>
    <circle cx="20" cy="11" r="2" fill="#ef4444"/>
  </svg>`,

  office: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <rect x="14" y="10" width="36" height="42" rx="2" fill="#6366f1" stroke="#1e293b" stroke-width="2"/>
    <rect x="18" y="14" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="26" y="14" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="34" y="14" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="42" y="14" width="4" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="18" y="22" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="26" y="22" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="34" y="22" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="42" y="22" width="4" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="18" y="30" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="26" y="30" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="34" y="30" width="6" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="42" y="30" width="4" height="5" rx="1" fill="#c7d2fe" stroke="#1e293b" stroke-width="1"/>
    <rect x="28" y="40" width="8" height="12" rx="1" fill="#92400e" stroke="#1e293b" stroke-width="1.5"/>
    <circle cx="34" cy="46" r="0.8" fill="#fbbf24"/>
    <rect x="30" y="4" width="4" height="8" rx="1" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
  </svg>`,

  warehouse: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="48" width="48" height="4" rx="2" fill="#4ade80"/>
    <path d="M10 48V28L32 16L54 28V48" fill="#f97316" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
    <path d="M10 48L32 36L54 48" fill="#fb923c" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
    <rect x="24" y="36" width="16" height="16" rx="1" fill="#92400e" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="24" y1="44" x2="40" y2="44" stroke="#1e293b" stroke-width="1"/>
    <line x1="32" y1="36" x2="32" y2="52" stroke="#1e293b" stroke-width="1"/>
    <rect x="46" y="20" width="6" height="28" rx="1" fill="#64748b" stroke="#1e293b" stroke-width="1.5"/>
    <ellipse cx="49" cy="16" rx="4" ry="3" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
    <ellipse cx="49" cy="12" rx="3" ry="2.5" fill="#cbd5e1" stroke="#1e293b" stroke-width="1"/>
    <ellipse cx="49" cy="9" rx="2" ry="2" fill="#e2e8f0" stroke="#1e293b" stroke-width="0.8"/>
    <rect x="14" y="42" width="6" height="6" rx="1" fill="#fbbf24" stroke="#1e293b" stroke-width="1"/>
    <rect x="14" y="34" width="6" height="6" rx="1" fill="#fbbf24" stroke="#1e293b" stroke-width="1"/>
  </svg>`
};
