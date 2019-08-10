#!/usr/bin/env bash

npm run doc

polymer build
cp -r ./build/es6-bundled/* ./docs/

cd docs
echo "Check before commit"

superstatic
