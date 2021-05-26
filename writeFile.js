const fs = require('fs')

function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}() {
            
        }`
  )
}

module.export = writeFile
