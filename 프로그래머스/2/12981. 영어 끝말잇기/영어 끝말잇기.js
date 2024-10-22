function solution(n, words) {
    let turns = Array(n).fill(0), history = {};
    
    for (let i=0; i<words.length; i++) {
        let person = i % n, word = words[i];
        turns[person]++;

        if (i > 0 && (word[0] != words[i-1].slice(-1) || history[word])) {
            return [person + 1, turns[person]];
        }

        history[word] = true;
    }

    return [0, 0];
}