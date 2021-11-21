/**
 * Generate Error
 * @param {string} message - error message
 * @param {boolean} ignoreReactOverlay - toggle error will be displayed on react overlay or not when error appear
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export const genError = (message: string, ignoreReactOverlay = true): Error => {
  const error = new Error(message);
  (error as any).shouldIgnore = ignoreReactOverlay;

  return error;
};
