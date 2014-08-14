import java.util.ArrayList;
import java.util.Random;

public class Test {
	public static void main (String[] args) {
		int z = 50;
		ArrayList<Integer> ai = new ArrayList<Integer> ();
		int a[] = new int[z];
		//long start,end,total;
		RightDominant sort = new RightDominant();
		Random rand = new Random();
		
		
	    System.out.println("Random Generated Array:");
		for(int i  = 0; i < z; i++)
		{
		a[i] = rand.nextInt(50);
		System.out.print(a[i] + " ");
		}
		
		
		long start_b = System.currentTimeMillis();
		sort.rightDominant(a);
		long end_b = System.currentTimeMillis();
		long duration_b = end_b - start_b;

		System.out.println("\n\nAscending:");
		sort.rightDominant(a);
		print(a);
		System.out.println("\nTime: " + duration_b + " ms");
		
		int b[] = new int [z];
		int j = 0;
		for(int i = a.length-1; i >= 0; i--) {
			b[j] = a[i];
			j++;
		}


		int[] Descending = new int[z];
	    int k = 50;
	    for(int i = 0; i < Descending.length; i++)
	    	
	    	{
	    	Descending[i] = k;
	    	k--;
	    		}
		
		long start_c = System.currentTimeMillis();
		sort.rightDominant(Descending);
		long end_c = System.currentTimeMillis();
		long duration_c = end_c - start_c;
		
		System.out.println("\nDescending:");
		print(Descending);
		System.out.println("\nTime: " + duration_c + " ms");
		
		
	}
	
	public static void print (int[] a) {
		for(int p = 0; p < a.length; p++) {
		System.out.print(" " + a[p]);
		} 
	}

	
}