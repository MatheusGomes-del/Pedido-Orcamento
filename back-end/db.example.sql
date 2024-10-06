DROP DATABASE IF EXISTS DB_PO;
CREATE DATABASE DB_PO;

USE DB_PO;

DROP TABLE clientes;
DROP TABLE pedidos;

-- Criar tabela de clientes

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE
);

-- Criar tabela de pedidos
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomeCliente VARCHAR(100),
    codCliente INT NOT NULL,
    data_pedido DATE,
    numped VARCHAR(100),
    pos CHAR(1),
    vlTotal DECIMAL(10,2),
    tipoPed VARCHAR(100),
    FOREIGN KEY (nomeCliente) REFERENCES clientes(nome)
);

-- Incluir dados nas tabelas clientes

INSERT INTO  clientes (nome, cpf ) VALUES ('MATHEUS SANTOS GOMES', '56583619075');
INSERT INTO  clientes (nome, cpf ) VALUES ('CECILIA ELOA SANTOS FELIX', '64943398758');
INSERT INTO  clientes (nome, cpf ) VALUES ('MARCOS RODRIGO DA SILVA', '88828857986');
INSERT INTO  clientes (nome, cpf ) VALUES ('MARIA JOANA FERREIRA', '34576587690');

-- Incluir dados nas tabelas pedidos


INSERT INTO pedidos (codCliente, nomeCliente, data_pedido, numped, pos, vlTotal, tipoPed ) 
VALUES (1,'MATHEUS SANTOS GOMES',  NOW(), '11111111', 'B', 535.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '90823987', 'L', 345.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '34822568', 'L', 432.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '45623498', 'L', 567.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(),'987567312', 'L', 373.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '12112343', 'L', 975.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '99876787', 'L', 967.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '88876787', 'L', 888.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '45620987', 'L', 900.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '02948437', 'L', 100.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '98400989', 'L', 150.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '00023090', 'L', 109.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '33343564', 'L', 178.80, 'O'  ),
       (1,'MATHEUS SANTOS GOMES', NOW(), '66547645', 'M', 123.80, 'P'  ),
       (1,'MATHEUS SANTOS GOMES',  NOW(), '87777777', 'C', 780.20, 'O'  ),
       (2,'CECILIA ELOA SANTOS FELIX', NOW(), '91888476', 'L', 884.80, 'P'),
       (2,'CECILIA ELOA SANTOS FELIX',  NOW(), '86322170', 'B', 124.80, 'O'),
       (2,'CECILIA ELOA SANTOS FELIX',  NOW(), '70538128', 'M', 890.80, 'P'  ),
       (3,'MARCOS RODRIGO DA SILVA',  NOW(), '16980318', 'C', 890.80, 'P'  ),
       (3,'MARCOS RODRIGO DA SILVA', NOW(), '16980418', 'M', 830.80, 'P'  ),
       (3,'MARCOS RODRIGO DA SILVA',  NOW(), '16980518', 'L', 850.80, 'P'  ),
       (3,'MARCOS RODRIGO DA SILVA',  NOW(), '16980618', 'L', 870.80, 'O'  ),
       (3,'MARCOS RODRIGO DA SILVA',  NOW(), '16980718', 'B', 810.80, 'O'  ),
       (4,'MARIA JOANA FERREIRA',  NOW(), '16983418', 'M', 935.80, 'P'  );