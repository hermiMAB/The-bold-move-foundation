/**
 * Vercel Speed Insights Initialization
 * This script loads and initializes Vercel Speed Insights for performance tracking
 * See: https://vercel.com/docs/speed-insights/quickstart
 */
(function() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;

  // Initialize the queue for speed insights events
  function initQueue() {
    if (window.si) return;
    window.si = function() {
      window.siq = window.siq || [];
      window.siq.push(arguments);
    };
  }

  // Detect if we're in development or production
  function isDevelopment() {
    try {
      // Check common development indicators
      return window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1' ||
             window.location.hostname.includes('.local');
    } catch {
      return false;
    }
  }

  // Get the appropriate script source
  function getScriptSrc() {
    if (isDevelopment()) {
      return 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    }
    return '/_vercel/speed-insights/script.js';
  }

  // Inject Speed Insights script
  function injectSpeedInsights() {
    initQueue();

    var src = getScriptSrc();
    
    // Check if script already exists
    if (document.head.querySelector('script[src*="' + src + '"]')) {
      return;
    }

    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    
    // Add SDK name and version to the script dataset
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '2.0.0';
    
    script.onerror = function() {
      console.log(
        '[Vercel Speed Insights] Failed to load script from ' + src + 
        '. Please check if any content blockers are enabled and try again.'
      );
    };

    document.head.appendChild(script);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpeedInsights);
  } else {
    injectSpeedInsights();
  }
})();
