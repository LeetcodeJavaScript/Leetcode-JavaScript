function searchMatrix(matrix, target) {
    if (!matrix.length) {
        return false;
    }
    
    var rows = matrix.length;
    var cols = matrix[0].length;
    
    var r = 0;
    var c = cols - 1;
    
    while (r < rows && c >= 0) {
        if (matrix[r][c] === target) {
            return true;
        }
        
        if (target > matrix[r][c]) {
            r++;
        } else {
            c--;
        }
    }
    
    return false;
}
