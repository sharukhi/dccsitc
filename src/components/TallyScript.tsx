import { useEffect } from 'react';

const TallyScript = () => {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    
    document.body.appendChild(script);

    // Trigger load for existing iframes
    loadEmbeds();

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default TallyScript;