# Techniques to draw ordinal number line
## there gonna a yt video to explain this Techniques!
there are many ways to draw ordinal number line, from direct drawing , algebraic translation, binary expansion, ...

all of them work samelessly, but it not the most optimized way

So i'll introducing a new techniques : Fundamental Sequence Ordinal Encoding

Fundamental Sequence : https://en.wikipedia.org/wiki/Fundamental_sequence_(set_theory)

This techniques work samelessly on all system of ordinals, if you provide a consistent ordinal fundamental sequence and ordinal comparator.

we convert number into brach index , then use FS to reduce the fixed ordinal (like w,e0,gamma0,BHO, Lim(BMS),...) into smaller ordinal with 2 rules
+ the ordinal expansion formular for n = [a0,a1,a2,a3,...] : {fixed ordinal}[a0][a1][a2][a3]... or (FS(FS(FS(FS(fixed ordinal)[a0])[a1])[a2])[a3])... in full term
++ if the ordinal is expanded from fixed ordinal, no checking (eg : expand directly from e0 to 1)
++ else , let a = FS(b)[k]. we only accept FS(a)[i] if FS(a)[i] > FS(b)[k-1] (case k=0 have been rejected further by that definition, or it is a successor so it is unexpanable)
+ for more details , see my code in file ordinal.js working with fixed ordinal w^w

## number to array encode and decoder

From World position, we can encoded it as [a0,a1,a2,a3,...] , which is pretty much non-trivial (you can read the my code either). there are many ways
+ using iterative Int(log_{2/3}(1-x))#?range|start,end|? : actually Int(log_{2/3}(1-x)) generalized , it gives Self-similarity appearance which it look like a fractal. Pretty expensive
+ using iterative Int(x/(1-x))#?range|start,end|? : acutally Int(x/(1-x)) generalized , very cheap but breaks Self-similarity

i have already coded it on file ordinal.js
