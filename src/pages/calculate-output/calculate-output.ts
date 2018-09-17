import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculateOutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculate-output',
  templateUrl: 'calculate-output.html',
})
export class CalculateOutputPage {
    // variables 
    a:number;
    x:number;
    alpha: number;
    z:number;
    beta: number;
    //profit
    wage: number;
    profit:number;
    p:number;
    output:number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateOutput(): number {
    //output=ax^alphaz^beta
    //a= total factor of productivity alpha=output elaticity of labour beta= output elasiticity of capital
 //z=capital, x=labour
 //profit= az^beta*p-alpha.wage^alpha
 this.alpha=0.5;
 this.beta=0.5
 this.x=1200;
 this.a=1500;
 this.z=6000;
 this.wage=250*4;
 this.p=1000;


   return this.output = this.a * Math.pow(this.x, this.alpha) * Math.pow(this.z,this.beta);
    
  }
  calculateProfit(): number  {
    let sigma = (this.beta * this.p) - this.alpha;

    return this.profit = this.a * Math.pow(this.z,sigma) * Math.pow(this.wage,this.alpha);

  }
}
