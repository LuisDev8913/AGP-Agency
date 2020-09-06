import { icons } from 'feather-icons';

const options = { 'stroke-width': 3 };

export const menu = icons.menu.toSvg({
  'stroke-width': 3,
  height: 30,
  width: 30,
});
export const x = icons.x.toSvg({ 'stroke-width': 3, height: 30, width: 30 });
export const mail = icons.mail.toSvg(options);
export const phone = icons.phone.toSvg(options);

export const instagram = icons.instagram.toSvg(options);
export const linkedin = icons.linkedin.toSvg(options);
export const facebook = icons.facebook.toSvg(options);
export const dribbble = `<img src=${require('./svg/dribbble-icon.svg')} />`;
