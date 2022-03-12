import React, { lazy, Suspense } from 'react';

const LazyDaySelect = lazy(() => import('./DaySelect'));

const DaySelect = props => (
  <Suspense fallback={null}>
    <LazyDaySelect {...props} />
  </Suspense>
);

export default DaySelect;
