function longestsubstring(x,y){
    const m = x.length;
    const n = y.length;
    let result =0;

    const db = Array.from({length: m+1}, () => new Array(n+1));

    for(let i=0; i <= m; i++){
        for(let j=0; j <= n; j++){
            if(i==0 || j==0){
                db[i][j] = 0;
            } else if(x[i-1] === y[j-1]) {
                db[i][j] = db[i-1][j-1] +1;
                if(db[i][j] > result){
                    result = db[i][j];
                }
            } else {
                db[i][j] = 0;
            }
        }
    }
    return result;
}