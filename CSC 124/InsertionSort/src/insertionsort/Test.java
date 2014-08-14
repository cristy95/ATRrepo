package insertionsort;
import java.util.Random;

public class Test {
	public static void main(String[] args) {
		int z = 100;
		int a[] = new int[z];
		//long start,end,total;
		InsertionSort sort = new InsertionSort();
		Random rand = new Random(100);
		
		
	    System.out.println("Random Generated Array:");
		for(int i  = 0; i < z; i++)
		{
		a[i] = rand.nextInt(50);
		System.out.print(a[i] + " ");
		}
		

		long start_b = System.currentTimeMillis();
		sort.insertionSort(a);
		long end_b = System.currentTimeMillis();
		long duration_b = end_b - start_b;

		System.out.println("\n\nAscending:");
		print(a);
		System.out.println("\nTime: " + duration_b + " ms");
		
		int b[] = new int [z];
		int j = 0;
		for(int i = a.length-1; i >= 0; i--) {
			b[j] = a[i];
			j++;
		}


		int[] Descending = new int[z];
	    int k = 0;
	    System.out.println("Descending:");
	    for(int i = a.length-1; i >= 0; i--)
	    	{
	    	Descending[k] = a[i];
	    	System.out.print(" " + Descending[k] );
	    	k++;
	    		}
		
		long start_c = System.currentTimeMillis();
		sort.insertionSort(Descending);
		long end_c = System.currentTimeMillis();
		long duration_c = end_c - start_c;
		System.out.println("\nTime: " + duration_c + " ms");
		
		
	}
	
	public static void print (int[] a) {
		for(int i = 0; i < a.length; i++) {
			System.out.print(" " + a[i]);
		} 
	}
}
