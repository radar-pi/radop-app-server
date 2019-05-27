#!/bin/bash
#
# Purpose: Continuous deploy on production environment
#
# Author: João Pedro Sconetto <sconetto.joao@gmail.com>

docker build -t radop-app-server:latest .

docker tag radop-app-server:latest radop/radop-app-server:latest

docker push radop/radop-app-server:latest