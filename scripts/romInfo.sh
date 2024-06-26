#!/bin/bash

for f in `ls -I *.zip`; do
    FILESIZE=$(stat -c%s "$f")
    SHA=$(sha256sum "${f}" | awk '{ print $1 }' )

    echo "{"
    echo "  fileName: '${f}',"
    echo "  size: ${FILESIZE},"
    echo "  sha: '${SHA}'"
    echo "},"

done



