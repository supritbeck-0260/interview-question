class Node {
    constructor(value=null,next=null){
        this.data=value;
        this.next= next;
    }
}

class LinkList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
// insert first node 
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.length ++;
    }

    //insert last node
    insertLast(data){
        const node = new Node(data);
        // if head is empty then add to the head 
        if(!this.head) this.head = node;
        else{
            let currentNode = this.head;
            //go to last node
            while(currentNode.next){
                currentNode = currentNode.next;
            } 
            currentNode.next = node;
        }
        this.length++
    }
    
    //insert at index
    insertAt(data,index){
        if(index < 0 || index> this.length) return;
        
        if(index == 0) return this.insertFirst(data);
        
        let previous ;
        let current = this.head;
        const node = new Node(data);
        let count=0;
        while(count < index){
            previous = current //node before index
            current = current.next; //node after index
            count++;
        }
        
        node.next = current;
        previous.next = node;
        this.length++;

    }
    //get at index
    getAt(index){
        if(this.head == null) return null;
        let current = this.head;
        let count = 0;
        while(count <= index){
            current = current.next;
            count++
        }
        return current.data || null
    }
    //remove at index
    removeAt(index){
        if(index <0 || index> this.length) return null;

        let current = this.head;
        if(index == 0){ 
            this.head = current.next;
            return
        }

        let previous;
        let count = 0;
        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;

        this.length--;


    }

    // clear list
    clearList(){
        this.head =null;
        this.length = 0;
    }
    // print all data

    size(){
        return this.length;
    }
}
module.exports = LinkList;
// const linklist = new LinkList();
// linklist.insertFirst(10)
// linklist.insertFirst(3)
// linklist.insertFirst(20)
// linklist.insertFirst('hello');
// linklist.insertLast('bye bye');
// linklist.insertAt(20,4)

// console.log(linklist);
// linklist.removeAt(1)
// console.log(linklist);
// linklist.clearList()
// console.log(linklist);
// console.log(linklist.getAt(2));
