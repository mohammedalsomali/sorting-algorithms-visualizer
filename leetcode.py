def reverse(x):

    i = 0
    newx = 0
    while x != 0:
        if x > 0:
            y = x % 10
            newx = newx * 10 + y
            x = x//10
        else:
            i += 1
            x = x * -1
            y = x % 10
            newx = newx * 10 + y
            x = x//10

    if i > 0:
        newx = newx * -1
    minx = -2**31
    maxx = 2**31 - 1

    if minx  >= newx or newx >= maxx:
        return 0

    return newx

def main():
    x = -112334575
    w = reverse(x)
    print(w)
main()