/*class Node{
    constructor (data, next){
        this.data = data;
        this.next = next; 
    };
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    };

    add(data){
        const newNode = new Node(data, null);
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head;
            while (current.next){
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++
    };
};

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.add(12);
linkedList.add(99);
console.log(linkedList);*/

class Node{
    constructor (data, next){
        this.data = data;
        this.next = next; 
    };
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    };
    add(data){
          const newNode = new Node(data, null)
        if(!this.head){
            this.head=newNode
        }else{
            let current = this.head;
            while(current.next){
                current=current.next;
            };
                current.next=newNode;
        };
        this.size;
    };
};

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.add(12);
linkedList.add(94);
console.log(linkedList);