const fs = require('fs')

const functionName = process.argv[2] ?? 'myFunction'

writeFile(functionName)
