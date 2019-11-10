import math

liste = [2]   
def isPrime(num):
    for i in liste:
        if(i > math.sqrt(num)):
            break
        if(num%i == 0):
            return False
    return True
 
k = 3
while True:
    if(isPrime(k)):
        liste.append(k)
    k+=1
    if(k == 1000000000 or k == 1000000 or k== 10000000 or k== 100000000):
        print(liste[len(liste)-1])



