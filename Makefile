.PHONY: test

SRC = $(shell find src -name "*.js" -type f | sort)
LIB = $(patsubst src/%.js, lib/%.js, $(SRC))

BABEL = ./node_modules/.bin/babel

default: all

lib:
	mkdir -p lib/

lib/%.js: src/%.js lib
	$(BABEL) "$<" > lib/$(notdir $<)

all: compile

compile: $(LIB) package.json

uninstall:
	npm uninstall -g ${NAME}

dev-install: package.json
	npm install .

clean:
	rm -rf lib

publish: all test
	git push --tags origin HEAD:master
	npm publish
