function solution(emergency) {
    const sortE = [...emergency].sort((a, b) => b - a);
    const em = new Map(sortE.map((e, index) => [e, index+1]));
    
    return emergency.map((e) => em.get(e));
}