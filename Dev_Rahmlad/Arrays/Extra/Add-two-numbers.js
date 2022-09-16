/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Arr = [];
  const l2Arr = [];
  const answer = [];

  for (let i = l1.length - 1; i >= 0; i--) {
    l1Arr.push(l1[i]);
  }
  for (let j = l2.length - 1; j >= 0; j--) {
    l2Arr.push(l2[j]);
  }

  const result = Number(l1Arr.join("")) + Number(l2Arr.join(""));
  const resultArr = Array.from(result.toString());

  for (let k = resultArr.length - 1; k >= 0; k--) {
    answer.push(Number(resultArr[k]));
  }
  return answer;
};
l1 = [2, 4, 3] 
l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));

