function search(pat, text, suffArr) {
    let first = 0;
    let     last = suffArr.length -1;

    while(first <= last){
        const mid = Math.floor((first+last) / 2)
        const substrStart = suffArr[mid];
        const substr = text.slice(substrStart, substrStart + pat.length);

        if(pat === substr){
            return substrStart;
        } else if(pat > substr) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

const suffArr = [
    { index:5, suff:"a" },     // 5: "a"
    { index:3, suff:"ana" },   // 3: "ana"
    { index:1, suff:"anana" }, // 1: "anana"
    { index:0, suff:"banana" },// 0: "banana"
    { index:4, suff:"na" },    // 4: "na"
    { index:2, suff:"nana" }   // 2: "nana"
  ];