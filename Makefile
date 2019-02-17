all:

.tmp:
	mkdir -p .tmp .tmp/schemas

.tmp/tsgen-go: .tmp
	git clone https://gist.github.com/cee88cc50c52f10abdd4ea02d29cc644.git "$@"

# AWS
.tmp/schemas/aws.json: .tmp/tsgen-go
	cd .tmp/tsgen-go && \
	./gen-custom.sh github.com/terraform-providers/terraform-provider-aws aws
	cp ~/.terraform.d/schemas/aws.json "$@"

src/generated/aws: .tmp/schemas/aws.json
	node dist/generator/generate.js generate $? $@

# Template
.tmp/schemas/template.json: .tmp/tsgen-go
	cd .tmp/tsgen-go && \
	./gen-custom.sh github.com/terraform-providers/terraform-provider-template template
	cp ~/.terraform.d/schemas/template.json "$@"

src/generated/template: .tmp/schemas/template.json
	node dist/generator/generate.js generate $? $@

clean:
	find . -name '*.js' -delete
	find . -name '*.js.map' -delete
	rm -rf .tmp