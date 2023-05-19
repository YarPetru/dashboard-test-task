import { useState, useLayoutEffect } from 'react';
import device from 'utils/device';

const queries = [
  `(min-width: 0px) and ${device.mobile}`,
  `(min-width: 640px) and ${device.tabletMedium}`,
  `(min-width: 768px) and ${device.tabletLarge}`,
];

const useMatchMedia = (): any => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(list =>
        list.removeEventListener('change', handler)
      );
  }, []);

  const typesOfScreen = ['isMobile', 'isTabletMedium', 'isTabletLarge'];

  return typesOfScreen.reduce(
    (acc, screen, idx) => ({
      ...acc,
      [screen]: values[idx],
    }),
    {}
  );
};

export default useMatchMedia;
