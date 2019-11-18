const { describe, it } = require('kocha')
const { expect } = require('chai')

const extractPRTitles = require('./index.js')

const fixture = [
  {
    "hash": "ee1dad69024fab4193bdbbb2541a50fa42784d6f",
    "date": "2019-11-18 21:31:04 +0100",
    "message": "Update README.md (#4)",
    "refs": "HEAD -> master, origin/master, origin/HEAD",
    "body": "",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "6c976373965220ba211760ef0a0bf455a0c27863",
    "date": "2019-11-18 21:30:28 +0100",
    "message": "Merge pull request #3 from kt3k/kt3k-patch-1",
    "refs": "",
    "body": "Update README.md C",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "ae744f3d2475e3d49681ce29945bba07888fda95",
    "date": "2019-11-18 21:30:09 +0100",
    "message": "Update README.md",
    "refs": "",
    "body": "",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "32da4c4c9b77311f5a10f86ada18e2763f7e8561",
    "date": "2019-11-18 21:29:50 +0100",
    "message": "Update README.md (#2)",
    "refs": "",
    "body": "",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "828d041301786ba3ed630647d227ef648fe53152",
    "date": "2019-11-18 21:27:45 +0100",
    "message": "Merge pull request #1 from kt3k/kt3k-patch-1",
    "refs": "",
    "body": "Update README.md A",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "e1328f2eaf8db3aad61413863dcfee8f854128ff",
    "date": "2019-11-18 21:27:24 +0100",
    "message": "Update README.md",
    "refs": "",
    "body": "",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  },
  {
    "hash": "1064da935d6e3a8b0a1b345800dd5d2643af293c",
    "date": "2019-11-18 21:24:07 +0100",
    "message": "Initial commit",
    "refs": "",
    "body": "",
    "author_name": "Yoshiya Hinosawa",
    "author_email": "example@gmail.com"
  }
]

describe('extractPRTitles', () => {
  it('extracts the pr titles and numbers', () => {
    expect(extractPRTitles(fixture)).to.eql([
      'Update README.md #4',
      'Update README.md C #3',
      'Update README.md #2',
      'Update README.md A #1'
    ])
  })

  it('changes the format according to the give format option', () => {
    expect(extractPRTitles(fixture, { format: '* {title} (#{number})' })).to.eql([
      '* Update README.md (#4)',
      '* Update README.md C (#3)',
      '* Update README.md (#2)',
      '* Update README.md A (#1)'
    ])
  })

  it('reverses the result if the reverse option is given', () => {
    expect(extractPRTitles(fixture, { reverse: true })).to.eql([
      'Update README.md A #1',
      'Update README.md #2',
      'Update README.md C #3',
      'Update README.md #4'
    ])
  })
})
