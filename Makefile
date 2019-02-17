all:

.tmp:
	mkdir -p .tmp .tmp/schemas

.tmp/tsgen-go: .tmp
	git clone https://gist.github.com/cee88cc50c52f10abdd4ea02d29cc644.git "$@"

.tmp/schemas/aws-schema: .tmp/tsgen-go
	cd .tmp/tsgen-go && \
	./gen-custom.sh github.com/terraform-providers/terraform-provider-aws aws
	cp ~/.terraform.d/schemas/aws.json "$@"

src/generated/aws: .tmp/schemas/aws-schema
	node dist/generator/generate.js generate ~/.terraform.d/schemas/aws.json src/generated/aws

clean:
	find . -name '*.js' -delete
	find . -name '*.js.map' -delete
	rm -rf .tmp

