function findKthLargest(nums, k) {
    var l = 0;
    var r = nums.length - 1;
    
    while (l <= r) {
        var m = partition(nums, l, r);
        
        if (m + 1 === k) {
            return nums[m];
        } else if (m < k) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
}

function partition(arr, l, r) {
    var pivot = arr[r];
    var tail = l - 1;
    
    for (var i = l; i <= r; i++) {
        if (arr[i] >= pivot) {
            tail++;
            var tmp = arr[tail];
            arr[tail] = arr[i];
            arr[i] = tmp;
        }
    }
    
    return tail;
}
