const fs = require('fs')
const util = require('util')
const path = require('path')
const handlebars = require('handlebars')
const yaml = require('js-yaml')
const Ajv = require('ajv/dist/2020')
const addFormats = require('ajv-formats')
const helpers = require('handlebars-helpers')({ handlebars })

const SCHEMA = require('./schema.json')

const ajv = new Ajv({
  allowUnionTypes: true,
  strict: false,
  strictTypes: true,
  strictTuples: true,
  validateSchema: true,
  validateFormats: true,
  allErrors: true
})

addFormats(ajv)

/*
 * Validate the data against the schema
 */
const validateFunction = ajv.compile(SCHEMA)
console.error('Reading YAML data file...')
const DATA = yaml.load(fs.readFileSync(path.resolve(__dirname, 'data.yaml'), 'utf8'))
console.error('Validating the data against the schema...')
if (!validateFunction(DATA)) {
  console.error('Validation failed')
  for (const error of validateFunction.errors) {
    console.error(`- [${error.instancePath}]: ${error.message}`)
  }
  process.exit(1)
}

for (const item of DATA) {
  for (const subitem of DATA) {
    if (!util.isDeepStrictEqual(item, subitem) && item.url === subitem.url) {
      console.error(`Duplicated URL: ${item.url}`)
      process.exit(1)
    }
  }
}

/*
 * Generate the README from the data
 */
console.error('Reading template...')
const template = fs.readFileSync(path.resolve(__dirname, 'template.hbs'), 'utf8')
console.error('Generating README...')
const output = handlebars.compile(template)({
  data: DATA,
  reverseSortBy: (...args) => {
    return helpers.sortBy(...args).reverse()
  }
})
fs.writeFileSync(path.resolve(__dirname, 'README.md'), output)
console.error('Done!')
