function binarySearch(arr, func) {
	// both l and r are inclusive
	var l = 0;
	var r = arr.length - 1;

	while (l !== r) {
		var m = (l + r) >> 1;

		if (func(arr[m])) {
			// keep r in good cond
			r = m;
		} else {
			// try to move l to good cond
			l = m + 1;
		}
	}

	// post loop
	// l === r and func(l) === func(r) === true
}
