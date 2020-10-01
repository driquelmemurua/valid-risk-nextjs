export function arrayToSlug(array = ['']) {
  return array.reduce((string, item) => string + '/' + item , '');
}