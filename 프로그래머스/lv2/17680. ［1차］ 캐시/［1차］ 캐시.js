function solution(cacheSize, cities) {
  if (!cacheSize) {
    return cities.length * 5;
  }

  let cache = [];
  let answer = 0;

  cities.forEach((city) => {
    let lowcity = city.toLowerCase()
    const idx = cache.indexOf(lowcity);
    if (idx === -1) {
      // cache에 도시가 없는 경우
      answer += 5;
      if (cache.length >= cacheSize) {
        // cache가 가득 찬 경우, 가장 오래된 도시를 제거
        cache.shift();
      }
    } else {
      // cache에 도시가 있는 경우
      answer += 1;
      // 가장 최근에 사용한 도시로 업데이트
      cache.splice(idx, 1);
    }
    // 도시를 cache의 맨 끝에 추가
    cache.push(lowcity);
  });

  return answer;
}
