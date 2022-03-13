import React, { lazy, Suspense } from 'react';

const LazySectorSelected = lazy(() => import('./SectorSelected'));

const SectorSelected = props => (
  <Suspense fallback={null}>
    <LazySectorSelected {...props} />
  </Suspense>
);

export default SectorSelected;
