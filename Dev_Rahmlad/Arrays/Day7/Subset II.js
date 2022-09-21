var subset = function(nums){
    nums.sort();
    const result = []; //Initialize an empty array
    const pick = (current, start)=>{
        result.push(current)
        for (let i=start; i<nums.length; i++){
            if(i>start && nums[i] == nums[i-1]){
                continue
            }else{
                pick(current.concat(nums[i]), i+1)
            }
        }
    }
    pick([], 0)
    
    return result
}
console.log(subset([1,2,2]))
let result = [2];

console.log(result.concat([1]))