let numbers = [2, 2, 2, 2, 2]; 

function arraysum(sum){
    let content = 0;
    sum.forEach((n) => {
            content += n;
    })
    return content;
}
console.log(arraysum(numbers));

