all:

genaws:
	node dist/generator/generate.js generate ~/.terraform.d/schemas/aws.json > src/client/aws.ts

clean:
	find . -name '*.js' -delete
	find . -name '*.js.map' -delete