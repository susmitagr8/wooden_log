import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  store:number[];
  one:number=0;
  two:number=0;
  three:number=0;
  four:number=0;
  five:number=0;
  six:number=0;
  seven:number=0;
  eight:number=0;
  max:number=0;
  i:number;
  j:number;
  length:number=8;
  cal(): void {
    //this.log += `Text changed to '${value}'\n`;
      if(this.one>0&&this.two>0&&this.three>0&&this.four>0&&this.five>0&&this.six>0&&this.seven>0&&this.eight>0)
      {
        this.store=[0,this.one,this.two,this.three,this.four,this.five,this.six,this.seven,this.eight]; 
      }else{
        alert("PLEASE FILL ALL THE FEILDS");
      }
      //alert(this.store[0]+" "+this.store[1]+" "+this.store[2]+" "+this.store[3]+" "+this.store[4]+" "+this.store[5]+" "+this.store[6]+" "+this.store[7]+" "+this.store[8]);

      for(this.i=1;this.i<=this.length;this.i++){
        for(this.j=1;this.i-this.j>0;this.j++){
           if(this.store[this.i-this.j]+this.store[this.j]>this.store[this.i]){
             this.store[this.i]=this.store[this.i-this.j]+this.store[this.j];
        }
      }
     // alert(this.store[0]+" "+this.store[1]+" "+this.store[2]+" "+this.store[3]+" "+this.store[4]+" "+this.store[5]+" "+this.store[6]+" "+this.store[7]+" "+this.store[8]);
    }
    alert(this.store[0]+" "+this.store[1]+" "+this.store[2]+" "+this.store[3]+" "+this.store[4]+" "+this.store[5]+" "+this.store[6]+" "+this.store[7]+" "+this.store[8]);
  }
}