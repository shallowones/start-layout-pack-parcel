const deepFiles = require('deep-files')

module.exports = {
  pretty: true,
  locals: {
    pages: deepFiles('src/pages', '*[!system].pug').reduce((acc, pathToPage) => {
      const match = pathToPage.match(/((\d|\w|-|_)+).pug/)

      if (match && typeof match[1] === 'string') {
        acc.push(match[1])
      }

      return acc
    }, []),
  },
}
