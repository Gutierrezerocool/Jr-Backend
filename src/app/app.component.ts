import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numbers = [];

    constructor(){
    	var limit=101;
    	
        for( var value = 1; value < limit; value++){
            this.numbers.push(this.getNumber(value));
        }
	}

getNumber(value){

    if(value % 5 === 0 && value % 3 === 0)
        return "Liniano";
    else if(value % 3 ===0)
    	return "Linio";
    else if(value % 5 === 0)
    	return "IT";
    return value;
  }
}
