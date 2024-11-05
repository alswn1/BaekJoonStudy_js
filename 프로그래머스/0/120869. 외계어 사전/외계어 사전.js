function solution(spell, dic) {
    const target = spell.sort().join('');
    
    return dic.some(w => [...w].sort().join('') === target) ? 1 : 2;
}