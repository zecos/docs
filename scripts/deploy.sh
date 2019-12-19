#!/bin/bash

yarn build
cd build
git init
git remote add git@github.com:zecos/zecos.github.io
git add . -A
git push -f -u origin master