#!/bin/bash

grunt > tmp &

while true
do
	if cat tmp | grep "Server is listening on port [0-9][0-9]*" > /dev/null
	then
		exit 0
	fi
	sleep 1
done
