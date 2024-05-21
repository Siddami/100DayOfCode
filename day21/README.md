```markdown
# Exercise Report

## 1. Ten Most Frequent Words
Implemented `tenMostFrequentWords` to find the ten most frequent words in a given string, removing punctuation and normalizing to lowercase. 

**Example:**
```javascript
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
// Output: [{word: 'love', count: 6}, ...]
```

## 2. Clean Text and Find Frequent Words
Created `cleanText` to remove special characters from a text and identified the three most frequent words using a self-invoking function.

**Example:**
```javascript
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
// Output: "I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher"
```
```javascript
// Output of top three words after cleaning
// [{word: 'I', count: 3}, {word: 'teaching', count: 3}, {word: 'and', count: 2}]
```
```