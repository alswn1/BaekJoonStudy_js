function solution(picture, k) {
    const len = picture.length;
    let answer = [];
    
    for (let i=0; i<len; i++) {
        let str = picture[i];
        
        str = [...str].map(e => e.repeat(k)).join('');
        for (let j=0; j<k; j++) {
            answer.push(str);
        }          
    }
    
    return answer;
}