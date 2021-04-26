export function toCamelCase(s: string): string {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

export function toSnakeCase(s: string): string {
  return s.replace(/.([A-Z])/g, ($1) => {
    return `_${$1}`
  }).toLowerCase();
}

function isArray (a: any) {
  return Array.isArray(a);
};

function isObject(x: any) {
  return typeof x === 'object' && x !== null && x !== undefined && !isArray(x);
}

/**
 * Recursively modify keys of an object (or array of objects)
 * by calling function transformer on each key.
 * @param transformer 
 * @param x 
 */
function transformKeys(transformer: (key: string) => string, x: any) {
  if (typeof x === 'string') {
    return transformer(x);
  }
  if (isArray(x)) {
    const recurse = (item: any) => transformKeys(transformer, item);
    return x.map(recurse);
  }
  if (isObject(x)) {
    return Object.entries(x).reduce((out: any, [key, value]) => {
      out[transformer(key)] = value;
      return out;
    }, {});
  }
  return x;
}

/**
 * Recursively modify keys of an object (or array of objects) from snake_case to camelCase.
 * @param x 
 */
export function keysToCamel(x: any) {
  return transformKeys(toCamelCase, x);
}

/**
 * Recursively modify keys of an object (or array of objects) from camelCase to snake_case.
 * @param x 
 */
export function keysToSnake(x: any) {
  return transformKeys(toSnakeCase, x);
}