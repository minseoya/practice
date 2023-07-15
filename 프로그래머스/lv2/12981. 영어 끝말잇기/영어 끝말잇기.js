function solution(n, words) {
  var answer = [0, 0];
  const usedWords = new Set();
  let prevWord = '';

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]
    
    if (usedWords.has(currentWord) || (prevWord && prevWord[prevWord.length - 1] !== currentWord[0])) {
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
      break;
    }

    usedWords.add(currentWord);
    prevWord = currentWord;
  }

  return answer;
}
