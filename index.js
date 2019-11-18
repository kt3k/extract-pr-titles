const git = require('simple-git')(process.cwd())

const main = ({ to, from }) => {
  git.log({ to, from }, (err, result) => {
    console.log(err)
    console.log(result)
  })
}

require('minimisted')(main, {
  string: ['to', 'from']
})
