# App-SemanaFullstack
 
tem que rodar cada 1 das pastas em terminais separados, <pets> é o frontend e o >adote-um-pet< é o back, para fazer funcionar o front bastar dar npm install dps npm run dev

para fazer o back funcionar precisará ter php instalado no pc, habilitado as extenções através da retirada dos ; dos comentarios a seguir no arquivo php.ini:
- extension=curl
- extension=fileinfo
- extension=mbstring
- extension=openssl
- extension=pdo_sqlite

e 
- extension_dir = "ext"

feito isso, voce pode entrar na pasta pelo terminal,composer install e composer dumpautoload -o

gerar a chave de acesso

php artisan key:generate

e tentar rodar o servidor com o comando php artisan serve

pode-se seguir esse tutorial para tentar executá-lo
https://medium.com/@colorfield/install-an-existing-laravel-project-c6e6bf28d5c6

eu tentei subir a aplicação pro heroku mas por algum erro envolvendo CORS ou as variáveis de ambiente do backend acabou que não funcionou. o Link é https://guibnpetsfront.herokuapp.com/ para visualizar o projeto, caso queira ver.