function combinationSum(candidates, target) {
    var res = [];
    var prefix = [];

    search(0, target);
    return res;

    function search(idx, rest) {
        if (rest === 0) {
            return res.push(prefix.slice());
        }

        if (rest < 0) {
          return;
        }

        if (idx === candidates.length) {
            return;
        }

        prefix.push(candidates[idx]);
        search(idx, rest - candidates[idx]);
        prefix.pop();
        search(idx + 1, rest);
    }
}
