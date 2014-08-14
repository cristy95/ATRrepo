/**
 * 
 * @author u2012-0361
 */

package BubbleSort;

public class BubbleSort {

	public void bubbleSort(int[] A){
		for(int i = 0; i < A.length; i++){
			for(int j = A.length-1; j > i; j--){
				if (A[j] < A[j-1]){
					int temp = A[j];
					A[j] = A[j-1];
					A[j-1] = temp;
				}
			}
		}
	}
	
	public void bubbleSortb(int[] A){
		for(int i = 0; i < A.length; i++){
			for(int j = A.length-1; j > i; j--){
				if (A[j] > A[j-1]){
					int temp = A[j];
					A[j] = A[j-1];
					A[j-1] = temp;
				}
			}
		}
	}
	
}