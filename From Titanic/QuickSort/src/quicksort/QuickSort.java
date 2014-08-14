/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package quicksort;
import java.util.Random;

/**
 *
 * @author User
 */
public class QuickSort {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
    //    int A[] = {12, 34, 23, 22, 67, 11, 21};
        int b = 50;
        int[] A = new int [b];
        Sort sort = new Sort();
         Random number = new Random();
        
        for(int a=0;a<50;a++){
        A[a] = number.nextInt(50);
        System.out.print(A[a] + " ");     
     }
        
        
        System.out.println();
    long start = System.currentTimeMillis();
     sort.Quick(A, 0, A.length-1);
     long end = System.currentTimeMillis();
     System.out.println("InsertionSort's time:" + (end- start) + "\n");
     System.out.println();
     for(int i =0; i < A.length; i++){
         System.out.print(A[i] + "  ");
         
     }
        
        
        
    }
    
}
