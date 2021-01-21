var docData = {"packages":[{"isSingleFile":false,"name":"docker","orgName":"ballerina","version":"1.0.0","description":"## Module Overview\n\nThis module offers an annotation based docker extension implementation for Ballerina. \n\n- For information on the operations, which you can perform with this module, see [Records](/swan-lake/learn/api-docs/ballerina/docker/index.html#records). \n- For information on the deploymenr, see the [Docker Deployemnt Guide](/swan-lake/learn/deployment/docker/).\n- For examples on the usage of the operations, see the [Docker Deployment Example](/swan-lake/learn/by-example/docker-deployment.html).\n\n### Annotation Usage Sample:\n```ballerina\nimport ballerina/http;\nimport ballerina/log;\nimport ballerina/docker;\n\n@docker:Expose{}\nlistener http:Listener helloWorldEP \u003d new(9090);\n\n@docker:Config {\n    registry: \"docker.abc.com\",\n    name: \"helloworld\",\n    tag: \"v1.0\"\n}\nservice http:Service /helloWorld on helloWorldEP {\n    resource function get sayHello(http:Caller caller) {\n        var responseResult \u003d caller-\u003erespond(\"Hello, World! \\n\");\n        if (responseResult is error) {\n            log:printError(\"error responding back to client.\", err \u003d responseResult);\n        }\n    }\n}\n```\n","summary":"This module offers an annotation based docker extension implementation for Ballerina.\n","modules":[{"id":"docker","summary":"This module offers an annotation based docker extension implementation for Ballerina.\n","description":"## Module Overview\n\nThis module offers an annotation based docker extension implementation for Ballerina. \n\n- For information on the operations, which you can perform with this module, see [Records](/swan-lake/learn/api-docs/ballerina/docker/index.html#records). \n- For information on the deploymenr, see the [Docker Deployemnt Guide](/swan-lake/learn/deployment/docker/).\n- For examples on the usage of the operations, see the [Docker Deployment Example](/swan-lake/learn/by-example/docker-deployment.html).\n\n### Annotation Usage Sample:\n```ballerina\nimport ballerina/http;\nimport ballerina/log;\nimport ballerina/docker;\n\n@docker:Expose{}\nlistener http:Listener helloWorldEP \u003d new(9090);\n\n@docker:Config {\n    registry: \"docker.abc.com\",\n    name: \"helloworld\",\n    tag: \"v1.0\"\n}\nservice http:Service /helloWorld on helloWorldEP {\n    resource function get sayHello(http:Caller caller) {\n        var responseResult \u003d caller-\u003erespond(\"Hello, World! \\n\");\n        if (responseResult is error) {\n            log:printError(\"error responding back to client.\", err \u003d responseResult);\n        }\n    }\n}\n```\n","orgName":"ballerina","version":"1.0.0","records":[{"fields":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"registry","description":"Docker registry url.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"Name of the docker image. Default value is the file name of the executable .jar file.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"tag","description":"Docker image tag. Default value is `\"latest\"`.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"username","description":"Username for docker registry.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"password","description":"Password for docker registry.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"baseImage","description":"Base image to create the docker image. Default value is `\"ballerina/jre8:v1\"`.\n","isDeprecated":false},{"defaultValue":"true","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"buildImage","description":"Enable building docker image. Default value is `true`.\n","isDeprecated":false},{"defaultValue":"false","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"push","description":"Enable pushing docker image to registry. Field `buildImage` must be set to `true` to be effective. Default value is `false`.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"cmd","description":"Value for CMD for the generated Dockerfile. Default is `CMD java -jar ${APP} [--b7a.config.file\u003d${CONFIG_FILE}] [--debug]`.\n","isDeprecated":false},{"defaultValue":"false","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"enableDebug","description":"Enable ballerina debug. Default is `false`.\n","isDeprecated":false},{"defaultValue":"5005","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"debugPort","description":"Ballerina remote debug port. Default is `5005`.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"dockerAPIVersion","description":"Docker API version.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"dockerHost","description":"Docker host IP and docker PORT. (e.g minikube IP and docker PORT).\nDefault is to use DOCKER_HOST environment variable.\nIf DOCKER_HOST is unavailable, use `\"unix:///var/run/docker.sock\"` for Unix or use `\"tcp://localhost:2375\"` for Windows.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"dockerCertPath","description":"Docker certificate path. Default is to use `\"DOCKER_CERT_PATH\"` environment variable.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"map","category":"map","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"constraint":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"float","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"decimal","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}},"name":"env","description":"Environment variables for container.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"dockerConfigPath","description":"Docker config file path.\n","isDeprecated":false},{"defaultValue":"","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"uberJar","description":"Use ballerina uber jar. Default is `false`.\n","isDeprecated":false}],"isClosed":true,"name":"DockerConfiguration","description":"Docker annotation configuration.\n\n","isDeprecated":false},{"fields":[],"isClosed":true,"name":"ExposeConfig","description":"Expose ports for docker.\n","isDeprecated":false},{"fields":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"sourceFile","description":"Source path of the file (in your machine).\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"target","description":"Target path (inside container).\n","isDeprecated":false},{"defaultValue":"false","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"isBallerinaConf","description":"Flag to specify ballerina config file. When true, the config is passed as a command argument to the Dockerfile CMD.\n","isDeprecated":false}],"isClosed":true,"name":"FileConfig","description":"External file type for docker.\n\n","isDeprecated":false},{"fields":[{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"orgName":"ballerina","moduleName":"docker","version":"1.0.0","name":"FileConfig","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"files","description":"Array of file configurations.\n","isDeprecated":false}],"isClosed":true,"name":"FileConfigs","description":"External File configurations for docker.\n\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[],"constants":[],"annotations":[{"type":{"orgName":"ballerina","moduleName":"docker","version":"1.0.0","name":"DockerConfiguration","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"source service, source listener, source function","name":"Config","description":"@docker:Config annotation to configure docker artifact generation.\n","isDeprecated":false},{"type":{"orgName":"ballerina","moduleName":"docker","version":"1.0.0","name":"FileConfigs","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"source service, source listener, source function","name":"CopyFiles","description":"@docker:CopyFile annotation to copy external files to docker image.\n","isDeprecated":false},{"type":{"orgName":"ballerina","moduleName":"docker","version":"1.0.0","name":"ExposeConfig","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"attachmentPoints":"source listener","name":"Expose","description":"@docker:Expose annotation to expose ballerina ports.\n","isDeprecated":false}],"errors":[],"types":[],"enums":[]}]}]};