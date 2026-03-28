// =====================
// ORDINAL ENGINE
// =====================

// ---- Constants ----
const BASE = new Decimal(2).div(3);
const LN_BASE = BASE.ln();
const ZERO = new Decimal(0);
const ONE = new Decimal(1);
const THREE = new Decimal(3);


// =====================
// Core: Extract ordinal coefficient
// =====================
function getordinal(xInput) {
  const x = new Decimal(xInput);

  // Outside valid domain [0, 3)
  if (x.lt(0) || x.gte(3)) {
    return [ZERO, ONE];
  }

  const value = ONE
    .minus(x.div(THREE))
    .ln()
    .div(LN_BASE)
    .floor();

  return [value];
}


// =====================
// Formatting helpers
// =====================

// HTML version (uses <sup>)
function toOrdinalfine(coeffs) {
  const parts = [];

  for (let i = coeffs.length - 1; i >= 0; i--) {
    const k = parseInt(coeffs[i]);
    if (k === 0) continue;

    parts.push(formatTermHTML(k, i));
  }

  return parts.length ? parts.join(" + ") : "0";
}


// Plain text version (uses ^)
function toOrdinal(coeffs) {
  const parts = [];

  for (let i = coeffs.length - 1; i >= 0; i--) {
    const k = coeffs[i];
    if (k.eq(0)) continue;

    parts.push(formatTermText(k, i));
  }

  return parts.length ? parts.join(" + ") : "0";
}


// =====================
// Term formatting
// =====================

function formatTermHTML(k, power) {
  if (power === 0) return k.toString();

  if (power === 1) {
    return k === 1 ? "ω" : `${k}ω`;
  }

  return k === 1
    ? `ω<sup>${power}</sup>`
    : `${k}ω<sup>${power}</sup>`;
}


function formatTermText(k, power) {
  if (power === 0) return k.toString();

  if (power === 1) {
    return k.eq(1) ? "ω" : `${k}ω`;
  }

  return k.eq(1)
    ? `ω^${power}`
    : `${k}ω^${power}`;
}


// =====================
// Classification
// =====================

function classifyOrdinal(coeffs) {
  let nonZeroCount = 0;
  let lastNonZeroIndex = -1;

  for (let i = 0; i < coeffs.length; i++) {
    if (!coeffs[i].eq(0)) {
      nonZeroCount++;
      lastNonZeroIndex = i;
    }
  }

  // ---- Classification rules ----
  if (nonZeroCount === 0) return "cyan"; // zero
  if (nonZeroCount === 1 && lastNonZeroIndex !== 0) return "yellow"; // pure ω^k
  if (!coeffs[0].eq(0)) return "white"; // has constant term

  return "orange"; // general case
}
