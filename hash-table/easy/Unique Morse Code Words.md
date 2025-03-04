# 📝 Unique Morse Code Words

## 🔗 [Task description on LeetCode](https://leetcode.com/problems/unique-morse-code-words/description/)

### 💡 Solution

```javascript
function uniqueMorseRepresentations(words) {
    const hash = {
        'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",
        'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..",
        'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.",
        's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-",
        'y': "-.--", 'z': "--.."
    };
    const toMorse = word => Array.from(word, char => hash[char]).join('');
    return new Set(words.map(toMorse)).size;
}
```
