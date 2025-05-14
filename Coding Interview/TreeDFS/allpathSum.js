function upper(root,sum){
    const path = [];
    allpathSum(root, path, 0,sum);
}

function allpathSum(node,path,pathlength,sum){
    
    if(node === null){
        return;
    } 
        path[pathlength] = node.data;
        pathlength++;

        if(node.left == null && node.right == null){
            let totalsum = 0;
            for(let i=0; i < pathlength; i++){
                totalsum += path[i];
            }
            if(totalsum == sum){
                const currentsum = path.slice(0, pathlength);
                console.log(currentsum);
            }
        } else {
            allpathSum(node.left, path, pathlength, sum)
            allpathSum(node.right, path,pathlength, sum)
        }
        
}