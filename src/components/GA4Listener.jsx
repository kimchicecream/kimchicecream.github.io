import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GA4Listener() {
  const location = useLocation();

  useEffect(() => {
    // guard if gtag isn't loaded yet
    if (!window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}
