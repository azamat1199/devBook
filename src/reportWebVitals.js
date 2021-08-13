import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const reportWebVitals = (onPerfEnrty) => {
  if (onPerfEnrty && onPerfEnrty instanceof Function) {
    import("web-vitals").then((getCLS, getFID, getLCP, getTTFB) => {
      getLCP(onPerfEnrty);
      getFID(onPerfEnrty);
      getFCP(onPerfEnrty);
      getLCP(onPerfEnrty);
      getTTFB(onPerfEnrty);
    });
  }
};

export default reportWebVitals;
