def parentheses_valides(str):
    if not str:
        return True
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in str:
        if char in mapping:  # Si le caractère est une parenthèse fermante
            top_element = stack.pop() if stack else '#'  # Récupère le sommet de pile ou un flag
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)  # Empile si c'est une parenthèse ouvrante

    return not stack

# Tests de base
print(parentheses_valides( "()"))  # True
print(parentheses_valides("()[]{}"))      #true
print(parentheses_valides("(]"))    # False
print(parentheses_valides( "([])"))  # True
