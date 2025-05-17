grammar Lenguaje;

// -------- TOKENS --------
INICIO: 'inicio';
IMPRIMIR: 'imprimir';
PROCESAR: 'procesar';
MANEJARERROR: 'manejarError';

IGUAL: '=';
PUNTOYCOMA: ';';
MAS: '+';
MENOS: '-';
POR: '*';
DIV: '/';
PARENIZQ: '(';
PARENDEREC: ')';
LLAVEI: '{';
LLAVED: '}';

STRING: '"' (~["\\] | '\\' .)* '"';
NUMERO: DIGITO+ ('.' DIGITO+)?;

IDENTIFICADOR: LETRA (LETRA | DIGITO | '_')*;

ESPACIO: [ \t\r\n]+ -> skip;

fragment LETRA: [a-zA-Z];
fragment DIGITO: [0-9];

// -------- SINTAXIS --------

prog: stat+;

stat: INICIO saludo LLAVEI instrucciones LLAVED;

saludo: IDENTIFICADOR;

instrucciones: instruccion*;

instruccion
    : asignacion
    | excepcion
    | bloque
    | imprimir
    ;

asignacion: IDENTIFICADOR IGUAL expresion PUNTOYCOMA;

excepcion: PROCESAR bloque MANEJARERROR PARENIZQ IDENTIFICADOR PARENDEREC bloque;

bloque: LLAVEI instrucciones LLAVED;

imprimir: IMPRIMIR PARENIZQ expresion PARENDEREC PUNTOYCOMA;

expresion
    : expresion op=(POR | DIV) expresion     # MulDiv
    | expresion op=(MAS | MENOS) expresion   # AddSub
    | PARENIZQ expresion PARENDEREC          # Parens
    | IDENTIFICADOR                          # Id
    | NUMERO                                 # Number
    | STRING                                 # Str
    ;
