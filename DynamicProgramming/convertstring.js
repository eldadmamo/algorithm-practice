function findMinDelInsert(x, y) {
    const m = x.length;
    const n = y.length;
    const len = lcs(x, y);
    console.log(`Minimum Deletion = ${m - len}`);
    console.log(`Minimum Insertion = ${n - len}`);
}


function lcs(x,y){
    const m = x.length;
    const n = y.length;

    const db = Array.from({length: m+1}, () => new Array(n+1));

    for(let i=0; i <= m ; i++){
        for(let j=0; j <= n; j++){
            if(i==0 || j==0){
                db[i][j] = 0;
            } else if(x[i-1] === y[j-1]){
                db[i][j] = db[i-1][j-1] + 1
            } else {
                db[i][j] = Math.max(db[i][j-1], db[i-1][j]) 
            }
        }
    }
    return db[m][n]
}