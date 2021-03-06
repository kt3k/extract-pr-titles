#!/usr/bin/env node
const git = require('simple-git')(process.cwd())
const extractPRTitles = require('../index.js')

const main = ({ to, from, format, reverse, symmetric }) => {
  git.log({ to, from, symmetric }, (err, result) => {
    if (err) {
      console.log(err)
      return process.exit(1)
    }
    for (const title of extractPRTitles(result.all, { format, reverse })) {
      console.log(title)
    }
  })
}

require('minimisted')(main, {
  string: ['to', 'from', 'format'],
  boolean: ['reverse', 'symmetric'],
  alias: {
    r: 'reverse'
  }
})
