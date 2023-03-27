var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao = createSprite(25,380,25,25);
ladrao.shapeColor="black";

var rubi = createSprite(25,25,15,15);
rubi.shapeColor="red";
 
var laizer1 =createSprite(175,45,350,10);
var laizer2 =createSprite(225,95,350,10);
var laizer3 =createSprite(175,155,350,10);
var laizer4 =createSprite(255,210,350,10);
var laizer5 =createSprite(175,265,350,10);
var laizer6 =createSprite(255,325,350,10);
  
  

function draw() {
  background("pink");
  
  createEdgeSprites();
  
 
  
  if (keyDown("d")){
    ladrao.x = ladrao.x +9;
  }
  
  if (keyDown("a")){
    ladrao.x = ladrao.x -9;
  }

  if (keyDown("s")){
    ladrao.y = ladrao.y +9;
  }

  if (keyDown("w")){
    ladrao.y = ladrao.y -9;
  }

  ladrao.bounceOff(edges);
  
  if (laizer1.isTouching(ladrao) ||
      laizer2.isTouching(ladrao) ||
      laizer3.isTouching(ladrao) ||
      laizer4.isTouching(ladrao) ||
      laizer5.isTouching(ladrao) ||
      laizer6.isTouching(ladrao)){
      stroke(0);
      fill(0);
      textSize(24);
      text("O ladrao foi pego", 120, 200);
      
      
      laizer1.setVelocity(0,0);
      laizer2.setVelocity(0,0);
      laizer3.setVelocity(0,0);
      laizer4.setVelocity(0,0);
      laizer5.setVelocity(0,0);
      laizer6.setVelocity(0,0);
      ladrao.setVelocity(0,0);
  }
if (rubi.isTouching(ladrao)){
      stroke(0);
      fill(0);
    textSize(24);
      text("O ladrao capturou a rubi", 120, 200);
}
  
  if (laizer1 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (laizer2 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (laizer3 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (laizer4 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (laizer5 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (laizer6 .isTouching(ladrao)){
    ladrao.velocityY(0,0);
  }
  if (rubi.isTouching(ladrao)){
    ladrao.velocityY(0,0);
    stroke(0);
      fill(0);
    textSize(24);
      text("O ladrao capturou a rubi", 120, 200);
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
