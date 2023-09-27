const definition = {
	openapi: "3.0.0",
	info: {
		title: "API - ADM - Desktop",
		version: "1.0.0",
		description: "API para administrar atualizações da Versão Desktop",
        contact: {
            email: 'valdo@setes.com.br'
        }		
	},
	servers: [
		{
			url: process.env.PATH_URL_API,
		},
	],	
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
  };
  
  module.exports = {
	definition,
	apis: ['./app/routes/*.js'],
}