function uniquePathsWithObstacles(obstacleGrid) {
    var rows = obstacleGrid.length;
    var cols = obstacleGrid[0].length;
    
    var prev = Array(cols).fill(0);
    var curr = Array(cols).fill(0);
    
    for (var r = 0; r < rows; r++) {
        var tmp = curr;
        curr = prev;
        prev = tmp;
        
        if (obstacleGrid[r][0] === 1) {
            curr[0] = 0;
        } else {
            curr[0] = r === 0 ? 1 : prev[0];
        }
        
        for (var c = 1; c < cols; c++) {
            if (obstacleGrid[r][c] === 1) {
                curr[c] = 0;
                continue;
            }
            curr[c] = curr[c - 1] + prev[c];
        }
    }
    
    return curr[cols - 1];
}
