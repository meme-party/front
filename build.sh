#!/bin/sh
cd ../
mkdir output

cp -R ./front/* ./output

cp ./front/.gitignore ./output
cp ./front/.prettierrc.json ./output

cp -R ./output ./front/