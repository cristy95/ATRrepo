

public class InsertionSort {
	
    public int[] insertionSort(int[] InputAr) 
    { 
    	 int key,i;
        for(int j = 1; j < InputAr.length; j++) 
        {
            key = InputAr[j];
          i  = j-1;
            
            
          
            while((i >= 0) && (InputAr[i] > key)) 
            {
            	InputAr[i+1] = InputAr[i];
                i--;
            }
            	InputAr[i+ 1 ] = key; 
            	
        }
        return InputAr;
    }
    
    
  

	}