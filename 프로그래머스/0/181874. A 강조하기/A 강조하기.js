function solution(myString) {
    return myString.replaceAll("a", "A").split('').map((e) => e != "A" ? e.toLowerCase() : e).join('');
}