### `JWT`, resumidamente, é uma string de caracteres que, caso cliente e servidor estejam sob `HTTPS`, permite que somente o servidor que conhece o ‘segredo’ possa validar o conteúdo do token e assim confirmar a autenticidade do cliente. O token não é “criptografado”, mas “assinado”, de forma que só com o secret essa assinatura possa ser comprovada, o que impede que atacantes “criem” tokens por conta própria.

Caso você não saiba a diferença, autenticação é você provar que você é você mesmo. Já autorização é você provar que possui permissão para fazer ou ver o que você está tentando.

`jsonwebtoken`: pacote que implementa o protocolo JSON Web Token;

`dotenv-safe`: pacote para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.