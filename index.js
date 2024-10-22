#!/usr/bin/env node
import Pkj from "./package.json" with {type: "json"};
import welcome from "cli-welcome";
import chalk from "chalk";
const twitterClr = chalk.hex('#1da1f2').bold.inverse;
const log = console.log;

welcome({ 
    title: Pkj.name, 
    tagLine: `by Jezl`, 
    version: Pkj.version, 	
    description: Pkj.description,
    bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true, 
});

log(`
${chalk.hex('#6937ff').bold.inverse("Jezl")}
${chalk.italic(`Excepteur dolor sunt elit tempor aliqua fugiat elit adipisicing aute aliqua. Aliquip ut minim aute elit esse. Laboris ad esse quis duis ullamco. Officia eu deserunt duis esse sint in deserunt officia consequat proident ipsum. Ullamco non irure et consequat officia occaecat eu. Sit fugiat ad aliquip in aliquip fugiat aute eiusmod. Cillum duis adipisicing enim quis esse id aute sint.`)}

${twitterClr('Twitter')}: https://twitter.com/jjdev06
${twitterClr('Linkedin')}: https://www.linkedin.com/in/jeremyluscombe/`);


log(chalk.green.underline.inverse(`This is green`));
log();