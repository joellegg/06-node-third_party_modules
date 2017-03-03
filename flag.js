#!/usr/bin/env node

const chalk = require('chalk');
const {red, white, bold, bgBlue, bgWhite, bgRed} = require('chalk');
const star = '\u2606';
const starMargin = ' ';
const starPadding = '  ';


for (i = 0; i < 13; i++) {
  if (i % 2 === 0 && i < 7) {
    console.log(bgBlue.white.bold(`${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}`) + bgRed('                                                 '));
  } else if (i % 2 === 1 && i < 7) {
    console.log(bgBlue.white.bold(`${starPadding}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starMargin}${star}${starPadding}`) + bgWhite('                                                 '));
  } else if (i % 2 === 1 && i > 6) {
    console.log(bgWhite('                                                                '));
  } else if (i % 2 === 0 && i > 6) {
    console.log(bgRed('                                                                '));
  }
}
