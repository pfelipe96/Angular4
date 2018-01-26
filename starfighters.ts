import {Spacecraft, Container} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements MillenniumFalcon{
  cargoContainer:number;

  constructor(){
    super('hyperdrive');
    this.cargoContainer = 2;
  }
  // @Override
  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    }else{console.log('Failed to jump into hyperspace')}
  }
}
