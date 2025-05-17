// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,18,90,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,5,3,35,8,3,10,3,12,3,38,9,3,1,4,1,4,1,4,
1,4,3,4,44,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,77,
8,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,85,8,9,10,9,12,9,88,9,9,1,9,0,1,18,10,0,
2,4,6,8,10,12,14,16,18,0,2,1,0,9,10,1,0,7,8,89,0,21,1,0,0,0,2,25,1,0,0,0,
4,31,1,0,0,0,6,36,1,0,0,0,8,43,1,0,0,0,10,45,1,0,0,0,12,50,1,0,0,0,14,58,
1,0,0,0,16,62,1,0,0,0,18,76,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,
0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,26,5,1,0,0,26,27,3,4,2,
0,27,28,5,13,0,0,28,29,3,6,3,0,29,30,5,14,0,0,30,3,1,0,0,0,31,32,5,17,0,
0,32,5,1,0,0,0,33,35,3,8,4,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,
37,1,0,0,0,37,7,1,0,0,0,38,36,1,0,0,0,39,44,3,10,5,0,40,44,3,12,6,0,41,44,
3,14,7,0,42,44,3,16,8,0,43,39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,
1,0,0,0,44,9,1,0,0,0,45,46,5,17,0,0,46,47,5,5,0,0,47,48,3,18,9,0,48,49,5,
6,0,0,49,11,1,0,0,0,50,51,5,3,0,0,51,52,3,14,7,0,52,53,5,4,0,0,53,54,5,11,
0,0,54,55,5,17,0,0,55,56,5,12,0,0,56,57,3,14,7,0,57,13,1,0,0,0,58,59,5,13,
0,0,59,60,3,6,3,0,60,61,5,14,0,0,61,15,1,0,0,0,62,63,5,2,0,0,63,64,5,11,
0,0,64,65,3,18,9,0,65,66,5,12,0,0,66,67,5,6,0,0,67,17,1,0,0,0,68,69,6,9,
-1,0,69,70,5,11,0,0,70,71,3,18,9,0,71,72,5,12,0,0,72,77,1,0,0,0,73,77,5,
17,0,0,74,77,5,16,0,0,75,77,5,15,0,0,76,68,1,0,0,0,76,73,1,0,0,0,76,74,1,
0,0,0,76,75,1,0,0,0,77,86,1,0,0,0,78,79,10,6,0,0,79,80,7,0,0,0,80,85,3,18,
9,7,81,82,10,5,0,0,82,83,7,1,0,0,83,85,3,18,9,6,84,78,1,0,0,0,84,81,1,0,
0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,19,1,0,0,0,88,86,1,0,0,
0,6,23,36,43,76,84,86];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'inicio'", "'imprimir'", "'procesar'", 
                            "'manejarError'", "'='", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "INICIO", "IMPRIMIR", "PROCESAR", "MANEJARERROR", 
                             "IGUAL", "PUNTOYCOMA", "MAS", "MENOS", "POR", 
                             "DIV", "PARENIZQ", "PARENDEREC", "LLAVEI", 
                             "LLAVED", "STRING", "NUMERO", "IDENTIFICADOR", 
                             "ESPACIO" ];
    static ruleNames = [ "prog", "stat", "saludo", "instrucciones", "instruccion", 
                         "asignacion", "excepcion", "bloque", "imprimir", 
                         "expresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expresion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.stat();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(LenguajeParser.INICIO);
	        this.state = 26;
	        this.saludo();
	        this.state = 27;
	        this.match(LenguajeParser.LLAVEI);
	        this.state = 28;
	        this.instrucciones();
	        this.state = 29;
	        this.match(LenguajeParser.LLAVED);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saludo() {
	    let localctx = new SaludoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_saludo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(LenguajeParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 139276) !== 0)) {
	            this.state = 33;
	            this.instruccion();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.asignacion();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.excepcion();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.bloque();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(LenguajeParser.IDENTIFICADOR);
	        this.state = 46;
	        this.match(LenguajeParser.IGUAL);
	        this.state = 47;
	        this.expresion(0);
	        this.state = 48;
	        this.match(LenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(LenguajeParser.PROCESAR);
	        this.state = 51;
	        this.bloque();
	        this.state = 52;
	        this.match(LenguajeParser.MANEJARERROR);
	        this.state = 53;
	        this.match(LenguajeParser.PARENIZQ);
	        this.state = 54;
	        this.match(LenguajeParser.IDENTIFICADOR);
	        this.state = 55;
	        this.match(LenguajeParser.PARENDEREC);
	        this.state = 56;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_bloque);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(LenguajeParser.LLAVEI);
	        this.state = 59;
	        this.instrucciones();
	        this.state = 60;
	        this.match(LenguajeParser.LLAVED);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(LenguajeParser.IMPRIMIR);
	        this.state = 63;
	        this.match(LenguajeParser.PARENIZQ);
	        this.state = 64;
	        this.expresion(0);
	        this.state = 65;
	        this.match(LenguajeParser.PARENDEREC);
	        this.state = 66;
	        this.match(LenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, LenguajeParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 69;
	            this.match(LenguajeParser.PARENIZQ);
	            this.state = 70;
	            this.expresion(0);
	            this.state = 71;
	            this.match(LenguajeParser.PARENDEREC);
	            break;
	        case 17:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(LenguajeParser.IDENTIFICADOR);
	            break;
	        case 16:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 74;
	            this.match(LenguajeParser.NUMERO);
	            break;
	        case 15:
	            localctx = new StrContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 75;
	            this.match(LenguajeParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expresion);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 79;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 80;
	                    this.expresion(7);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expresion);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 82;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 83;
	                    this.expresion(6);
	                    break;

	                } 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.INICIO = 1;
LenguajeParser.IMPRIMIR = 2;
LenguajeParser.PROCESAR = 3;
LenguajeParser.MANEJARERROR = 4;
LenguajeParser.IGUAL = 5;
LenguajeParser.PUNTOYCOMA = 6;
LenguajeParser.MAS = 7;
LenguajeParser.MENOS = 8;
LenguajeParser.POR = 9;
LenguajeParser.DIV = 10;
LenguajeParser.PARENIZQ = 11;
LenguajeParser.PARENDEREC = 12;
LenguajeParser.LLAVEI = 13;
LenguajeParser.LLAVED = 14;
LenguajeParser.STRING = 15;
LenguajeParser.NUMERO = 16;
LenguajeParser.IDENTIFICADOR = 17;
LenguajeParser.ESPACIO = 18;

LenguajeParser.RULE_prog = 0;
LenguajeParser.RULE_stat = 1;
LenguajeParser.RULE_saludo = 2;
LenguajeParser.RULE_instrucciones = 3;
LenguajeParser.RULE_instruccion = 4;
LenguajeParser.RULE_asignacion = 5;
LenguajeParser.RULE_excepcion = 6;
LenguajeParser.RULE_bloque = 7;
LenguajeParser.RULE_imprimir = 8;
LenguajeParser.RULE_expresion = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_stat;
    }

	INICIO() {
	    return this.getToken(LenguajeParser.INICIO, 0);
	};

	saludo() {
	    return this.getTypedRuleContext(SaludoContext,0);
	};

	LLAVEI() {
	    return this.getToken(LenguajeParser.LLAVEI, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVED() {
	    return this.getToken(LenguajeParser.LLAVED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaludoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_saludo;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSaludo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSaludo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSaludo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(LenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(LenguajeParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJARERROR() {
	    return this.getToken(LenguajeParser.MANEJARERROR, 0);
	};

	PARENIZQ() {
	    return this.getToken(LenguajeParser.PARENIZQ, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	PARENDEREC() {
	    return this.getToken(LenguajeParser.PARENDEREC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_bloque;
    }

	LLAVEI() {
	    return this.getToken(LenguajeParser.LLAVEI, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVED() {
	    return this.getToken(LenguajeParser.LLAVED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeParser.IMPRIMIR, 0);
	};

	PARENIZQ() {
	    return this.getToken(LenguajeParser.PARENIZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PARENDEREC() {
	    return this.getToken(LenguajeParser.PARENDEREC, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(LenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StrContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(LenguajeParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterStr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitStr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitStr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.StrContext = StrContext;

class NumberContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.NumberContext = NumberContext;

class MulDivContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	POR() {
	    return this.getToken(LenguajeParser.POR, 0);
	};

	DIV() {
	    return this.getToken(LenguajeParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.MulDivContext = MulDivContext;

class AddSubContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	MAS() {
	    return this.getToken(LenguajeParser.MAS, 0);
	};

	MENOS() {
	    return this.getToken(LenguajeParser.MENOS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AddSubContext = AddSubContext;

class ParensContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PARENIZQ() {
	    return this.getToken(LenguajeParser.PARENIZQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PARENDEREC() {
	    return this.getToken(LenguajeParser.PARENDEREC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.ParensContext = ParensContext;

class IdContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.IdContext = IdContext;


LenguajeParser.ProgContext = ProgContext; 
LenguajeParser.StatContext = StatContext; 
LenguajeParser.SaludoContext = SaludoContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.AsignacionContext = AsignacionContext; 
LenguajeParser.ExcepcionContext = ExcepcionContext; 
LenguajeParser.BloqueContext = BloqueContext; 
LenguajeParser.ImprimirContext = ImprimirContext; 
LenguajeParser.ExpresionContext = ExpresionContext; 
