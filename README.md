# App Semana Full Stack

Tem que rodar as pastas em terminais separados. >pets< é o frontend e >adote-um-pet< o backend.

Para rodar o frontend execute:

```shell
npm install
npm run dev
```

Para rodar o backend você precisa:

- Instalar o PHP no PC;
- Habilitar as extensões descomentando as seguintes linhas no php.ini:
  - extension=curl
  - extension=fileinfo
  - extension=mbstring
  - extension=openssl
  - extension=pdo_sqlite
  - extension_dir = "ext"

- Entre na pasta via terminal e execute os comandos:

```shell
composer install
composer dumpautoload -o
```

- Crie .env baseado na .env.example;

- Gerar a chave de acesso:

```shell
php artisan key:generate
```

- Rodar o servidor:

```shell
php artisan serve
```

[Pode-se seguir esse tutorial para tentar executá-lo.](https://medium.com/@colorfield/install-an-existing-laravel-project-c6e6bf28d5c6)

Houve uma tentativa de subir a aplicação pro Heroku, mas por algum erro envolvendo CORS ou as variáveis de ambiente do backend, acabou que não funcionou.

## Demo

[Demo](https://guibnpetsfront.herokuapp.com/)
