function binarySearch(arr, predicate) {
	// arr => [bad, bad, bad, ..., good, good, good, good]
	// both l and r are inclusive
	var l = 0;
	var r = arr.length - 1;

	while (l !== r) {
		var m = (l + r) >> 1;

		if (predicate(arr[m])) {
			// keep r in good cond
			r = m;
		} else {
			// try to move l to good cond
			l = m + 1;
		}
	}

	// post loop
	// l === r and predicate(l) === predicate(r) === true
}
