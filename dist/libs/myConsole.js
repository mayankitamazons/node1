"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myConsole = (color, content) => {
    var cor = '';
    switch (color) {
        case 'branco':
            cor = "\x1b[37m";
            break;
        case 'preto':
            cor = "\x1b[30m";
            break;
        case 'vermelho':
            cor = "\x1b[31m";
            break;
        case 'verde':
            cor = "\x1b[32m";
            break;
        case 'amarelo':
            cor = "\x1b[33m";
            break;
        case 'azul':
            cor = "\x1b[34m";
            break;
        case 'magenta':
            cor = "\x1b[35m";
            break;
        case 'ciano':
            cor = "\x1b[36m";
            break;
    }
    console.log(`${cor}`, `${content}`);
};
exports.default = myConsole;
