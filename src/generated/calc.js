"use strict";
exports.__esModule = true;
exports.registerCalc = void 0;
var v3_1 = require("@fluencelabs/fluence/dist/internal/compilerSupport/v3");
function registerCalc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    v3_1.registerService(args, {
        "defaultServiceId": "calc",
        "functions": {
            "tag": "labeledProduct",
            "fields": {
                "add": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "n": {
                                "tag": "scalar",
                                "name": "f32"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "nil"
                    }
                },
                "divide": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "n": {
                                "tag": "scalar",
                                "name": "f32"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "nil"
                    }
                },
                "getResult": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "nil"
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "f32"
                            }
                        ]
                    }
                },
                "multiply": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "n": {
                                "tag": "scalar",
                                "name": "f32"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "nil"
                    }
                },
                "reset": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "nil"
                    },
                    "codomain": {
                        "tag": "nil"
                    }
                },
                "subtract": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "n": {
                                "tag": "scalar",
                                "name": "f32"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "nil"
                    }
                }
            }
        }
    });
}
exports.registerCalc = registerCalc;
// Functions
