module.exports = () => {
  const mobile = 'MOBILE';
  const tablet = 'TABLET';
  const desktop = 'DESKTOP';

  const tabletSize = 768;
  const desktopSize = 1200;

  const clientWidth = document.documentElement.clientWidth;

  if (clientWidth < tabletSize) {
    return mobile;
  }
  if (clientWidth >= tabletSize && clientWidth < desktopSize) {
    return tablet;
  }
  if (clientWidth >= desktopSize) {
    return desktop;
  }
}
