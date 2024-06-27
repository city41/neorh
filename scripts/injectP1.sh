#!/bin/bash -x

GAME='kof94'

rm -rf injectP1

mkdir injectP1

cp ${MAME_ROM_DIR}/${GAME}.zip injectP1
(cd injectP1 && unzip ${GAME}.zip)

cp 055-p1.p1 injectP1

(cd injectP1 && rm -rf ${GAME}.zip && zip ${GAME}.zip *)

cp injectP1/${GAME}.zip ${MAME_ROM_DIR}