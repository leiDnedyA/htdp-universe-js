#!/usr/bin/env bash

# Create HTML docs
echo "Generating HTML docs with jsdoc..."
npx jsdoc -c jsdoc_conf.json -d docs ./docs-input/main.js --readme README.md
echo "Done :)"

# Create markdown docs
echo "Generating markdown docs with jsdoc2md..."
npx jsdoc2md docs-input/main.js > docs-markdown/DOCS.md
echo "Done :)"

exit 0
