# Full Stack Week APp

It needs to run each folder in separate terminals, >pets< for the frontend and >adote-um-pet< for the backend.

To run the frontend, use:

```shell
npm install
npm run dev
```

To run the backend:

- Install PHP in your PC;
- Enable extensions by uncommenting the following lines in the php.ini file:
  - extension=curl
  - extension=fileinfo
  - extension=mbstring
  - extension=openssl
  - extension=pdo_sqlite
  - extension_dir = "ext"

- Enter the folder via terminal and use the following commands:

```shell
composer install
composer dumpautoload -o
```

- Create .env based on .env.example;

- Get access key:

```shell
php artisan key:generate
```

And try to run the server using the following command:

```shell
php artisan serve
```

[You may try to use this tutorial to run it.](https://medium.com/@colorfield/install-an-existing-laravel-project-c6e6bf28d5c6)

We tried to deploy the app to Heroku but some error regarding CORS or missing environment variables from the backend.

## Demo

[Demo](https://guibnpetsfront.herokuapp.com/)
