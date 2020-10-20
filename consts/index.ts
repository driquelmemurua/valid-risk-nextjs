export const COLORS = {
  white: '#F8F8F8',
  gray: '#707070',
  black: '#242B3D',
  primary: {
    default: '#996AF1',
    dark: '#360660',
    light: '#CDB5F8'
  },
  firstComplementary: {
    default: '#56A758',
    dark: '#4B5F61',
    light: '#5FB861'
  },
  secondComplementary: {
    default: '#FFA500',
    dark: '#E6AD7C',
    light: '#FFAD17'
  },
}

export const SUPPORT_LOGIN = (process.env.API_URI || 'http://localhost:1337') + '/admin';

export const PAGES_IDS = {
  '/': 1
};

export const MEDIA_QUERIES = {
  phone: '768px',
};
