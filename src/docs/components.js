module.exports = {
    	"components": {
		"schemas": {
			"Users": {
				"type": "object",
				"properties": {
					"id": {
						"type": "integer",
						"format": "int64",
						"example": 10
					},
					"email": {
						"type": "string",
						"example": "john@email.com"
					},
					"password": {
						"type": "string",
						"example": "12345"
					},
					"fullname": {
						"type": "string",
						"example": "John James"
					},
					"dateOfBirth": {
						"type": "string",
						"format": "date",
						"example": "2002-01-01"
					}
				},
				"xml": {
					"name": "user"
				}
			}
		},
		"requestBodies": {
			"UserArray": {
				"description": "List of user object",
				"content": {
					"application/json": {
						"schema": {
							"type": "array",
							"items": {
								"$ref": "#/components/schemas/Users"
							}
						}
					}
				}
			}
		}
	}
}