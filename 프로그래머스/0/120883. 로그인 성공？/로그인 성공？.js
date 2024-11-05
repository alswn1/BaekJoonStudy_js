function solution(id_pw, db) {
    const data = db.find(([id, pw]) => id === id_pw[0]);
    
    if (!data) {
        return "fail";
    }else if (data[1] !== id_pw[1]) {
        return "wrong pw";
    }else {
        return "login";
    }
}