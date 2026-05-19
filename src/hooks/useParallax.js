import { useParallax } from 'react-scroll-parallax';

/**
 * A simple wrapper hook for react-scroll-parallax's useParallax.
 * This allows for consistent usage and satisfies the project structure requirement.
 *
 * @param {object} options - Options to pass to the useParallax hook.
 * @returns {object} - The ref and style object from useParallax.
 */
export const useParallaxEffect = (options) => {
  return useParallax(options);
};
