import { Controller, Get, Post, Body } from '@nestjs/common';
import { TextGenRequest } from './../model/text-gen-request.model';

@Controller('text')
export class GeneratorController {
  constructor() {}

  @Get()
  printText(): string {
	// program to generate random strings
	//const result = Math.random().toString(36).substring(2,70);
		
	let result = this.generateText(99);	
	
	console.log(result);
	return result;
  }
  
  @Post()
  printCustomText(@Body() textGenRequest: TextGenRequest): string {
	
	console.log(JSON.stringify(textGenRequest));
	 
	  
	// program to generate random strings
	const result = Math.random().toString(36).substring(2,7);
	console.log(result);
	
	return 'Text generation initiated...!';
  }
  
  private generateText(textLength): string{
	const characters ='!#$&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';	
    const charactersLength = characters.length;
    for ( let i = 0; i < textLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }	
	return result;
  }
}
