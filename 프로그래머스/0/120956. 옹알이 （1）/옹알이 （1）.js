function solution(babbling) {
    let count = 0;
    
    // babbling.forEach(e => {
    //     e.replaceAll('aya', ' ')
    //         .replaceAll('ye', ' ')
    //         .replaceAll('woo', ' ')
    //         .replaceAll('ma', ' ').trim() === '' ? count++ : count;
    // });
    
    const regex = /^(aya|ye|woo|ma)+$/;
    
    for (const word of babbling) {
        if (regex.test(word)) count++;
    }
    
    return count;
}