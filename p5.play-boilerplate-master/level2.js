function level2(){
console.log("We have reached level 2");
background(bg1)
Minu.visible=true;
bbees.visible=true;
bb2.visible=true;
bb3.visible=true;
//score=0;
////SCore=0;
bitten=0;

if(score==0||score>0 && score<20||score==20){
text("Time:"+time2,300,50);
if(frameCount%60===0){
bluef();
pinkf();
redf();
}}
if(frameCount%30===0){
  time2=time2-1;
  
}
if(time2===0){
  gameState="end";
}
if(score===20 && time2>0){
  console.log("level 2 passed!")
console.log("You are going to level 3!")
}
if(SCore===20||SCore>20 && score===20||score>20){
  console.log("Level 2 passed.. Going to level 3");
}

//background("black");
// text("Level 2, collect flowers but in 90 secs!",400,200);
}
if(score===20 && SCore===20){
 background("black");
 text("End of level 2.. Level 3 will be added later..",400,200);
 
 redG.destroyEach();
 yellowG.destroyEach();
 pinkG.destroyEach();
 blueG.destroyEach();
 if(keyDown("RIGHT_ARROW")){
   Minu.x=Minu.x+0;
 }

 if(keyDown("LEFT_ARROW")){
   Minu.x=Minu.x-0;
 }

 if(keyDown("UP_ARROW")){
   Minu.y=Minu.y-0;
 }

 if(keyDown("DOWN_ARROW")){
   Minu.y=Minu.y+0;
 }
bbees.visible=false;
bb2.visible=false;
bb3.visible=false;
f1.visible=false;
f2.visible=false;
f3.visible=false;
f4.visible=false;
/*redG.visible=false;
yellowG.visible=false;
blueG.visible=false;
pinkG.visible=false;*/

if(redG.isTouching(Minu)||pinkG.isTouching(Minu)||yellowG.isTouching(Minu)||blueG.isTouching(Minu)){
 score=score+0;
 SCore=SCore+0;
}
}
