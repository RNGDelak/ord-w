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

//END OF ord-ww

/*
these function help encode and decode reals into array of number and vice versa
can use element the array to choose brach index or something if you have different system
read techniques.md for more details
*/

//encode numbers into heuristic "folder" system. most input result in infinite expansion, never mind
function encode(x) {
  const result = [];

  const ONE = new Decimal(1);
  const THREE = new Decimal(3);
  const BASE = new Decimal(2).div(3);
  const LN_BASE = BASE.ln();

  x = new Decimal(x);

  for (let i = 0; i < Decimal.precision; i++) {
    if (x.lte(0) || x.gte(1)) break;

    const oneMinusX = ONE.minus(x);

    // ai as Decimal
    const ai = oneMinusX.ln().div(LN_BASE).floor();
    result.push(ai); // keep as Decimal

    // use Decimal exponent
    const basePow = BASE.pow(ai);

    const left = ONE.minus(basePow);
    const denom = basePow.div(THREE);

    x = x.minus(left).div(denom);
  }

  return result;
}

//Decode function , work in reverse
function decode(arr) {
  const ONE = new Decimal(1);
  const THREE = new Decimal(3);
  const BASE = new Decimal(2).div(3);

  let x = new Decimal(0); // start from innermost

  for (let i = arr.length - 1; i >= 0; i--) {
    const ai = new Decimal(arr[i]);

    const basePow = BASE.pow(ai);
    const left = ONE.minus(basePow);
    const denom = basePow.div(THREE);

    x = x.mul(denom).plus(left);
  }

  return x;
}
