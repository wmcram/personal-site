#!/bin/bash
# Usage: ./convert_blog.sh <filename> <title>
pandoc -s "blog/$1".md -o "blog/$1.html" --template="blog/.template.html" --metadata title="$2"
sed -i "/<\/ul>/i \  \t\t\t<li><a href=\"blog/$1.html\">$2</a></li>" blog.html