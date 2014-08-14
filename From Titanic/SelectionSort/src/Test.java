import java.util.Random;


public class Test {
    
	public static void main(String[] args) {
	int z = 100;
	int InputAr[] = new int[z];
	long start,end,total;
	SelectionSort sort = new SelectionSort();
	Random rand = new Random(100);
	
    System.out.println("Random Generated Array:");
	for(int i  = 0; i < z; i++)
	{
	InputAr[i] = rand.nextInt(z);
	System.out.print(InputAr[i] + " ");
	}
	
	start = System.currentTimeMillis();
	sort.selectionSort(InputAr);
	end = System.currentTimeMillis();
	total = end - start;
        
	//System.out.println();
	//System.out.println("Random: " + total + "ms");
	
        printOutput(InputAr); 
        /*
	for(int i  = 0; i < z; i++)
	{
	System.out.print(InputAr[i] + " ");
	}
        */
         
	start = System.currentTimeMillis();
	sort.selectionSort(InputAr);
	end = System.currentTimeMillis();
	total = end - start;
        
	System.out.println();
	System.out.println("Ascending: " + total + "ms");
	
        printOutput(InputAr);
        /*
	for(int i  = 0; i < z; i++)
	{
	System.out.print(InputAr[i] + " ");
	}
        */
	
	int[] Descending = new int[z];
        int j = 0;
	for(int i = InputAr.length-1; i >= 0; i--)
	{
		Descending[j] = InputAr[i];
		j++;
	}
	
	 start = System.currentTimeMillis();
	sort.selectionSort(Descending);
	end = System.currentTimeMillis();
	total = end - start;
        
	System.out.println();
	System.out.println("Descending: " + total + "ms");
	
        printOutput(InputAr);
        /*
	for(int i  = 0; i < z; i++)
	{
	System.out.print(Descending[i] + " ");
	}
	*/
	}
	
        
	public  static void printOutput(int InputAr[]) 
	    {
	    	for(int i  = 0; i < 100; i++)
                {
                System.out.print(InputAr[i] + " ");
                }
	    }
        
			
	
}