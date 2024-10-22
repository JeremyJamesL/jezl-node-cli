#!/usr/bin/env node
import { describe } from "node:test";
import Pkj from "./package.json" with {type: "json"};
import welcome from "cli-welcome";

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

console.log(`
Jeremy Luscombe - software engineer - Hello!!!!!&&&GGG

Twitter: https://twitter.com/jjdev06
Linkedin: https://www.linkedin.com/in/jeremyluscombe/

`);
