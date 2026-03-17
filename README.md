# Transfinite Number Line (up to ω) <Using Decimal.js>

A template for building your own **transfinite number line visualizer**.

Supports:

* Mobile (touch controls)
* PC (keyboard + mouse)
* Deep zoom exploration

This is a **starting framework** — you are expected to customize and extend it.

---

## Before You Start

It is **strongly recommended** to read through `script.js`.

The code is intentionally written to be:

* Easy to follow
* Easy to modify
* Modular enough for experimentation

Try making small changes and observe what happens — that’s the fastest way to understand the system.

---

## Important Notes

* Do **NOT rename existing functions** unless you update them everywhere
* Many parts of the system depend on consistent naming
* Small mistakes can silently break the visualization

---

## What You Need to Implement

To create your own ordinal system, you must provide:

---

### 1. Real → Ordinal Function

A function that converts a real number into your ordinal notation.

Requirements:

* Must cover **all ordinals up to your chosen limit**
* Must be **continuous enough** for visualization
* Must use `decimal.js` (required for precision)

This is the hardest part

---

### 2. Ordinal Classifier

A function that classifies ordinals for visualization.

Examples:

* Zero
* Successor ordinals
* Limit ordinals
* Powers of ω
* ε ordinals
* Higher systems (optional)

This is used for:

* Coloring
* Labeling
* Visual structure

---

### 3. Priority Function

A function that assigns a **priority value** to each ordinal.

Purpose:

* Important ordinals are shown
* Less important ones are hidden at deep zoom

Without this, the screen will become cluttered or slow.

---

## Goal

This template helps you:

* Build your own ordinal notation system
* Visualize transfinite structures
* Experiment with advanced ordinal hierarchies

---

## Tips

* Start small (e.g. up to ω or ε₀)
* Expand step by step
* Don’t try to implement everything at once

---

## Final Note

This is not just a visualizer — it’s a sandbox for exploring transfinite math.

Break things, experiment, and push the limits.
