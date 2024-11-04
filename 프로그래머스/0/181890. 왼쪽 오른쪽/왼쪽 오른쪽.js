function solution(str_list) {
    const rIdx = str_list.indexOf("r");
    const lIdx = str_list.indexOf("l");
    
    if (rIdx === lIdx) {
        return [];
    }else if (lIdx === -1 || (rIdx !== -1 && rIdx < lIdx)) {
        return str_list.slice(rIdx + 1);
    }else {
        return str_list.slice(0, lIdx);
    }
}