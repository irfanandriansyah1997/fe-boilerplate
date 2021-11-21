/**
 * Preload Image
 * @param {string} src - source url image
 * @returns {Promise<string>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export const preloadImage = (src: string): Promise<string> =>
  new Promise<string>((resolve) => {
    try {
      const img = document.createElement(`img`);
      img.src = src;

      img.onload = () => {
        resolve(src);
      };
    } catch (e) {
      resolve(`${process.env.REACT_APP_FALLBACK_POKEMON_URL}`);
    }
  });

preloadImage(`${process.env.REACT_APP_FALLBACK_POKEMON_URL}`);
