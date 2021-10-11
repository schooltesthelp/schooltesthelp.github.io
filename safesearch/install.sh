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
wget https://schooltesthelp.github.io/safesearch/ssh/styles.css
echo ''
echo ''
wget https://schooltesthelp.github.io/safesearch/ssh/sw.js
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo ''
echo 'Creating server'
# 1. Create ProgressBar function
# 1.1 Input is currentState($1) and totalState($2)
function ProgressBar {
# Process data
    let _progress=(${1}*100/${2}*100)/100
    let _done=(${_progress}*4)/10
    let _left=40-$_done
# Build progressbar string lengths
    _fill=$(printf "%${_done}s")
    _empty=$(printf "%${_left}s")

# 1.2 Build progressbar strings and print the ProgressBar line
# 1.2.1 Output example:                           
# 1.2.1.1 Progress : [########################################] 100%
printf "\rProgress : [${_fill// /#}${_empty// /-}] ${_progress}%%"

}

# Variables
_start=1

# This accounts as the "totalState" variable for the ProgressBar function
_end=100

# Proof of concept
for number in $(seq ${_start} ${_end})
do
    sleep 0.1
    ProgressBar ${number} ${_end}
done
printf '\nType localhost:5000 to open\n'
nohup python3 -m http.server 5000
