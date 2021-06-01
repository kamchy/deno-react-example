.PHONY: all
all: 
	deno bundle app.tsx app.bundle.js
run: all
	python3 -m http.server

