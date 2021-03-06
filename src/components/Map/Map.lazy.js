import React, { lazy, Suspense } from 'react';

const LazyMap = lazy(() => import('./Map'));

const Map = props => (
  <Suspense fallback={null}>
    <LazyMap {...props} />
  </Suspense>
);

export default Map;
