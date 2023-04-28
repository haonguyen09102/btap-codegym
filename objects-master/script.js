/**
 * Created by nhatnk on 4/26/17.
 */

class Hero{
  constructor(image, top, left, size, direction =true){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.direction = direction
  }


  getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }

  moveLeft = function(){
    this.left -= 20;
    console.log('ok: ' + this.left);
  }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if(hero.direction){
    if(hero.left < window.innerWidth - hero.size){
      hero.moveRight();
    } else{
      hero.direction = false;
      hero.moveLeft;
    }
  } else{
    if(hero.left > hero.size){
      hero.moveLeft();
    } else{
      hero.direction = false;
      hero.moveRight;
    }
  }
  
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();