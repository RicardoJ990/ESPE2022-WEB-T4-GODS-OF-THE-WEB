create database GRUPO_N_1_ACTIVIDAD_2_SGBD;

use GRUPO_N_1_ACTIVIDAD_2_SGBD;

create table TITULACIONES (
Cod_titulacion int primary key auto_increment,
Nombre varchar(50) not null,
Creditos int not null,
Nota_minima int not null,
Campus varchar(100) null
);

insert into TITULACIONES (Nombre, Creditos, Nota_minima, Campus)
values
('Superior','6','14','Sanngolqui'),
('Master','9','14','Norte'),
('Bachiller','7','7','Central');

select * from TITULACIONES;


create table CURSOS (
Cod_titulacion int ,
Cod_curso int auto_increment,
Max_alumnos varchar(2) not null,
constraint pk primary key (Cod_curso),
constraint fk foreign key (Cod_titulacion) references TITULACIONES(Cod_titulacion),
constraint unico unique(Cod_curso)
);

insert into CURSOS (Cod_titulacion, Max_alumnos)
values
(1,'32'),
(2,'20'),
(3,'23');

select * from CURSOS;


create table GRUPOS (
Cod_grupo int not null auto_increment,
Cod_titulacion int not null,
Curso varchar(10) not null,
Turno varchar(3) not null,
constraint pk1 primary key (Cod_grupo),
constraint fk1 foreign key (Cod_titulacion) references TITULACIONES(Cod_titulacion)
);


insert into GRUPOS (Cod_titulacion, Curso, Turno)
values
(2,'PRIMERO A','12'),
(1,'SEGUNDO A','43'),
(3,'SEGUNDO B','02');

select * from GRUPOS;


create table ASIGNATURAS (
Cod_asignatura int auto_increment,
Nombre_asig varchar(20) not null,
Cod_titulacion int not null,
Cod_curso int not null,
Horas_semanal varchar(10) null,
constraint pka primary key (Cod_asignatura),
constraint fka1 foreign key (Cod_titulacion) references TITULACIONES(Cod_titulacion),
constraint fka2 foreign key (Cod_curso) references CURSOS(Cod_curso)
);

insert into ASIGNATURAS (Nombre_asig, Cod_titulacion, Cod_curso, Horas_semanal)
values
('Fisica','3','3','6 horas'),
('Informatica','3','3',' 5 horas'),
('Base de datos','1','1','8 horas');

select * from ASIGNATURAS;

create table CLASIFICACIONES (
Categoria int auto_increment,
N_horas_max varchar(20) not null,
Salario varchar(10) not null,
constraint pkc primary key (Categoria)
);

insert into CLASIFICACIONES (N_horas_max, Salario)
values
('8 horas','$650'),
('16 horas','$1550');

select * from CLASIFICACIONES;


create table PROFESORES (
Cod_profesor int auto_increment,
Nombre varchar(20) not null,
Direccion varchar(50) not null,
Categoria int not null,
Telefono varchar (10) null,
E_mail varchar (100) not null,
Despacho varchar (20) not null,
constraint pkp primary key (Cod_profesor),
constraint fkp foreign key (Categoria) references CLASIFICACIONES(Categoria),
constraint un unique (E_mail)
);

insert into PROFESORES (Nombre, Direccion, Categoria, Telefono, E_mail, Despacho)
values
('Ricardo','Solanda','1','0987728712','ricardo12@gmail.com','Ciencias'),
('Jorge','Chillogallo','2','0951126342','jorgeargmail.com','Informatica'),
('Luis','Guamani','1','0961126412','luisantonio@gmail.com','Informatica');

select * from Profesores;


create table IMPARTIR (
Cod_asignatura int not null,
Cod_profesor int not null,
N_horas varchar(20) not null,
constraint pki primary key (Cod_asignatura, Cod_profesor),
constraint fki1 foreign key (Cod_asignatura) references ASIGNATURAS(Cod_asignatura),
constraint fki2 foreign key (Cod_profesor) references Profesores(Cod_profesor)
);

insert into IMPARTIR (Cod_asignatura, Cod_profesor, N_horas)
values
('1','1','15h30 - 17h30 '),
('2','2','12h00 - 13h00 '),
('3','2','19h00 - 21h00');

CREATE TABLE dbo.FragTestSequential
(ID           INT IDENTITY(1, 1) NOT NULL, 
 Name         NVARCHAR(50) NULL, 
 SomeData     NVARCHAR(200) NULL, 
 CretatedDate DATETIME NULL
);
GO

