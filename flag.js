#!/usr/bin/env node

const chalk = require('chalk');
const {red, white, bold, bgBlue, bgWhite, bgRed} = require('chalk');
const star = '\u2606';
console.log(star)
// style a string
console.log(bgBlue.white.bold(` ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   ${star} `) + bgRed('                                                 '));
console.log(bgBlue.white.bold(`   ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   `) + bgWhite('                                                 '));
console.log(bgBlue.white.bold(` ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   ${star} `) + bgRed('                                                 '));
console.log(bgBlue.white.bold(`   ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   `) + bgWhite('                                                 '));
console.log(bgBlue.white.bold(` ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   ${star} `) + bgRed('                                                 '));
console.log(bgBlue.white.bold(`   ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   `) + bgWhite('                                                 '));
console.log(bgBlue.white.bold(` ${star}   ${star}   ${star}   ${star}   ${star}   ${star}   ${star} `) + bgRed('                                                 '));
console.log(bgWhite('                                                                            '));
console.log(bgRed('                                                                            '));
console.log(bgWhite('                                                                            '));
console.log(bgRed('                                                                            '));
console.log(bgWhite('                                                                            '));
console.log(bgRed('                                                                            '));
