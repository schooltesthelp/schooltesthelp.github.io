#!/bin/bash
echo 'Installing SafeSearch on Unix-like operating system...'
echo ''
mkdir safesearch
cd safesearch
wget https://schooltesthelp.github.io/safesearch/ssh/index.html
echo ''
echo ''
wget https://schooltesthelp.github.io/safesearch/ssh/app.js
echo ''
echo ''
wget https://schooltesthelp.github.io/safesearch/ssh/safesearch.webmanifest
echo ''
echo ''
wget https://schooltesthelp.github.io/safesearch/styles.css
echo ''
echo ''
wget https://schooltesthelp.github.io/safesearch/sw.js
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
nohup python3 -m http.server 55550
rm -- "$0"
