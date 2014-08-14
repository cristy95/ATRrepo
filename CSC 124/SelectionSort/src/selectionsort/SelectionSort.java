package selectionsort;

public class SelectionSort {
public  void  selectionSort(int[] ar) {
        
        int i, j, minJ, minX;
        for(i = 0; i < ar.length - 1; i++) 
        {
        	minJ = i; 
        	minX = ar[i];
            for(j = i+1; j < ar.length; j++) 
            {
                if(ar[j] < minX)
                {
                	minJ = j;
                	minX = ar[j];
                    ar[minJ] = ar[i];
                    ar[i] = minX;
                    
                    
                }
                
            }
        }
        //System.out.println("\n");
    }
}
