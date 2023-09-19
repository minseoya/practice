function solution(s) {

  const elements = s.match(/\d+/g);
  const set = new Set(elements);

  const map = new Map();

  for (const element of elements) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }


  const sortedElements = [...set].sort((a, b) => map.get(b) - map.get(a));


  return sortedElements.map(Number);
}