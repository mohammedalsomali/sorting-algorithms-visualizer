 
from scipy.optimize import fsolve
import numpy as np

def system(Q):
    H = 0.1333 * Q ** 2 + 1.8681 * Q + 0.9476 
    return H
def pump(Q):
    return -0.0075 * Q** 2 - 0.7855 * Q + 31.585

def solve(Q):
    return pump(Q) - system(Q)

def main():
    x  = fsolve(solve,8)
    print (x, system(x))
    print(system(x)*x*)
main()


