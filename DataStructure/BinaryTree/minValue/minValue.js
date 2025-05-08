function minValue(root){
    let temp = root;

    while(temp.left != null){
        temp = temp.left;
    }

    return temp.key;
}

const output = minValue();
console.log(output);