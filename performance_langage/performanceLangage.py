import time

def now():
    return time.perf_counter()*1000
temps_initial =now()

def add(a, b):
    return a+b
print(add(5, 10))

def add_array(arr, n):
    return [x + n for x in arr]
print(add_array([3, 4, 1, 10], 1))

def factorielle(n):
    if n <= 1:
        return 1
    else:
        return n * factorielle(n - 1)
    print(factorielle(5))

temps_final = now()
temps_ecoule = temps_final - temps_initial
print(f"L'exécution a duré {temps_ecoule:.4f} millisecondes")
