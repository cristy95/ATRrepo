package quicksort;
import java.util.Random;

public class test {
	public static void main(String[] args) {
	        int b = 50;
	        int[] A = new int [b];
	        Quicksort sort = new Quicksort();
	         Random number = new Random();
	        
	        for(int a=0;a<50;a++){
	        A[a] = number.nextInt(50);
	        System.out.print(A[a] + " ");     
	     }
	        
	        
	        System.out.println();
	    long start = System.currentTimeMillis();
	     sort.Sort(A, 0, A.length-1);
	     long end = System.currentTimeMillis();
	     System.out.println("InsertionSort's time:" + (end- start) + "\n");
	     System.out.println();
	     for(int i =0; i < A.length; i++){
	         System.out.print(A[i] + "  ");
	         
	     }
	        
	        
	        
	    }
}
