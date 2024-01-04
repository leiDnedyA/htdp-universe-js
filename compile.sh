#!/usr/bin/env bash

rm -rf js-build

racks -b -r -t plain src/js-wrapper.rkt

exit 0
