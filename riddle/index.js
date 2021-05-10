import { Players } from './players';
import { Biographies } from './biographies';

export function Riddles(){
    this.collection = this.fetch();
}
Riddles.prototype.fetch = function(){
    return Players.concat(Biographies);
}
Riddles.prototype.getRandom = function(){
    let randomIndex = Math.floor(Math.random()*(this.collection.length-1));
    return this.collection[randomIndex];
}
