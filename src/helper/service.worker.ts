/**
 * Register Service Worker
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.24
 */
export const registerServiceWorker = (): void => {
  if (process.env.NODE_ENV !== `development`) {
    if (typeof navigator !== `undefined` && `serviceWorker` in navigator) {
      navigator.serviceWorker
        .register(`/service-worker.js`, {
          scope: `/`
        })
        .then((reg) => {
          reg.update();
        });
    }
  }
};
