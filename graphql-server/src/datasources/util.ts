import toSnakeCase from "lodash/snakeCase";
import toCamelCase from "lodash/camelCase";

function isArray(a: unknown): a is unknown[] {
  return Array.isArray(a);
}

function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null && x !== undefined && !isArray(x);
}

/**
 * Recursively modify keys of an object (or array of objects)
 * by calling function transformer on each key.
 * @param transformer
 * @param x
 */
function transformKeys(transformer: (key: string) => string, x: unknown) {
  if (typeof x === "string") {
    return transformer(x);
  }
  if (isArray(x)) {
    const recurse = (item: unknown) => transformKeys(transformer, item);
    return x.map(recurse);
  }
  if (isObject(x)) {
    return Object.entries(x).reduce((out: Record<string, unknown>, [key, value]) => {
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
export function keysToCamel(x: unknown) {
  return transformKeys(toCamelCase, x);
}

/**
 * Recursively modify keys of an object (or array of objects) from camelCase to snake_case.
 * @param x
 */
export function keysToSnake(x: unknown) {
  return transformKeys(toSnakeCase, x);
}
