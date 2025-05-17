import fs from "fs";
import readline from "readline";
import antlr4 from "antlr4";

import { CharStreams, CommonTokenStream } from "antlr4";
import  LenguajeLexer  from "./LenguajeLexer.js";
import  LenguajeParser from "./LenguajeParser.js";
import CustomCalculatorVisitor from "./CustomCalculatorVisitor.js";

async function main() {
  let input;

  // 1) Leer input.txt si existe, si no, pedir por consola
  try {
    const fileName = process.argv[2] || "input.txt";
    input = fs.readFileSync(fileName, "utf8");
  } catch (err) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    input = await new Promise((resolve) =>
      rl.question("Ingrese programa: ", (ans) => {
        rl.close();
        resolve(ans);
      })
    );
  }

  console.log("\n--- Entrada detectada ---\n" + input + "\n");

  // 2) Crear lexer y mostrar tokens
  const inputStream = CharStreams.fromString(input);
  const lexer = new LenguajeLexer(inputStream);
  const tokens = lexer.getAllTokens();

  if (tokens.length === 0) {
    console.error("No se generaron tokens. Revisá la gramática o la entrada.");
    return;
  }

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("----------------------------------------------");
  console.log("| Lexema           | Token                   |");
  console.log("----------------------------------------------");

  tokens.forEach((t) => {
    const name = LenguajeLexer.symbolicNames[t.type] || "<UNKNOWN>";
    console.log(`| ${t.text.padEnd(18)} | ${name.padEnd(22)} |`);
  });

  console.log("----------------------------------------------\n");

  // 3) Volver a crear lexer y parser porque getAllTokens agota el stream
  const newInput = CharStreams.fromString(input);
  const newLexer = new LenguajeLexer(newInput);
  const tokenStream = new CommonTokenStream(newLexer);
  const parser = new LenguajeParser(tokenStream);
  parser.buildParseTrees = true;

  // 4) Parsear usando la regla inicial
  const tree = parser.prog(); // ← usar 'prog' como regla raíz
  const errCount = parser._syntaxErrors ?? parser._errHandler?.errors?.length ?? 0;

  if (errCount > 0) {
    console.error(`\nSe encontraron ${errCount} errores de sintaxis.`);
    process.exit(1);
  } else {
    console.log("\nEntrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log("Árbol de derivación: " + cadena_tree);
  }

  // 5) Ejecutar visitor
  const visitor = new CustomCalculatorVisitor();
  visitor.visit(tree);
}

main();
