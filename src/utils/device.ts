const screenSize = {
  mobile: '639px',
  tablet: '767px',
  tabletLarge: '1023px',
};

const { mobile, tablet, tabletLarge } = screenSize;

const device = {
  mobile: `(max-width: ${mobile})`,
  tabletMedium: `(max-width: ${tablet})`,
  tabletLarge: `(max-width: ${tabletLarge})`,
  desktop: `(min-width: ${tabletLarge})`,
};

export default device;
