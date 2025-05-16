import time

def now():
    return time.perf_counter() * 1000  # en millisecondes

def add(n1, n2):
    return n1 + n2

def add_array(arr, n):
    return [x + n for x in arr]

def factorielle(n):
    return 1 if n <= 1 else n * factorielle(n - 1)

def mesurer_execution(nom, fonction, *args):
    debut = now()
    resultat = fonction(*args)
    fin = now()
    print(f"{nom}{args} = {resultat}")
    print(f"L'exécution de cette Operation a duré: {fin - debut:.4f} ms\n")

# Appels
mesurer_execution("add", add, 5, 10)
mesurer_execution("add_array", add_array, [3, 4, 1, 10], 1)
mesurer_execution("factorielle", factorielle, 5)
