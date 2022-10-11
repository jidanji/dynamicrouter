function getnumbers(numbers){
    let arr=[];
    for(let i=0;i<numbers.length-3;i++)
    {
        for(let j=i+2;j<numbers.length-3;j++)
        {
            let item=[numbers[i],numbers[i+1],numbers[j]]
            arr=[...arr,item]
        }
    }

    return arr.filter(item=>item[0]+item[1]+item[2]===0);
}