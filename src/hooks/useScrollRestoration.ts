import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Map to store scroll positions for different paths
const scrollPositions = new Map<string, number>();

/**
 * Hook to restore scroll position when navigating between pages
 * @param shouldRestore - Function to determine if scroll should be restored for current path
 */
export function useScrollRestoration(shouldRestore: (pathname: string) => boolean = () => false) {
  const location = useLocation();
  const { pathname } = location;
  const isMainPage = pathname === '/' || pathname === '/index';
  const scrollRef = useRef<number>(0);

  // Save scroll position when leaving a page
  useEffect(() => {
    return () => {
      // Only save scroll position for main page
      if (isMainPage) {
        scrollPositions.set(pathname, window.scrollY);
      }
    };
  }, [pathname, isMainPage]);

  // Restore scroll position when navigating to a page
  useEffect(() => {
    // If we're on the main page and should restore scroll
    if (isMainPage && shouldRestore(pathname)) {
      const savedPosition = scrollPositions.get(pathname);
      if (savedPosition !== undefined) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 0);
      }
    }
    // Removed the else clause that was scrolling to top for non-main pages
    // This allows our footer navigation to handle scrolling behavior
  }, [pathname, isMainPage, shouldRestore]);

  return scrollRef;
} 