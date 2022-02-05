const LinkList  = require("./link-list");
const linklist1 = new LinkList()
linklist1.insertLast(2);
linklist1.insertLast(4);
linklist1.insertLast(3);

const linklist2 = new LinkList()
linklist2.insertLast(5);
linklist2.insertLast(6);
linklist2.insertLast(8);

console.log(addTwoNumbers(linklist1,linklist2))

function addTwoNumbers(l1,l2){
    const output = new LinkList(0);
    let currentNode = output;
    let carry = 0;
    while(l1 != null || l2 != null){
        const value1 =  l1?.val ?? 0;
        const value2 = l2?.val ?? 0;
        const sum = value1 + value2 + carry;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        const firstDigit = sum % 10;
        carry = Math.floor(sum/10);
        currentNode.next = new LinkList(firstDigit);
        currentNode = currentNode.next;

    }
    if(carry > 0) currentNode.next = new LinkList(carry)
    return output.next

}
