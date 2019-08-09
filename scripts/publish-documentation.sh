#!/usr/bin/env bash

cp -r ./build/es6-bundled/* ./doc/

git subtree push --prefix doc origin gh-pages
