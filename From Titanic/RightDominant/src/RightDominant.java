import java.util.ArrayList;


public class RightDominant {
	
	public ArrayList<Integer> rightDominant(int[] ar) { 
        
        int i, j, key;
       ArrayList<Integer> answerArray = new ArrayList<Integer>(); 
       
        for(i = 0; i < ar.length; i++) 
        {
        	key = ar[i]; 
            for(j = i+1; j < ar.length; j++) 
            {
                
                if(ar[j] > key) 
                {               	
                	key = ar[j];
                	i = j;
                	
                }
            }
            answerArray.add(key);
            
        }
       // answerArray.add(ar[ar.length-1]);
        return answerArray;
        

	}
	
}