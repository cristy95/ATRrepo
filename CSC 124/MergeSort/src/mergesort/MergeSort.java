package mergesort;

public class MergeSort {
	public void mergeSort(int[] A, int p, int q, int r) {
		int n1, n2, x, y;
	    n1 = q - p + 1;
	    n2 = r - q;
		
		int[] Left = new int[n1]; 
		int[] Right = new int[n2]; 
		
		for(int i = 0; i < n1; i++) {
			Left[i] = A[p+i];
		}
		for(int j = 0; j < n2; j++) {
			Right[j] = A[q+j+1];
		}               
                x = 0;
                y = 0;
                
                for(int k = p; k <= r; k++){
                        if(x >= Left.length && y < Right.length) {
                                A[k] = Right[y];
                                y++;
                        }
                        else if(y >= Right.length && x < Left.length) {
                                A[k] = Left[x];
                                x++;
                        }
                        else if(Left[x] <= Right[y]) {
				A[k] = Left[x];
                                x++;
			} 
			else {
				A[k] = Right[y];
                                y++;
			}
		}
	}	
		
	public void mergeSort2(int[] A, int p, int r) {
		if (p < r) {
			int q = (p + r) / 2;
			mergeSort2(A, p, q);
			mergeSort2(A, q+1, r);
			mergeSort(A, p, q, r);
		}		
	}
}
