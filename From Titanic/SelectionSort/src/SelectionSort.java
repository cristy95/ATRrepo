
public class SelectionSort {

	public  void  selectionSort(int[] ar) {
        
        int i, j, x, min_j, min_x;
        for(i = 0; i < ar.length - 1; i++) 
        {
            min_j = i; // min j 
            min_x = ar[i]; //min x 
            for(j = i+1; j < ar.length; j++) 
            {
                if(ar[j] < min_x) //ar[min]
                {
                    min_j = j;
                    min_x = ar[j];
                    ar[min_j] = ar[i];
                    ar[i] = min_x;
                    
                    
                }
                
            }
        }
        //System.out.println("\n");
    }
	
}
