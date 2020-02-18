const { readFileSync, writeFileSync } = require('fs')
const deepFiles = require('deep-files')

const { main } = JSON.parse(readFileSync('package.json').toString())
const pathToPages = (() => {
  const result = main.split('/')

  result.pop()

  return result.join('/')
})()

deepFiles(pathToPages).forEach(filePath => {
  const fileData = readFileSync(filePath)
    .toString()
    .replace(/="\S+(\\)\S+"/g, (match, p) => match.replace(p, '/'))

  writeFileSync(filePath, fileData)
})
