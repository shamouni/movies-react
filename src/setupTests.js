// src/setupTests.js
import "@testing-library/jest-dom";

// Polyfill for TextEncoder/TextDecoder in Node (for Jest)
if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
