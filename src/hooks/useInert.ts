import { useEffect } from 'react';

/**
 * Toggle inert attribute in element, to handle MUI Dialog console warning.
 * @param isInert boolean
 */
export const useInert = (isInert: boolean): void => {
  useEffect(() => {
    const root = document.getElementById('root') as HTMLDivElement;
    if (isInert) {
      root?.setAttribute('inert', '');
    } else {
      root?.removeAttribute('inert');
    }

    return () => {
      root?.removeAttribute('inert');
    }
  }, [isInert]);
}
