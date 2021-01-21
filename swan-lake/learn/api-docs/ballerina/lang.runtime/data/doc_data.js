var docData = {"packages":[{"isSingleFile":false,"name":"lang.runtime","orgName":"ballerina","version":"0.0.1","description":"## Module Overview\n\nThis module defines the lang.runtime apis.\n","summary":"This module defines the lang.runtime apis.","modules":[{"id":"lang.runtime","summary":"This module defines the lang.runtime apis.","description":"## Module Overview\n\nThis module defines the lang.runtime apis.\n","orgName":"ballerina","version":"0.0.1","records":[],"classes":[],"abstractObjects":[{"fields":[],"methods":[{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"\u0027start","description":"","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"gracefulStop","description":"","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"immediateStop","description":"","isDeprecated":false}],"name":"DynamicListener","description":"A listener that is dynamically registered with a module.\n","isDeprecated":false},{"fields":[],"methods":[{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"A StackFrame as a `string`\n","isDeprecated":false}],"name":"toString","description":"Returns a string representing the StackFrame.\n\n","isDeprecated":false}],"name":"StackFrame","description":"Represents a stack frame.\npublic type StackFrame readonly \u0026 object {\n","isDeprecated":false}],"clients":[],"listeners":[],"functions":[{"isIsolated":false,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.runtime","version":"0.0.1","name":"DynamicListener","category":"abstractObjects","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"\u0027listener","description":"","isDeprecated":false}],"returnParameters":[],"name":"deregisterListener","description":"Deregister a listener from a module.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"orgName":"ballerina","moduleName":"lang.runtime","version":"0.0.1","name":"StackFrame","category":"abstractObjects","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"","description":"An array representing the current call stack\n","isDeprecated":false}],"name":"getStackTrace","description":"Returns a stack trace for the current call stack.\n\n","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.runtime","version":"0.0.1","name":"DynamicListener","category":"abstractObjects","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"\u0027listener","description":"","isDeprecated":false}],"returnParameters":[],"name":"registerListener","description":"Register a listener object with a module.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"decimal","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"seconds","description":"An amount of time to sleep in seconds\n","isDeprecated":false}],"returnParameters":[],"name":"sleep","description":"Halts the current strand for a predefined amount of time.\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[],"enums":[]}]}]};