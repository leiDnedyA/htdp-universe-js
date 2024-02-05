#!/usr/bin/env bash

# Create HTML docs
npx jsdoc -c jsdoc_conf.json -d docs ./docs-input/main.js --readme README.md

# Create markdown docs
npx jsdoc2md docs-input/main.js > docs-markdown/DOCS.md

exit 0
