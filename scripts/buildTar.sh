#!/bin/bash

echo "Creating Tar Archive \n"

currentDir=$(pwd)
RepoName="$(git config --get remote.origin.url)"
Project=$(echo "$RepoName" | awk -F'murph406/' '{print $2}') 
Project=$(echo "$Project" | awk -F'.git' '{print $1}') 

tar -cvf "$currentDir/public/$Project".tar --exclude=.git --exclude=node_modules --exclude=*.tar . 

exit