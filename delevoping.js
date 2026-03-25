//encode numbers into heuristic "folder" system. most input result in infinite expansion, never mind
function encode(x) {
  const result = [];

  const ONE = new Decimal(1);
  const THREE = new Decimal(3);
  const BASE = new Decimal(2).div(3);
  const LN_BASE = BASE.ln(); // cache this once

  x = new Decimal(x);

  for (let i = 0; i < Decimal.precision; i++) {
    if (x.lte(0) || x.gte(1)) break;

    const oneMinusX = ONE.minus(x);

    // ai = floor(log_{2/3}(1 - x))
    const aiDec = oneMinusX.ln().div(LN_BASE).floor();
    const ai = aiDec.toNumber(); // keep JS number for speed
    result.push(ai);

    // compute power ONCE
    const basePow = BASE.pow(ai);

    // left = 1 - base^ai
    const left = ONE.minus(basePow);

    // denom = base^ai / 3
    const denom = basePow.div(THREE);

    // rescale
    x = x.minus(left).div(denom);
  }

  return result;
}
