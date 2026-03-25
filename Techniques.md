# Techniques to draw ordinal number line
## there gonna a yt video to explain this Techniques!
there are many ways to draw ordinal number line, from direct drawing , algebraic translation, binary expansion, ...

all of them work samelessly, but it not the most optimized way

So i'll introducing a new techniques : Fundamental Sequence Heuristic Expansion (FSHE)

this was found by Steven Brooks in 2008 from his famous project : Transfinite Number Line (link : https://www.stephenbrooks.org/archive/ordinals/)

it has solved 3 problem

+ performance : currently fastest alogrithm that haven't be beaten in 14 years!

+ simplicity : you only have to delevope a fundamental sequence function and replace the current one, and you just make a new transfinite number line

+ Versatility : it work on every single ordinal system (ordinality independency), supporting all ordinal allocations (structural independency)

## the program pipeline
from a pixel,we extract it's world position, then compute its heuristic position(instead of writting 0.23456 , we write [2,3,4,5,6] for example), using the same process as folow to compute ordinal at that point

## What is fundamental sequence?

fundamental sequence of an ordinal is defined like this
FS(x) = {x[0],x[1],x[2],...} for all x ∈ Lim
wherever 
It’s basically a way to “approach” a limit ordinal from below using simpler ordinals.

eg : FS(w) = {0,1,2,3,4,...} //i intentionally added 0 so that we don't have to draw 0 manually
FS(w^w) = {1,w,w^2,w^3,w^4,...}
FS(w^w+w) = {w^w,w^w+1,w^w+2,w^w+3,...}
FS(e0) = {1,w,w^w,w^w^w,w^w^w^w,...}
FS(e0+w) = {e0,e0+1,e0+2,e0+3,...}
in some system, 0 is the beginning of all FS, which is not false since you have to pass 0 to reach any ordinal at first , but for convenient, i removed it.

## So... it's applications?
If you apply FS to Every single limit ordinal (which is a proper class), you still get proper class but this class is well-structured. All ordinal now can be encoded as a arrays (eg : [3,2,5,7])

confusing? let me break it down!
for example,we apply FS to all limit ordinal below e_0
from plain sequece : 0,1,2,3,4,...,w,w+1,w+2,...,w2,...,w3,...,w^2,...,w^3,...,w^w,...,w^w^w,...,w^w^w^w,...,e0
into structured one like this

0 //special case
1 //w^^0 = 1
  2
    3
      4
...
w
  w+1
    w+2
    ...
  w2
    ...
    w3
  ...
  w^2
    ...
    w^3
...
w^w
...
w^w^w
...
w^w^w^w
...
e0

now each ordinal can be written into heuristic position
for example : [3,3,5,4] is w^(w^2*4 + w*4) 
why? let unpack it step by step
[3] is FS(e0)[3] which is w^w^w
[3,3] is FS(w^w^w)[3] which is w^w^3
[3,3,5] is FS(w^w^3)[5] which is w^(w^2*5)
[3,3,5,4] is FS(w^(w^2*5))[4] which is w^(w^2*4 + w*4)

## Sounds cool...where we get ordinal heuristic position?
From World position, we can encoded it as [a0,a1,a2,a3,...] , which is pretty much non-trivial (you can read the instruction inside my code either). there are many ways
+ using iterative Int(log_{2/3}(1-x))#?range|start,end|? : actually Int(log_{2/3}(1-x)) generalized , it gives Self-similarity appearance which it look like a fractal. Pretty expensive
+ using iterative Int(x/(1-x))#?range|start,end|? : acutally Int(x/(1-x)) generalized , very cheap but breaks Self-similarity
