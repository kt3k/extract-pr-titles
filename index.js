const pupa = require('pupa')

const DEFAULT_FORMAT = '{title} #{number}'

/**
 * @param {Array<ListLogLine>} logLines
 * @param {string} format The format for PR in pupa format. Default is {title} #{number}.
 * @param {boolean} reverse Reverse the order of the output
 */
module.exports = (logLines, { format, reverse } = {}) => {
  format = format || DEFAULT_FORMAT
  const result = []
  for (line of logLines) {
    if (isMergedPRCommit(line)) {
      result.push(extractMergedPR(line))
    } else if (isSquashedPRCommit(line)) {
      result.push(extractSquashedPR(line))
    }
  }

  if (reverse) {
    result.reverse()
  }

  return result.map(pr => pupa(format, pr))
}

const RE_PR_NUMBER = /\#(\d+)/

const isMergedPRCommit = line => {
  return /^Merge pull request \#\d+/.test(line.message)
}

const isSquashedPRCommit = line => {
  return / \(\#\d+\)$/.test(line.message)
}

const extractMergedPR = line => {
  const title = line.body
  const number = line.message.match(RE_PR_NUMBER)[1]
  return { title, number }
}

const extractSquashedPR = line => {
  const title = line.message.replace(/ \(\#\d+\)$/, '')
  const number = line.message.match(RE_PR_NUMBER)[1]
  return { title, number }
}
