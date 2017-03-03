#!/usr/bin/env node

const chalk = require('chalk');
const {red, white, bold, bgBlue, bgWhite, bgRed} = require('chalk');
const star = '\u2606';
const starMargin = ' ';
const starMarginRight = '  ';
const starPadding = '   ';


for (i = 0; i < 13; i++) {
  if (i % 2 === 0 && i < 7) {
    console.log(bgBlue.white.bold(`${starMargin}${star}${starPadding}${star}${starPadding}${star}${starPadding}${star}${starPadding}${star}${starPadding}${star}${starPadding}${star}${starMarginRight}`) + bgRed('                                                 '));
  } else if (i % 2 === 1 && i < 7) {
    console.log(bgBlue.white.bold(`${starPadding}${star}   ${star}   ${star}   ${star}   ${star}   ${star}${starPadding}${starMargin}`) + bgWhite('                                                 '));
  } else if (i % 2 === 1 && i > 6) {
    console.log(bgWhite('                                                                             '));
  } else if (i % 2 === 0 && i > 6) {
    console.log(bgRed('                                                                             '));
  }
}
