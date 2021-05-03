import { ReportHandler } from 'web-vitals';

/**
 * Report Web Vitals
 * @param {ReportHandler} onPerfEntry - on performance entry handler
 * @returns {void}
 */
export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import(`web-vitals`).then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
