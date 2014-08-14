/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package quicksort;

/**
 *
 * @author User
 */
public class Sort {
    
    public int[] Quick(int [] A, int p , int r){
          if(p < r){
              int q = Partition(A,p,r);
          
              Quick(A,p,q-1);
              Quick(A,q+1,r);
              
          }
          return A;
    }
    
    public int Partition(int[] A, int p, int r){
        int x = A[r];
        int i = p-1;
        int a, b;
        
        for(int j = p; j < r;j++){
            if (A[j]<= x){
                i++;
                a = A[i];
                A[i] = A[j];
                A[j] = a;
            }
        }
        b = A[i+1];
        A[i+1] = A[r];
         A[r] = b;
        
        return i + 1;
    }
}
