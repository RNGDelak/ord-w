# Techniques to draw ordinal number line
## there gonna a yt video to explain this Techniques!
there are many ways to draw ordinal number line, from direct drawing , algebraic translation, binary expansion, ...

all of them work samelessly, but it not the most optimized way

So i'll introducing a new techniques : Fundamental Sequence Ordinal Encoding

it currently have a problem, like with e0 is fixed ordinal,there multiples encoding for w like [1],[2,1],[3,1,1],[4,1,1,1],...

## Sounds cool...where we get ordinal heuristic position?

From World position, we can encoded it as [a0,a1,a2,a3,...] , which is pretty much non-trivial (you can read the instruction inside my code either). there are many ways
+ using iterative Int(log_{2/3}(1-x))#?range|start,end|? : actually Int(log_{2/3}(1-x)) generalized , it gives Self-similarity appearance which it look like a fractal. Pretty expensive
+ using iterative Int(x/(1-x))#?range|start,end|? : acutally Int(x/(1-x)) generalized , very cheap but breaks Self-similarity
