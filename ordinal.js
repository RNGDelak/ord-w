// =====================
// ORDINAL ENGINE
// =====================


function getordinal(xInput) {

    let x = new Decimal(xInput);

    // outside domain
    if (x.lt(0) || x.gte(3)) return [new Decimal(0),new Decimal(1)];

    const base = new Decimal(2).div(3);

    const value = new Decimal(1)
        .minus(x.div(3))
        .ln()
        .div(base.ln())
        .floor();

    // coefficient form
    return [value.sub(new Decimal(1))]; //i intentionally subtracting 1 so that the number zero exist
}
function toOrdinalfine(coeff) {
    let parts = [];

    for (let i = coeff.length - 1; i >= 0; i--) {
const k = parseInt(coeff[i]);

if (k !== 0) {
    if (i === 0) {
parts.push(k.toString());
    }
    else if (i === 1) {
parts.push(k === 1 ? "ω" : k + "ω");
    }
    else {
parts.push(
    k === 1
? "ω<sup>" + i + "</sup>"
: k + "ω<sup>" + i + "</sup>"
);
    }
}
    }

    return parts.length ? parts.join(" + ") : "0";
}

function toOrdinal(coeff) {
    let parts = [];
    for (let i = coeff.length - 1; i >= 0; i--) {
const k = coeff[i];
if (!k.eq(0)) {
    if (i === 0) parts.push(k.toString());
    else if (i === 1) parts.push(k.eq(1) ? "ω" : k + "ω");
    else parts.push(k.eq(1) ? "ω^" + i : k + "ω^" + i);
}
    }
    return parts.length ? parts.join(" + ") : "0";
}

function classifyOrdinal(coeff) {
    let nonZeroCount = 0;
    let nonZeroIndex = -1;

    for (let i = 0; i < coeff.length; i++) {
        if (!coeff[i].eq(0)) {
            nonZeroCount++;
            nonZeroIndex = i;
        }
    }

    let color;

    if (nonZeroCount === 0) {
        color = "cyan"; // zero ordinal
    } else if (nonZeroCount === 1 && nonZeroIndex !== 0) {
        color = "yellow"; // pure omega power
    } else if (!coeff[0].eq(0)) {
        color = "white"; // has constant term
    } else {
        color = "orange"; // general ordinal without constant
    }

    return color;
}
