#!/bin/sh

set -o errexit
set -o nounset

STATUS="$(git status -s)"

if [ -n "$STATUS" ]
then
  echo "These unstaged changes should not exist:" 1>&2
  echo "$STATUS" 1>&2
  git diff
  echo "Did you ran 'npm start' and committed back the results?" 1>&2
  exit 1
fi
