var searchData = {
  "modules": [
    {
      "id": "jwt",
      "description": "This module provides an inbound and outbound JWT authentication provider, which can be used to authenticate using a JWT and the functionality related to issuing and validating JWT.",
      "orgName": "ballerina",
      "version": "1.0.7"
    }
  ],
  "classes": [
    {
      "id": "ClientSelfSignedJwtAuthProvider",
      "description": "Represents the client JWT Auth provider, which is used to authenticate with an external endpoint by generating\na self signed JWT.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "ListenerJwtAuthProvider",
      "description": "Represents the listener JWT Auth provider, which authenticates by validating a JWT.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "functions": [
    {
      "id": "decode",
      "description": "Decodes the provided JWT string.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "issue",
      "description": "Issues a JWT based on the provided header and payload.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "validate",
      "description": "Validates the provided JWT against the provided configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "records": [
    {
      "id": "ClientConfiguration",
      "description": "Represents the configurations of the client used to call the JWKs endpoint.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "Header",
      "description": "Represents JWT header.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "IssuerConfig",
      "description": "Represents JWT issuer configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "JwksConfig",
      "description": "Represents the JWKs endpoint configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "KeyStoreConfig",
      "description": "Represents JWT key store configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "Payload",
      "description": "Represents JWT payload.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "SecureSocket",
      "description": "Represents the SSL/TLS configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "TrustStoreConfig",
      "description": "Represents JWT trust store configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "ValidatorConfig",
      "description": "Represents JWT validator configurations.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "constants": [
    {
      "id": "NONE",
      "description": "Unsecured JWTs (no signing)\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "RS256",
      "description": "The `RSA-SHA256` algorithm\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "RS384",
      "description": "The `RSA-SHA384` algorithm\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "RS512",
      "description": "The `RSA-SHA512` algorithm\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "errors": [
    {
      "id": "Error",
      "description": "Represents the JWT error type with details.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    },
    {
      "id": "JwtError",
      "description": "Represents the JWT distinct error\n",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "types": [
    {
      "id": "SigningAlgorithm",
      "description": "The key algorithms supported by crypto module.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ],
  "clients": [],
  "listeners": [],
  "annotations": [],
  "abstractObjects": [],
  "enums": [
    {
      "id": "HttpVersion",
      "description": "Represents HTTP versions.",
      "moduleId": "jwt",
      "moduleOrgName": "ballerina",
      "moduleVersion": "1.0.7"
    }
  ]
};