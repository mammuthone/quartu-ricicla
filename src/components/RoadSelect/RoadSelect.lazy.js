import React, { lazy, Suspense } from 'react';

const LazyRoadSelect = lazy(() => import('./RoadSelect'));

const RoadSelect = props => (
  <Suspense fallback={null}>
    <LazyRoadSelect {...props} />
  </Suspense>
);

export default RoadSelect;
