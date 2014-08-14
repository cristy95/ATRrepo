package BubbleSort;


import java.util.Random;

public class BubbleTest {
	public static void main (String[] args) {
		BubbleSort sort = new BubbleSort ();
		Random rand = new Random();
		int z = 10;
		int a[] = new int [z];
		

		System.out.println("Array (Random):"); 
		for(int i = 0; i < z; i++) {
			a[i] = rand.nextInt(100);
			System.out.print(" " + a[i]);
		}
		
		//long start_a = System.currentTimeMillis();
		//sort.bubbleSorta(a);
		//long end_a = System.currentTimeMillis();
		//long duration_a = end_a - start_a;

		//System.out.println("\n\nRandom:");
		//print(a);
		//System.out.println("\nTime: " + duration_a + " ms");
		
		long start_b = System.currentTimeMillis();
		sort.bubbleSort(a);
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

		/*System.out.println("\nDescending:(New Array)");
		print(a);
		System.out.println();*/
		
		long start_c = System.currentTimeMillis();
		sort.bubbleSortb(a);
		long end_c = System.currentTimeMillis();
		long duration_c = end_c - start_c;
		
		System.out.println("\nDescending:");
		print(a);
		System.out.println("\nTime: " + duration_c + " ms");
		
		
	}
	
	public static void print (int[] a) {
		for(int i = 0; i < a.length; i++) {
			System.out.print(" " + a[i]);
		} 
	}
}