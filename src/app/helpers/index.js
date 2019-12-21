import assets from 'app/assets';

export const getCardInputMask = value => {
  if (/^3[47]/.test(value)) {
    return '9999-999999-99999';
  }
  return '9999-9999-9999-9999';
};

export const getCardLogo = id => {
  switch (id) {
    case 'visa':
      return assets.visa;
    case 'mastercard':
      return assets.master;
    case 'american-express':
      return assets.amex;
    default:
      return null;
  }
};
