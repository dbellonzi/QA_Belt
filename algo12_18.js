function BSTAdd(val){
    if(!this.root){
        this.root = new Node(val);
    };
    var current = this.root;
    while(current){
        if(current.val > val){
            if(current.left){
                current.left = new Node(val);
                break;
            } else if(!current.right){
                current.right = new Node(val);
                break;
            } else {
                current = current.right;
            }
        }
    }
}
