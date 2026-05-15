
class Solution {
    public ListNode reverse (ListNode head ){
        ListNode current= head;
       ListNode prev = null ;
        ListNode next = null;
        while(current!=null){
            next = current.next;
            current.next = prev ;
            prev = current ;
            current = next ;

        }
        return prev;

    }
    public int[] nextLargerNodes(ListNode head) {
        ListNode head2 = reverse(head);
        Stack<ListNode> st = new Stack<>();
       
        ListNode temp = head2;
        int size =0;
        while(temp!=null){
            size++;
            temp= temp.next;
            
        }
        int arr[] = new int [size];
        ListNode temp2 = head2;
        while(temp2!=null){
           
            
                while(st.size()>0 &&st.peek().val<=temp2.val){
                    st.pop();
                }
                if(st.size()==0){
                    arr[size-1]=0;
                }
                else{
                    arr[size-1]=st.peek().val;

                }
                
            st.push(temp2);
            temp2= temp2.next;;
            size--;

        }
        return arr;
        
        

        
    }
}
