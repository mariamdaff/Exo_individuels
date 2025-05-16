# Dictionnaire de compression
mon_dictionnaire = {
    'texte': '1',
    'lorem': '2',
    'qui': '3',
    'donc': '4',
    'est': '5',
    'que': '6',
    'pour': '7',
    'ceci': '8',
    'faux-texte': '9',
    'dans': '10',
    'plus': '11',
    'avec': '12'
}

def convertirTexteEnListeDeMots(texte):
    return texte.split(" ")

def reconvertirListeDeMotsEnTexte(listeDeMots):
    return " ".join(listeDeMots)

def compresser_mots(liste_mots, dictionnaire):
    mot_compresse = []
    for mot in liste_mots:
        if mot in dictionnaire:
            mot_compresse.append(dictionnaire[mot])
        else:
            mot_compresse.append(mot)
    return mot_compresse

def compresser_texte(texte, dictionnaire):
    liste_mots = convertirTexteEnListeDeMots(texte)
    mots_compresses = compresser_mots(liste_mots, dictionnaire)
    texte_compresse = reconvertirListeDeMotsEnTexte(mots_compresses)
    return texte_compresse

texte_original = "ceci est un faux-texte avec du lorem qui est dans un texte"

texte_compresse = compresser_texte(texte_original, mon_dictionnaire)

print("Texte compressé :\n", texte_compresse)
