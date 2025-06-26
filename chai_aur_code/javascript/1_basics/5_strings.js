// This file contains string constants used in the application.
const strings = {
  // General messages
  welcome: "Welcome to the application!",
  goodbye: "Thank you for using our application. Goodbye!",
  error: "An error has occurred. Please try again later.",
  loading: "Loading, please wait...",
  success: "Operation completed successfully!",
  noData: "No data available.",
  invalidInput: "Invalid input. Please check your data and try again.",
  notFound: "The requested resource was not found.",
  unauthorized: "You are not authorized to perform this action.",
  forbidden: "Access to this resource is forbidden.",
  serverError: "Internal server error. Please try again later.",
  networkError: "Network error. Please check your internet connection.",
};

// Export the strings object for use in other modules
export default strings;
// Usage example:
// import strings from './strings.js';
// console.log(strings.welcome); // Output: "Welcome to the application!"
// console.log(strings.error); // Output: "An error has occurred. Please try again later."
// console.log(strings.loading); // Output: "Loading, please wait..."

// String manipulation functions
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function toLowerCase(string) {
  return string.toLowerCase();
}
export function toUpperCase(string) {
  return string.toUpperCase();
}
export function trim(string) {
  return string.trim();
}
export function split(string, separator) {
  return string.split(separator);
}
export function join(array, separator) {
  return array.join(separator);
}
export function replace(string, searchValue, newValue) {
  return string.replace(searchValue, newValue);
}
export function includes(string, searchValue) {
  return string.includes(searchValue);
}

export function startsWith(string, searchValue) {
  return string.startsWith(searchValue);
}
export function endsWith(string, searchValue) {
  return string.endsWith(searchValue);
}
export function indexOf(string, searchValue) {
  return string.indexOf(searchValue);
}
export function lastIndexOf(string, searchValue) {
  return string.lastIndexOf(searchValue);
}
export function substring(string, start, end) {
  return string.substring(start, end);
}
export function slice(string, start, end) {
  return string.slice(start, end);
}
export function repeat(string, count) {
  return string.repeat(count);
}
export function padStart(string, targetLength, padString = " ") {
  return string.padStart(targetLength, padString);
}
export function padEnd(string, targetLength, padString = " ") {
  return string.padEnd(targetLength, padString);
}
export function match(string, regex) {
  return string.match(regex);
}
export function search(string, regex) {
  return string.search(regex);
}
export function localeCompare(string1, string2) {
  return string1.localeCompare(string2);
}
export function toLocaleLowerCase(string, locale) {
  return string.toLocaleLowerCase(locale);
}
export function toLocaleUpperCase(string, locale) {
  return string.toLocaleUpperCase(locale);
}
export function normalize(string, form = "NFC") {
  return string.normalize(form);
}
export function fromCharCode(...codes) {
  return String.fromCharCode(...codes);
}
export function charAt(string, index) {
  return string.charAt(index);
}
export function charCodeAt(string, index) {
  return string.charCodeAt(index);
}
export function codePointAt(string, index) {
  return string.codePointAt(index);
}
export function anchor(string, name) {
  return `<a name="${name}">${string}</a>`;
}
export function big(string) {
  return `<big>${string}</big>`;
}
export function blink(string) {
  return `<blink>${string}</blink>`;
}
export function bold(string) {
  return `<b>${string}</b>`;
}
export function fixed(string) {
  return `<tt>${string}</tt>`;
}
export function fontcolor(string, color) {
  return `<font color="${color}">${string}</font>`;
}
export function fontsize(string, size) {
  return `<font size="${size}">${string}</font>`;
}
export function italics(string) {
  return `<i>${string}</i>`;
}

export function link(string, url) {
  return `<a href="${url}">${string}</a>`;
}
export function small(string) {
  return `<small>${string}</small>`;
}
export function strike(string) {
  return `<strike>${string}</strike>`;
}
export function sub(string) {
  return `<sub>${string}</sub>`;
}
export function sup(string) {
  return `<sup>${string}</sup>`;
}

export function template(strings, ...values) {
  return strings.reduce(
    (result, str, i) => result + str + (values[i] || ""),
    ""
  );
}
export function escapeHTML(string) {
  return string
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function unescapeHTML(string) {
  return string
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters for regex
}
export function unescapeRegExp(string) {
  return string.replace(/\\([.*+?^${}()|[\]\\])/g, "$1"); // Unescape special characters for regex
}
export function toString(value) {
  return String(value);
}
export function fromString(string) {
  return string; // No conversion needed, as string is already a string
}
export function isString(value) {
  return typeof value === "string";
}
export function isEmpty(string) {
  return string.length === 0;
}
