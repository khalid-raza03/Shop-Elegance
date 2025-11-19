// Performance optimization script for LCP improvement

// Preload critical images after page load
window.addEventListener('load', function() {
  // Preload next section images
  const imagesToPreload = [
    './public/assets/images/stats-bg.svg',
    './public/assets/images/icon_shop.svg',
    './public/assets/images/Services.svg'
  ];
  
  imagesToPreload.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
});

// Optimize font loading
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.body.classList.add('fonts-loaded');
  });
}

// Intersection Observer for lazy loading optimization
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all lazy images
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Critical resource loading optimization
function loadCriticalResources() {
  // Load non-critical CSS after page load
  const nonCriticalCSS = [
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    'https://cdn.jsdelivr.net/npm/kursor/dist/kursor.css'
  ];
  
  nonCriticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() { this.media = 'all'; };
    document.head.appendChild(link);
  });
}

// Load after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCriticalResources);
} else {
  loadCriticalResources();
}