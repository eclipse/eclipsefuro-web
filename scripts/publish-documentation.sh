#!/usr/bin/env bash

polymer build
cp -r ./build/es6-bundled/* ./docs/

cd docs
echo "Check before commit"

superstatic
