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
