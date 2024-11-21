function sum(a){
    let totalsum = a
    function sum2(b){
        if(b === undefined) 
            return totalsum 
         totalsum += b
         return sum2
    }
    return sum2
}

console.log(sum(1)(2)(3)(4)(5)())