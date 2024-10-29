function solution(my_string) {
    return [...my_string].filter((e) => /[0-9]/.test(e)).sort().map((e) => +e);
}