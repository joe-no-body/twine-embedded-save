SRC_DIR := src
TWEECMD := tweego
TFLAGS := -f sugarcube-2 -c utf-8
OUT = main.html
SRC = src
TWEE := $(TWEECMD) $(TFLAGS) -o $(OUT) $(SRC)
BROWSER = vivaldi

.ONESHELL:
SHELL = /usr/bin/bash

default: build open

.PHONY: build
build:
	$(TWEE)

.PHONY: watch
watch:
	$(TWEE) -w

.PHONY: open
open:
	$(BROWSER) main.html &>/dev/null
