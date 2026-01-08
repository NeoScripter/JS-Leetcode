
def removeLastVowel(string):
    vowels = ['a', 'e', 'i', 'o', 'u']
    res = []

    for word in string.split(' '):
        found = False
        for i in range(len(word) - 1, -1, -1):
            if found: 
                break;
            for v in vowels:
                if word[i] == v or word[i] == v.upper():

                    res.append(word[:i] + word[i + 1:])
                    found = True
                    break

        if not found:
            res.append(word)

    return " ".join(res)

print(removeLastVowel("Those who dare to fail miserably can achieve greatly.") ==  "Thos wh dar t fal miserbly cn achiev gretly.")
print(removeLastVowel("Love is a serious mental disease.") ==  "Lov s  serios mentl diseas.")
print(removeLastVowel("Get busy living or get busy dying.") ==  "Gt bsy livng r gt bsy dyng.")
print(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people.") ==  "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.")
