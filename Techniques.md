# Techniques to draw ordinal number line
## there gonna a yt video to explain this Techniques!
there are many ways to draw ordinal number line, from direct drawing , algebraic translation, binary expansion, ...

all of them work samelessly, but it not the most optimized way

So i'll introducing a new techniques : Fundamental Sequence Ordinal Encoding

Fundamental Sequence : https://en.wikipedia.org/wiki/Fundamental_sequence_(set_theory)

This techniques work samelessly on all system of ordinals, if you provide a consistent ordinal fundamental sequence and ordinal comparator

## Sounds cool...where we get ordinal heuristic position?

From World position, we can encoded it as [a0,a1,a2,a3,...] , which is pretty much non-trivial (you can read the instruction inside my code either). there are many ways
+ using iterative Int(log_{2/3}(1-x))#?range|start,end|? : actually Int(log_{2/3}(1-x)) generalized , it gives Self-similarity appearance which it look like a fractal. Pretty expensive
+ using iterative Int(x/(1-x))#?range|start,end|? : acutally Int(x/(1-x)) generalized , very cheap but breaks Self-similarity

i have already coded it on file ordinal.js
