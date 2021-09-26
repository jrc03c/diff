const DiffMatchPatch = require("./diff-match-patch/javascript/diff_match_patch_uncompressed.js")
  .diff_match_patch

function getDiffScore(a, b) {
  const dmp = new DiffMatchPatch()
  const diff = dmp.diff_main(a, b)
  return dmp.diff_levenshtein(diff) / Math.max(a.length, b.length)
}

module.exports = getDiffScore
