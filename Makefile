.PHONY: all
all: 
	deno bundle app.tsx app.bundle.js
run: all
	deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts
