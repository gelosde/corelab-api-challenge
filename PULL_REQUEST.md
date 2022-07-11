# Base

1. Node: ^16.15.0
2. NPM: ^8.5.5
3. TypeORM: "0.2.45",
4. Banco de dados: postgree

# Bobliotecas

1.  "dotenv": "^16.0.0",
2.  "express": "^4.17.3",
3.  "faker": "^5.5.3",
4.  "got": ">=11.8.5",
5.  "nodemon": "^2.0.15",
6.  "pg": "^8.7.3",
7.  "reflect-metadata": "^0.1.13",
8.  "supertest": "^6.2.2",
9.  "typeorm": "0.2.45",
10. "uuid": "^8.3.2",
11. "yup": "^0.32.11"

# Instalação

### Opção 1

> yarn

### Opção 2

> npm install

# Rotas

## Metodo Post:

### Registrar um carro: http://localhost:3000/veicle/register

1. Corpo da requisição:
   {
<p>    name: "impala",
<p>    description: "One good car",
<p>    plate: "AB3e33",
<p>    isFavorite: true,
<p>    color: "black",
<p>    price_min: 19999.98,
<p>   price_max: 811111.66,
<p>   year: "07/11/1998",
<p>   };

2. Resposta e status code 201:
<p>    {
<p>    id:"xxxxxxxxxxxx"
<p>    name: "impala",
<p>    description: "One good car",
<p>    plate: "AB3e33",
<p>    isFavorite: true,
<p>    color: "black",
<p>    price_min: 19999.98,
<p>    price_max: 811111.66,
<p>    year: "07/11/1998",
<p>    };

## Metodo Get:

### Pegar um carro pela id: http://localhost:3000/veicle/see/:id_carro

1. Resposta e status code 302:
<br/>  {
<br/> id:"id_carro"
<br/> name: "xxxxx",
<br/> description: "xxxxxxxxxxxxxxxx",
<br/> plate: "xxxxxx",
<br/>  isFavorite: true,
<br/>  color: "xxxxx",
<br/>  price_min: xxxxx.xx,
<br/>  price_max: xxxxxx.xx,
<br/>  year: "xx/xx/xxxx",
<br/>    };

### Listar todos os carros: http://localhost:3000/veicle/list

1. Resposta array com lista de carros e status code 200
<br/>  [ {
<br/>  id:"xxxxxxxxxx"
<br/>  name: "xxxxx",
<br/>  description: "xxxxxxxxxxxxxxxx",
<br/>    plate: "xxxxxx",
<br/>    isFavorite: true,
<br/>    color: "xxxxx",
<br/>    price_min: xxxxx.xx,
<br/>    price_max: xxxxxx.xx,
<br/>    year: "xx/xx/xxxx",
<br/>    }, id:"xxxxxxxxxx"
<br/>   name: "xxxxx",
<br/>   description: "xxxxxxxxxxxxxxxx",
<br/>   plate: "xxxxxx",
<br/>   isFavorite: true,
<br/>   color: "xxxxx",
<br/>   price_min: xxxxx.xx,
<br/>   price_max: xxxxxx.xx,
<br/>   year: "xx/xx/xxxx",
<br/>   }, id:"xxxxxxxxxx"
<br/>   name: "xxxxx",
<br/>   description: "xxxxxxxxxxxxxxxx",
<br/>   plate: "xxxxxx",
<br/>   isFavorite: true,
<br/>   color: "xxxxx",
<br/>   price_min: xxxxx.xx,
<br/>   price_max: xxxxxx.xx,
<br/>   year: "xx/xx/xxxx",
<br/>   },]

## Metodo Patch:

### Atualizar informação dos carros: http://localhost:3000/veicle/update/:id_do_carro

Pode se colocar uma ou todas as informaçoes para atualizar menos a id do carro:

ex :

<br/>versão antiga:

<br/>{
<br/>id:"xxxxxxxxxx"
<br/>name: "xxxxx",
<br/>description: "xxxxxxxxxxxxxxxx",
<br/>plate: "xxxxxx",
<br/>isFavorite: true,
<br/>color: "xxxxx",
<br/>price_min: xxxxx.xx,
<br/>price_max: xxxxxx.xx,
<br/>year: "xx/xx/xxxx",
<br/>}

<br/>tentativa de atualizar usando a id correta e modificando a id:
<br/>{
<br/>id:"yyyyyyyyy"
<br/>name: "yyyyyy",
<br/>description: "yyyyyyyyyyyyyyyy",
<br/>plate: "yyyyyy",
<br/>isFavorite: false,
<br/>color: "yyyyyyyy",
<br/>price_min: yyyyyy.yy,
<br/>price_max: yyyyy.yy,
<br/>year: "yy/yy/yyyy",
<br/>}
<br/>Resposta e status code 200:

<br/>{
<br/>id:"xxxxxxxxxx"
<br/>name: "yyyyyy",
<br/>description: "yyyyyyyyyyyyyyyy",
<br/>plate: "yyyyyy",
<br/>isFavorite: false,
<br/>color: "yyyyyyyy",
<br/>price_min: yyyyyy.yy,
<br/>price_max: yyyyy.yy,
<br/>year: "yy/yy/yyyy",
<br/>}

## Metodo Delet:

### Apaga um carro pela id: http://localhost:3000/veicle/:id_to_delet

Resposta e status code 200:

<br/>{
<br/>id:"xxxxxxxxxx"
<br/>name: "xxxxx",
<br/>description: "xxxxxxxxxxxxxxxx",
<br/>plate: "xxxxxx",
<br/>isFavorite: true,
<br/>color: "xxxxx",
<br/>price_min: xxxxx.xx,
<br/>price_max: xxxxxx.xx,
<br/>year: "xx/xx/xxxx",
<br/>}
