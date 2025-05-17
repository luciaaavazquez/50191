import LenguajeVisitor from "./LenguajeVisitor.js";
import LenguajeParser from "./LenguajeParser.js";

export default class CustomCalculatorVisitor extends LenguajeVisitor {
  constructor() {
    super();
    this.memory = new Map(); // Memoria para variables
  }

  visitPrograma(ctx) {
    return this.visit(ctx.instrucciones());
  }

  visitInstrucciones(ctx) {
    return ctx.instruccion().map(instr => this.visit(instr));
  }

  visitInstruccion(ctx) {
    if (ctx.asignacion()) return this.visit(ctx.asignacion());
    if (ctx.imprimir()) return this.visit(ctx.imprimir());
    if (ctx.excepcion()) return this.visit(ctx.excepcion());
    if (ctx.bloque()) return this.visit(ctx.bloque());
  }

  visitAssign(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const value = this.visit(ctx.expresion());
    this.memory.set(id, value);
    return value;
  }

  visitAsignacion(ctx) {
    return this.visitAssign(ctx);
  }

  visitPrintExpr(ctx) {
    const value = this.visit(ctx.expresion());
    console.log(`\nResultado: ${value}`);
    return 0;
  }

  visitImprimir(ctx) {
    return this.visitPrintExpr(ctx);
  }

  visitAddSub(ctx) {
    const left = this.visit(ctx.expresion(0));
    const right = this.visit(ctx.expresion(1));
    return ctx.op.type === LenguajeParser.MAS ? left + right : left - right;
  }

  visitMulDiv(ctx) {
    const left = this.visit(ctx.expresion(0));
    const right = this.visit(ctx.expresion(1));
    return ctx.op.type === LenguajeParser.POR ? left * right : left / right;
  }

  visitParens(ctx) {
    return this.visit(ctx.expresion());
  }

  visitNumber(ctx) {
    return Number(ctx.NUMERO().getText());
  }

  visitStr(ctx) {
    return ctx.STRING().getText().replace(/"/g, "");
  }

  visitId(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    if (!this.memory.has(id)) throw new Error(`Variable no definida: ${id}`);
    return this.memory.get(id);
  }

  visitTermino(ctx) {
    if (ctx.NUMERO()) return parseFloat(ctx.NUMERO().getText());
    if (ctx.STRING()) return ctx.STRING().getText().replace(/"/g, "");
    if (ctx.IDENTIFICADOR()) {
      const id = ctx.IDENTIFICADOR().getText();
      if (!this.memory.has(id)) throw new Error(`Variable no definida: ${id}`);
      return this.memory.get(id);
    }
    if (ctx.expresion()) return this.visit(ctx.expresion());
  }

  visitExpresion(ctx) {
    if (ctx.termino && ctx.termino().length > 1) {
      let result = this.visit(ctx.termino(0));
      for (let i = 1; i < ctx.termino().length; i++) {
        const op = ctx.getChild(2 * i - 1).getText();
        const right = this.visit(ctx.termino(i));
        if (op === "+") result = String(result) + String(right);
        else if (op === "-") result -= right;
        else if (op === "*") result *= right;
        else if (op === "/") result /= right;
      }
      return result;
    } else {
      return this.visitChildren(ctx);
    }
  }

  visitExcepcion(ctx) {
    try {
      this.visit(ctx.bloque(0));
    } catch (e) {
      const varName = ctx.IDENTIFICADOR().getText();
      this.memory.set(varName, e.message);
      this.visit(ctx.bloque(1));
    }
    return 0;
  }
}
