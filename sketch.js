
var wave = [];
var an1 = 0;


var ynumberkeys = 540;

var indexa = 0; //amount of notes in bass array
var indexb = 0;
var indexc = 0;
var timeBetween = 300;
var lastTimePlayed = 0;
var a = []; //bass array
var b = []; //drums array
var c = []; //melody array
var playbass;
var playdrum;
var playmelody;

var x = 0;

//home
var bx = 223;
var y = 300;
var r = 178;
var px = 645;
var mx = 1056;
var plx = 640;
var ply = 612;
var plr = 73;
var nx = 491;
var ny = 610;
var nr = 45;
var pax = 790;

//beat, percussion, melody
var beatx = 75;
var beaty = 67;
var beatr = 55;
var buttonr = 35;
var letterbuttonr = 41;

var scr = 1; //welcome
// var scr = 2; //home
// var scr = 3; //bass
// var scr = 4; //perc
// var scr = 5; //melody 
// var scr = 6; //play

//clicking notes-------
var noteX = 230;
var noteY = 172;

function preload() {
  //all
  back = loadImage("assets/background.jpg");
  back2 = loadImage("assets/back2.png");
  cursordot = loadImage("assets/cursor.png");
  
  //home
  bigbeat = loadImage("assets/bigbeat.png");
  Tbeat = loadImage("assets/beat.png");
  bigbeatclick = loadImage("assets/bigbeatclick.png");
  bigperc = loadImage("assets/bigperc.png");
  Tperc = loadImage("assets/perc.png");
  bigpercclick = loadImage("assets/bigpercclick.png");
  bigmel = loadImage("assets/bigmelody.png");
  Tmel = loadImage("assets/melody.png");
  bigmelclick = loadImage("assets/bigmelclick.png");
  
  bigplay = loadImage("assets/bigplay.png");
  bigplayclick = loadImage("assets/bigplayclick.png");
  newsound = loadImage("assets/newsound.png");
  newsoundclick = loadImage("assets/newsoundclick.png");
  pause = loadImage("assets/pause.png");
  pauseclick = loadImage("assets/pauseclick.png");
  tinyplay = loadImage("assets/tinyplay.png");
  tinyplayclick = loadImage("assets/tinyplayclick.png");
  tinypause = loadImage("assets/tinypause.png"); 
  tinypauseclick = loadImage("assets/tinypauseclick.png");
  
  //beat
  smallbeat = loadImage("assets/smallbeat.png");
  smallbeatclick = loadImage("assets/smallbeatclick.png");
  
  undo = loadImage("assets/undo.png");
  undoclick = loadImage("assets/undoclick.png");
  clearall = loadImage("assets/clearall.png");
  clearallclick = loadImage("assets/clearallclick.png");
  vol = loadImage("assets/vol.png");
  
  A = loadImage("assets/A.png");
  Aclick = loadImage("assets/Aclick.png");
  B = loadImage("assets/B.png");
  Bclick = loadImage("assets/Bclick.png");
  C = loadImage("assets/C.png");
  Cclick = loadImage("assets/Cclick.png");
  D = loadImage("assets/D.png");
  Dclick = loadImage("assets/Dclick.png");
  E = loadImage("assets/E.png");
  Eclick = loadImage("assets/Eclick.png");
  F = loadImage("assets/F.png");
  Fclick = loadImage("assets/Fclick.png");
  G = loadImage("assets/G.png");
  Gclick = loadImage("assets/Gclick.png");
  
  smallplay = loadImage("assets/smallplay.png");
  smallplayclick = loadImage("assets/smallplayclick.png");
  
  //perc
  smallperc = loadImage("assets/smallperc.png");
  smallpercclick = loadImage("assets/smallpercclick.png");
  
  //melody
  smallmelody = loadImage("assets/smallmelody.png");
  smallmelodyclick = loadImage("assets/smallmelodyclick.png");
  block = loadImage("assets/melodyscrollover.png");
  
  one = loadImage("assets/1.png");
  oneclick = loadImage("assets/1click.png");
  two = loadImage("assets/2.png");
  twoclick = loadImage("assets/2click.png");
  three = loadImage("assets/3.png");
  threeclick = loadImage("assets/3click.png");
  four = loadImage("assets/4.png");
  fourclick = loadImage("assets/4click.png");
  five = loadImage("assets/5.png");
  fiveclick = loadImage("assets/5click.png");
  six = loadImage("assets/6.png");
  sixclick = loadImage("assets/6click.png");
  seven = loadImage("assets/7.png");
  sevenclick = loadImage("assets/7click.png");
  
  note = loadImage("assets/notedot.png");
  achord = loadImage("assets/achord.png");
  bchord = loadImage("assets/bchord.png");
  cchord = loadImage("assets/cchord.png");
  dchord = loadImage("assets/dchord.png");
  echord = loadImage("assets/echord.png");
  fchord = loadImage("assets/fchord.png");
  gchord = loadImage("assets/gchord.png");
  
  spacebar = loadImage("assets/spacebar.png");
  spacebarclick = loadImage("assets/spacebarclick.png");
  notemap = loadImage("assets/notemap.png");
  stop = loadImage("assets/stop.png");
  stopclick = loadImage("assets/stopclick.png");
  
  //SOUNDS
  adrum = loadSound('sounds/bdrum.mp3'); // needs correct file here
  bdrum = loadSound('sounds/bdrum.mp3');
  cdrum = loadSound('sounds/cdrum.mp3');
  ddrum = loadSound('sounds/ddrum.mp3');
  edrum = loadSound('sounds/edrum.mp3');
  fdrum = loadSound('sounds/fdrum.mp3');
  gdrum = loadSound('sounds/gdrum.mp3');
  
  abass = loadSound('sounds/abass.mp3');
  bbass = loadSound('sounds/bbass.mp3');
  cbass = loadSound('sounds/cbass.mp3');
  dbass = loadSound('sounds/dbass.mp3');
  ebass = loadSound('sounds/ebass.mp3');
  fbass = loadSound('sounds/fbass.mp3');
  gbass = loadSound('sounds/gbass.mp3');
  
  amel = loadSound('sounds/aperc.mp3');
  bmel = loadSound('sounds/bperc.mp3');
  cmel = loadSound('sounds/cperc.mp3');
  dmel = loadSound('sounds/dperc.mp3');
  emel = loadSound('sounds/eperc.mp3');
  fmel = loadSound('sounds/fperc.mp3');
  gmel = loadSound('sounds/gperc.mp3');
  
  amelchord = loadSound('sounds/apercchord.mp3');
  bmelchord = loadSound('sounds/bpercchord.mp3');
  cmelchord = loadSound('sounds/cpercchord.mp3');
  dmelchord = loadSound('sounds/dpercchord.mp3');
  emelchord = loadSound('sounds/epercchord.mp3');
  fmelchord = loadSound('sounds/fpercchord.mp3');
  gmelchord = loadSound('sounds/gpercchord.mp3');
  
  spacesound = loadSound('sounds/spacesound.mp3');
  AndaleMono = loadFont("assets/Andale Mono.ttf");
  
  //welcome page
  logo = loadImage("assets/logo.png");
  namemmm = loadImage("assets/name.png");
  info = loadImage("assets/info.png");
  begin = loadImage("assets/begin.png");
  beginclick = loadImage("assets/beginclick.png");
  //start = loadSpriteSheet("assets/startbutton.png", 100, 100, 11);
  //start = loadImage("assets/notedot.png");
  //button_animation = loadAnimation(start);
  
// abassgif = loadGif('assets/abassgif.gif');
  //bbassgif = loadGif('assets/bbassgif.gif');
  
  //instruction page
 // ex = loadImage("assets/ex.png");
  //exclick = loadImage("assets/exclick.png");
 // instruct = loadImage("assets/instruct.png");
  //instructclick = loadImage("assets/instructclick.png");
 // instructions = loadImage("assets/instructions.png");
  
 /* //wave
  wave[0] = loadImage("abassgif/Asset 1.png");
  wave[1] = loadImage("abassgif/Asset 2.png");
  wave[2] = loadImage("abassgif/Asset 3.png");
  wave[3] = loadImage("abassgif/Asset 4.png");
  wave[4] = loadImage("abassgif/Asset 5.png");
  wave[5] = loadImage("abassgif/Asset 6.png");
  wave[6] = loadImage("abassgif/Asset 7.png");
  wave[7] = loadImage("abassgif/Asset 8.png");
  wave[8] = loadImage("abassgif/Asset 9.png");
  wave[9] = loadImage("abassgif/Asset 10.png");
  wave[10] = loadImage("abassgif/Asset 11.png");
  wave[11] = loadImage("abassgif/Asset 12.png");
  wave[12] = loadImage("abassgif/Asset 13.png");
  wave[13] = loadImage("abassgif/Asset 14.png");
  wave[14] = loadImage("abassgif/Asset 15.png");
  wave[15] = loadImage("abassgif/Asset 16.png");
  wave[16] = loadImage("abassgif/Asset 17.png");
  wave[17] = loadImage("abassgif/Asset 18.png");
  wave[18] = loadImage("abassgif/Asset 19.png");*/
}

function setup() {
  createCanvas (1280, 720);
  noCursor();
}

function draw() {
  
	if (scr == 1) {
	  welcome();
	} else if (scr == 2){
	  home();
	} else if (scr == 3){
	  beatpage();
	} else if (scr == 4){
	  percussion();
	} else if (scr == 5){
	  melody();
	} else if (scr == 6){
	  play();
	} else if (scr == 7){
	  instructions();
	}
}

function play() {
  image(back, 0, 0);
  
/* for (var i = 0; i < a.length; i+= 1) {
    if (a[i] == abass) {
      image(wave[an1], -200, 300);
      an1 = an1 + 1;
      //image(abassgif, -200, 500);
    } else {
      image(wave[an1], -200, 500);
      an1 = 0;
    }
 }*/

  
  ///stop song button///
  image(stop, 1200, 647);
  if (overbutton(1221, 668, 21)) {
	  image(stopclick, 1200, 647);
	  noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("HOME", 1207, 640);
	}
	
  ////notes////////
  image(A, 248, 613);
  image(B, 367, 613);
  image(C, 485, 613);
  image(D, 603, 613);
  image(E, 722, 613);
  image(F, 840, 613);
  image(G, 959, 613);
  
  if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
	}
	if (overbutton(413, 663, 40)) {
	  image(Bclick, 367, 613);
	}
	if (overbutton(530, 663, 40)) {
	  image(Cclick, 485, 613);
	}
	if (overbutton(649, 663, 40)) {
	  image(Dclick, 603, 613);
	}
	if (overbutton(769, 663, 40)) {
	  image(Eclick, 722, 613);
	}
	if (overbutton(884, 663, 40)) {
	  image(Fclick, 840, 613);
	}
	if (overbutton(1005, 663, 40)) {
	  image(Gclick, 959, 613);
	} 
	
	whennoteisclicked();
  
  if(millis() > lastTimePlayed + timeBetween) {
	  playbassscreenshome();
	  playpercscreenshome();
	  playmelodyscreenshome();
	  lastTimePlayed = millis();
	}
	//indexa = 0;
	//indexb = 0;
	//indexc = 0;
  image(cursordot, mouseX-10, mouseY-10);
}

function welcome(){
  image(back, 0, 0);
  
  image(logo, 370, 49);
  image(namemmm, 450, 430);
  image(info, 530, 668);
  image(begin, 585, 530);

  if (overbutton(630, 570, 47)){
    image(beginclick, 585, 530);
  }
  image(cursordot, mouseX-10, mouseY-10);
}
 
function mousePressed(){
  
  var tinyY = 465;
  /////pause all button home
if (scr == 2){
  if (playbass === true || playdrum === true || playmelody === true){
    if (overbutton(792, 613, 47)){
      playbass = false;
      playdrum = false;
      playmelody = false;
    } 
  } else if (playbass === false || playdrum === false || playmelody === false){
    if (overbutton(642, 611, 74)){
      playbass = true;
     playdrum = true;
      playmelody = true;
    }
  } 
  ///play/pausebass
  if (playbass === true){
    if (overbutton(240+21, tinyY+21, 21)){
       playbass = false;
    } else if (playmelody === false || playdrum === false || playbass === false) {
     if (overbutton(155+21, tinyY+21, 21)){
       playbass = true;
     }
    }
  }
  ///play/pausedrum
  if (playdrum === true){
    if (overbutton(665+21, tinyY+21, 21)){
      playdrum = false;
    } else if (playmelody === false || playdrum === false || playbass === false) {
     if (overbutton(580+21, tinyY+21, 21)){
       playdrum = true;
     }
    }
  }
  ///play/pausemelody
  if (playmelody === true){
    if (overbutton(1080+21, tinyY+21, 21)){
      playmelody = false;
    } else if (playmelody === false || playdrum === false || playbass === false) {
     if (overbutton(997+21, tinyY+21, 21)){
       playmelody = true;
     }
    }
  }
}
	
  //big play home screen nav
  if (scr == 2) {
    if (overbutton(640, 612, 65)) {
      scr = 6;
   }
  } else if (scr == 6){
    if (overbutton(1221, 668, 21)){
      scr = 2;
    }
  } 

  //new song home screen nav
  if (scr == 2) {
    if (overbutton(491, 610, 45)) {
      a.length = 0;
      b.length = 0;
      c.length = 0;
   }
  } 
  
   //pause all home screen nav
  if (scr == 2) {
    if (overbutton(790, 610, 45)) {
      //pause all arrays (or stop)
   }
  } 


  //pressing keys on screen//
  //////////////////////////

	//beat page
 if	(scr == 3 &&  a.length < 99){
  if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
	  abass.play();
    a.push(abass);
	 } else if (overbutton(413, 663, 40)) {
	   image(Bclick, 367, 613);
	   bbass.play();
     a.push(bbass);
	 } else if (overbutton(530, 663, 40)) {
	   image(Cclick, 485, 613);
	    cbass.play();
      a.push(cbass);
	 } else if (overbutton(649, 663, 40)) {
	   image(Dclick, 603, 613);
	     dbass.play();
      a.push(dbass);
	 }  else if (overbutton(769, 663, 40)) {
	   image(Eclick, 722, 613);
	     ebass.play();
      a.push(ebass);
	 } else if (overbutton(884, 663, 40)) {
	   image(Fclick, 840, 613);
	     fbass.play();
      a.push(fbass);
	 } else if (overbutton(1005, 663, 40)) {
	   image(Gclick, 959, 613);
	    gbass.play();
      a.push(gbass);
	 } else if (overRect(500, 570, 290, 27)) {
	   image(spacebarclick, 500, 570);
	    spacesound.play();
      a.push(spacesound);
	 } 
 } 
 
 	//drum page
 if	(scr == 4 &&  b.length < 99){
  if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
	   adrum.play();
      b.push(adrum);
	 } else if (overbutton(413, 663, 40)) {
	   image(Bclick, 367, 613);
	      bdrum.play();
      b.push(bdrum);
	 } else if (overbutton(530, 663, 40)) {
	   image(Cclick, 485, 613);
	      cdrum.play();
      b.push(cdrum);
	 } else if (overbutton(649, 663, 40)) {
	   image(Dclick, 603, 613);
	     ddrum.play();
      b.push(ddrum);
	 }  else if (overbutton(769, 663, 40)) {
	   image(Eclick, 722, 613);
	     edrum.play();
      b.push(edrum);
	 } else if (overbutton(884, 663, 40)) {
	   image(Fclick, 840, 613);
	      fdrum.play();
      b.push(fdrum);
	 } else if (overbutton(1005, 663, 40)) {
	   image(Gclick, 959, 613);
	      gdrum.play();
      b.push(gdrum);
	 } else if (overRect(500, 570, 290, 27)) {
	   image(spacebarclick, 500, 570);
	    spacesound.play();
      b.push(spacesound);
	 } 
 } 
 
 //melody page
 if	(scr == 5 &&  c.length < 99){
  if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
      amel.play();
      c.push(amel);
	 } else if (overbutton(413, 663, 40)) {
	   image(Bclick, 367, 613);
	   bmel.play();
      c.push(bmel);
	 } else if (overbutton(530, 663, 40)) {
	   image(Cclick, 485, 613);
	    cmel.play();
      c.push(cmel);
	 } else if (overbutton(649, 663, 40)) {
	   image(Dclick, 603, 613);
	    dmel.play();
      c.push(dmel);
	 }  else if (overbutton(769, 663, 40)) {
	   image(Eclick, 722, 613);
      emel.play();
      c.push(emel);
	 } else if (overbutton(884, 663, 40)) {
	   image(Fclick, 840, 613);
	    fmel.play();
      c.push(fmel);
	 } else if (overbutton(1005, 663, 40)) {
	   image(Gclick, 959, 613);
	    gmel.play();
      c.push(gmel);
	 } else if (overbutton(336, 575, 35)) {
	   image(one, 296, ynumberkeys);
	    amelchord.play();
      c.push(amelchord);
	 } else if (overbutton(439, 575, 35)) {
	   image(two, 400, ynumberkeys);
	    bmelchord.play();
      c.push(bmelchord);
	 } else if (overbutton(542, 575, 35)) {
	   image(three, 503, ynumberkeys);
	    cmelchord.play();
      c.push(cmelchord);
	 } else if (overbutton(645, 575, 35)) {
	   image(four, 606, ynumberkeys);
	     dmelchord.play();
      c.push(dmelchord);
	 } else if (overbutton(748, 575, 35)) {
	   image(five, 710, ynumberkeys);
	    emelchord.play();
      c.push(emelchord);
	 } else if (overbutton(851, 575, 35)) {
	   image(six, 813, ynumberkeys);
	    fmelchord.play();
      c.push(fmelchord);
	 } else if (overbutton(954, 575, 35)) {
	   image(seven, 916, ynumberkeys);
	     gmelchord.play();
      c.push(gmelchord);
	 } else if (overRect(500, 518, 290, 17)) {
	   image(spacebarclick, 500, 514);
	     spacesound.play();
      c.push(spacesound);
	 } 
 } 
 
 /////play all screen////
 if	(scr == 6){
  if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
      amel.play();
	 } else if (overbutton(413, 663, 40)) {
	   image(Bclick, 367, 613);
	   bmel.play();
	 } else if (overbutton(530, 663, 40)) {
	   image(Cclick, 485, 613);
	    cmel.play();
	 } else if (overbutton(649, 663, 40)) {
	   image(Dclick, 603, 613);
	    dmel.play();
	 }  else if (overbutton(769, 663, 40)) {
	   image(Eclick, 722, 613);
      emel.play();
	 } else if (overbutton(884, 663, 40)) {
	   image(Fclick, 840, 613);
	    fmel.play();
	 } else if (overbutton(1005, 663, 40)) {
	   image(Gclick, 959, 613);
	    gmel.play();
	 }
 }
 
 
//if the clear all button is clicked on beat page delete whole array
  if (scr == 3){
    if (overbutton(56, 665, 71)) {
     indexa = 0;
     playbass=false;
     a = [];
    }
  }
  
     //if the undo button is clicked on beat page delete the last note pressed
  if (scr == 3){
    if (overbutton(56, 579, 71)) {
     if (a.length > 0){
        indexa = 0;
        a = shorten(a);
      }
    }
  }
  
  //if the clear all button is clicked on drum page delete whole array
   if (scr == 4){
    if (overbutton(56, 665, 71)) {
     indexb = 0;
     playbass=false;
     b = [];
    }
  }
  
  //if the undo button is clicked on drum page delete the last note pressed
  if (scr == 4){
    if (overbutton(56, 579, 71)) {
     if (b.length > 0){
        indexb = 0;
        b = shorten(b);
      }
    }
  }

  //if the clear all button is clicked on melody page delete whole array
   if (scr == 5){
    if (overbutton(56, 665, 71)) {
     indexc = 0;
     playbass=false;
     c = [];
    }
  }
  
  //if the undo button is clicked on melody page delete the last note pressed
  if (scr == 5){
    if (overbutton(56, 579, 71)) {
     if (c.length > 0){
        indexc = 0;
        c = shorten(c);
      }
    }
  }
 
 
 
     //if the small play button is clicked on beat page whole array is played and loops
  if (scr == 3){
    if (overbutton(1206, 647, 106)) {
     playbass = true;
    }
  }
  
  if (scr == 4){
    if (overbutton(1206, 647, 106)) {
     playdrum = true;
    }
  }
  
  if (scr == 5){
    if (overbutton(1206, 647, 106)) {
     playmelody = true;
    }
  }

  //welcome nav
  if (scr == 1){
    if (overbutton(630, 570, 40)){
      scr = 2;
    }
  } 
  
  //beat nav
  if (scr == 2){
    if (overbutton(bx, y, r)){
      scr = 3;
    }
  } else if (scr == 3){
    if (overbutton(beatx, beaty, beatr)){
      scr = 2;
    }
  } 

  //percussion nav
  if (scr == 2){
    if (overbutton(px, y, r)){
      scr = 4;
    }
  } else if (scr == 4){
    if (overbutton(beatx, beaty, beatr)){
      scr = 2;
    }
  } 
  
  //melody nav
  if (scr == 2){
    if (overbutton(mx, y, r)){
      scr = 5;
    }
  } else if (scr == 5){
    if (overbutton(beatx, beaty, beatr)){
      scr = 2;
    }
  } 
  
  //instructions from welcome
  if (scr == 1){
    if (overbutton(20, 700, 21)){
      scr = 7;
    }
  } else if (scr == 7){
    if (overbutton(100,100,100)){
      scr = 1;
    }
  } 
  
   //instructions from home
  if (scr == 2){
    if (overbutton(20, 700, 21)){
      scr = 7;
    }
  } else if (scr == 7){
    if (overbutton(200,200,100)){
      scr = 2;
    }
  } 
  
}

function overbutton(x, y, radius) {
	if (dist(x, y, mouseX, mouseY) < radius) {
	  return true;	
	} else {
	  return false;	
	}
} 


function homescrollovers() {
  //home screen
  //playall
  if (overbutton(642, 611, 74)) {
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("PLAY ALL", 613, 525);
	} 

	//pause
  if (overbutton(792, 613, 47)) {
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("PAUSE", 770, 557);
	} 
	
  //new song
  if (overbutton(492, 609, 47)) {
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("NEW SONG", 461, 557);
	} 
  
}
  
function undoclearplayscrollovers() {
  
  //undo
  if (overbutton(56, 579, buttonr)) {
		image(undoclick, 20, 544);
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("UNDO", 42, 540);
	} 
	
	//clear
	if (overbutton(56, 665, buttonr)) {
		image(clearallclick, 20, 631);
   	noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("CLEAR ALL", 25, 628);
	} 
	
	//playbutton
	if (overbutton(1206, 647, 53)) {
		image(smallplayclick, 1153, 594);
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("PLAY/SAVE", 1173, 587);
	} 
}

function beatanddrumscrollovers() {
	
  undoclearplayscrollovers();
  
	if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
	}
	if (overbutton(413, 663, 40)) {
	  image(Bclick, 367, 613);
	}
	if (overbutton(530, 663, 40)) {
	  image(Cclick, 485, 613);
	}
	if (overbutton(649, 663, 40)) {
	  image(Dclick, 603, 613);
	}
	if (overbutton(769, 663, 40)) {
	  image(Eclick, 722, 613);
	}
	if (overbutton(884, 663, 40)) {
	  image(Fclick, 840, 613);
	}
	if (overbutton(1005, 663, 40)) {
	  image(Gclick, 959, 613);
	} 
	if (overRect(500, 570, 290, 27)) {
	  image(spacebarclick, 500, 570);
	}
}

function melodyscrollover(){
   
  undoclearplayscrollovers();
  
	if (overbutton(293, 663, 40)) {
	  image(Aclick, 248, 613);
	}
	if (overbutton(413, 663, 40)) {
	  image(Bclick, 367, 613);
	}
	if (overbutton(530, 663, 40)) {
	  image(Cclick, 485, 613);
	}
	if (overbutton(649, 663, 40)) {
	  image(Dclick, 603, 613);
	}
	if (overbutton(769, 663, 40)) {
	  image(Eclick, 722, 613);
	}
	if (overbutton(884, 663, 40)) {
	  image(Fclick, 840, 613);
	}
	if (overbutton(1005, 663, 40)) {
	  image(Gclick, 959, 613);
	}
	if (overbutton(336, 575, 35)) {
	   image(one, 296, ynumberkeys);
	}
	if (overbutton(439, 575, 35)) {
	   image(two, 400, ynumberkeys);
	}
	if (overbutton(542, 575, 35)) {
	   image(three, 503, ynumberkeys);
	}
	if (overbutton(645, 575, 35)) {
	   image(four, 606, ynumberkeys);
	}
	if (overbutton(748, 575, 35)) {
	   image(five, 710, ynumberkeys);
	}
	if (overbutton(851, 575, 35)) {
     image(six, 813, ynumberkeys);
  }
  if (overbutton(954, 575, 35)) {
     image(seven, 916, ynumberkeys);
  }
	if (overRect(500, 518, 290, 17)) {
	  image(spacebarclick, 500, 514);
	}
}

function overRect(x, y, w, h) {
	if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h) {
	  return true;	
	} else {
	  return false;	
	}
}
	
function keyPressed() {
  
 if (key == ' '){
    if (scr == 3 &&  a.length < 99){
      spacesound.play();
      a.push(spacesound);
    } else if (scr ==4 &&  b.length < 99){
      spacesound.play();
      b.push(spacesound);
    } else if (scr ==5 &&  c.length < 99){
      spacesound.play();
      c.push(spacesound);
    }
  }

  if (key == 'A' || key == 'a') {
    if (scr == 3 &&  a.length < 99){
      abass.play();
      a.push(abass);
    } else if (scr ==4 &&  b.length < 99){
      adrum.play();
      b.push(adrum);
    } else if (scr ==5 &&  c.length < 99){
      amel.play();
      c.push(amel);
    } else if (scr == 6){
      amel.play();
    }
	}
	
	if (key == 'B' || key == 'b') {
    if (scr == 3 &&  a.length < 99){
      bbass.play();
      a.push(bbass);
    } else if (scr ==4 &&  b.length < 99){
      bdrum.play();
      b.push(bdrum);
    } else if (scr ==5 &&  c.length < 99){
      bmel.play();
      c.push(bmel);
    }else if (scr == 6){
      bmel.play();
    }
	}
	
	if (key == 'C' || key == 'c') {
    if (scr == 3 &&  a.length < 99){
      cbass.play();
      a.push(cbass);
    } else if (scr ==4 &&  b.length < 99){
      cdrum.play();
      b.push(cdrum);
    } else if (scr ==5 &&  c.length < 99){
      cmel.play();
      c.push(cmel);
    } else if (scr == 6){
      cmel.play();
    }
	} 
	
	if (key == 'D' || key == 'd') {
    if (scr == 3 &&  a.length < 99){
      dbass.play();
      a.push(dbass);
    } else if (scr ==4 &&  b.length < 99){
      ddrum.play();
      b.push(ddrum);
    } else if (scr ==5 &&  c.length < 99){
      dmel.play();
      c.push(dmel);
    } else if (scr == 6){
      dmel.play();
    }
	} 
	
	if (key == 'E' || key == 'e') {
    if (scr == 3 &&  a.length < 99){
      ebass.play();
      a.push(ebass);
    } else if (scr ==4 &&  b.length < 99){
      edrum.play();
      b.push(edrum);
    } else if (scr ==5 &&  c.length < 99){
      emel.play();
      c.push(emel);
    } else if (scr == 6){
      emel.play();
    }
	} 
	if (key == 'F' || key == 'f') {
    if (scr == 3 &&  a.length < 99){
      fbass.play();
      a.push(fbass);
    } else if (scr ==4 &&  b.length < 99){
      fdrum.play();
      b.push(fdrum);
    } else if (scr ==5 &&  c.length < 99){
      fmel.play();
      c.push(fmel);
    } else if (scr == 6){
      fmel.play();
    }
	} 
	if (key == 'G' || key == 'g') {
    if (scr == 3 &&  a.length < 99){
      gbass.play();
      a.push(gbass);
    } else if (scr ==4 &&  b.length < 99){
      gdrum.play();
      b.push(gdrum);
    } else if (scr ==5 &&  c.length < 99){
      gmel.play();
      c.push(gmel);
    } else if (scr == 6){
      gmel.play();
    }
	} 
	if (key == '1' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      amelchord.play();
      c.push(amelchord);
    }
	} 
	if (key == '2' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      bmelchord.play();
      c.push(bmelchord);
    }
	}
	if (key == '3' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      cmelchord.play();
      c.push(cmelchord);
    }
	}
	if (key == '4' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      dmelchord.play();
      c.push(dmelchord);
    }
	}
	if (key == '5' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      emelchord.play();
      c.push(emelchord);
    }
	}
	if (key == '6' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      fmelchord.play();
      c.push(fmelchord);
    }
	}
	if (key == '7' && scr == 5) {
    if (scr == 5 &&  c.length < 99){
      gmelchord.play();
      c.push(gmelchord);
    }
	}
}

function instrumentpages() {
  image(undo, 20, 544);
  image(clearall, 20, 631);
  //image(vol, 110, 548);
  
  image(A, 248, 613);
  image(B, 367, 613);
  image(C, 485, 613);
  image(D, 603, 613);
  image(E, 722, 613);
  image(F, 840, 613);
  image(G, 959, 613);
  
  image(notemap, 150, 109);
  image(notemap, 150, 268);
  image(notemap, 150, 428);
  
  image(smallplay, 1153, 594);
  
  //stansa 1
  var stan1x1 = 212;
  var stan1x2 = 1071;
  var stan1y = 112;
  stroke(255);
  strokeWeight(1);
  line(stan1x1, stan1y, stan1x2, stan1y);
  line(stan1x1, stan1y+20, stan1x2, stan1y+20);
  line(stan1x1, stan1y+40, stan1x2, stan1y+40);
  line(stan1x1, stan1y+60, stan1x2, stan1y+60);
  line(stan1x1, stan1y+80, stan1x2, stan1y+80);
  strokeWeight(2);
  line(stan1x1, stan1y, stan1x1, stan1y+80);
  line(stan1x2, stan1y, stan1x2, stan1y+80);
  
  //stansa 2
  var stan2y = 271;
  strokeWeight(1);
  line(stan1x1, stan2y, stan1x2, stan2y);
  line(stan1x1, stan2y+20, stan1x2, stan2y+20);
  line(stan1x1, stan2y+40, stan1x2, stan2y+40);
  line(stan1x1, stan2y+60, stan1x2, stan2y+60);
  line(stan1x1, stan2y+80, stan1x2, stan2y+80);
  strokeWeight(2);
  line(stan1x1, stan2y, stan1x1, stan2y+80);
  line(stan1x2, stan2y, stan1x2, stan2y+80);
  
  //stansa 3
  var stan3y = 431;
  strokeWeight(1);
  line(stan1x1, stan3y, stan1x2, stan3y);
  line(stan1x1, stan3y+20, stan1x2, stan3y+20);
  line(stan1x1, stan3y+40, stan1x2, stan3y+40);
  line(stan1x1, stan3y+60, stan1x2, stan3y+60);
  line(stan1x1, stan3y+80, stan1x2, stan3y+80);
  strokeWeight(2);
  line(stan1x1, stan3y, stan1x1, stan3y+80);
  line(stan1x2, stan3y, stan1x2, stan3y+80);
  
}

function home() {
  image(back, 0, 0);
  
  homescrollovers();
  
  var tinyY = 465;
  
  image(bigbeat, 43, 135);
  image(Tbeat, 163, 66);
  //image(tinyplay, 155, tinyY);
  image(tinypause, 240-40, tinyY);
  
  image(bigperc, 464, 135);
  image(Tperc, 518, 66);
  //image(tinyplay, 580, tinyY);
  image(tinypause, 665-40, tinyY);
  
  image(bigmel, 877, 135);
  image(Tmel, 982, 66);
  //image(tinyplay, 997, tinyY);
  image(tinypause, 1080-40, tinyY);
  
  image(bigplay, 567, 534);
  image(newsound, 445, 566);
  image(pause, 743, 566);
  
  
  //beat button
 	if (overbutton(bx, y, r)) {
		image(bigbeatclick, 43, 135);
	} 
	/*if (overbutton(155+21, tinyY+21, 21)) {
		image(tinyplayclick, 155, tinyY);
	} */
	if (overbutton(240+21-40, tinyY+21, 21)) {
		image(tinypauseclick, 240-40, tinyY);
	} 
	
	//perc button
	if (overbutton(px, y, r)) {
		image(bigpercclick, 464, 135);
	} 
	/*	if (overbutton(580+21, tinyY+21, 21)) {
		image(tinyplayclick, 580, tinyY);
	} */
	if (overbutton(665+21-40, tinyY+21, 21)) {
		image(tinypauseclick, 665-40, tinyY);
	} 
	
  //melody button
	if (overbutton(mx, y, r)) {
		image(bigmelclick, 877, 135);
	} 
	/*	if (overbutton(997+21, tinyY+21, 21)) {
		image(tinyplayclick, 997, tinyY);
	} */
	if (overbutton(1080+21-40, tinyY+21, 21)) {
		image(tinypauseclick, 1080-40, tinyY);
	} 
	
	//play button
	if (overbutton(plx, ply, plr)) {
		image(bigplayclick, 567, 534);
	} 
	//new button
	if (overbutton(nx, ny, nr+2)) {
		image(newsoundclick, 445, 566);
	} 
	//pause button
	if (overbutton(pax, ny, nr+2)) {
		image(pauseclick, 743, 566);
	} 
	
	if(millis() > lastTimePlayed + timeBetween) {
	  //line(x, 0, x, 100);
	  playbassscreenshome();
	  playpercscreenshome();
	  playmelodyscreenshome();
	  lastTimePlayed = millis();
	 // x++;
	}
	image(cursordot, mouseX-10, mouseY-10);
}

function whennoteisclicked() {
  
  if (keyIsPressed){
	  if (key == 'A' || key == 'a') {
		image(Aclick, 248, 613);
   } else if (key == 'B' || key == 'b') {
     image(Bclick, 367, 613);
   } else if (key == 'C' || key == 'c') {
     image(Cclick, 485, 613);
   } else if (key == 'D' || key == 'd') {
     image(Dclick, 603, 613);
   } else if (key == 'E' || key == 'e') {
     image(Eclick, 722, 613);
   } else if (key == 'F' || key == 'f') {
     image(Fclick, 840, 613);
   } else if (key == 'G' || key == 'g') {
     image(Gclick, 959, 613);
   } else if (key == ' '){
     image(spacebarclick, 500, 570);
   }
	}
}


function textt() {
  
  //text for "click screen or use keyboard"
  noStroke();
	fill(255);
  textFont(AndaleMono);
	textSize(12);
  text("click screen or use keyboard", 550, 707);
}   	 

//note array for bass page
/*function playbassscreens() {
  if (playbass==true && a.length>0){
	//if (playbass===true){
	 if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = a [indexa];
    s.play();
    lastTimePlayed = millis(); 
    indexa = indexa + 1;
    if (indexa >= a.length) {
      indexa = 0;
    }
   }
	}
}

//note array for percussion/drum page
function playpercscreens() {
  	if (playdrum==true && b.length>0){
	 if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = b [indexb];
    s.play();
    lastTimePlayed = millis(); 
    indexb = indexb + 1;
    if (indexb >= b.length) {
      indexb = 0;
    }
   }
	}
}

function playmelodyscreens() {
 if (playmelody==true && c.length>0){
	 if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = c [indexc];
    s.play();
    lastTimePlayed = millis(); 
    indexc = indexc + 1;
    if (indexc >= c.length) {
      indexc = 0;
    }
   }
	}
}*/

function playbassscreenshome() {
  if (playbass===true && a.length>0){
	 //if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = a [indexa];
    s.play();
    //lastTimePlayed = millis(); 
    indexa = indexa + 1;
    if (indexa >= a.length) {
      indexa = 0;
    }
   //}
	}
}

function playpercscreenshome() {
  	if (playdrum===true && b.length>0){
	 //if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = b [indexb];
    s.play();
    //lastTimePlayed = millis(); 
    indexb = indexb + 1;
    if (indexb >= b.length) {
      indexb = 0;
    }
   //}
	}
}

//note array for melody page
function playmelodyscreenshome() {
 if (playmelody===true && c.length>0){
	 //if(millis() - lastTimePlayed > timeBetween) {
    //time to play next sound
    var s = c [indexc];
    s.play();
    //lastTimePlayed = millis(); 
    indexc = indexc + 1;
    if (indexc >= c.length) {
      indexc = 0;
    }
   //}
	} 
}

function beatpage() {
  image(back, 0, 0);
  image(spacebar, 500, 570);
  image(smallbeat, 20, 20);
  instrumentpages();
  beatanddrumscrollovers();
  
  // Draw the notes based on the array values
  var x = noteX;
  var y = noteY;


  for (var i = 0; i < a.length; i+= 1) {
    var yoffset = 0;
    if (a[i] == abass) {
      yoffset -= 0; 
    } else if (a[i] == bbass) {
      yoffset -= 10; 
    } else if (a[i] == cbass) {
      yoffset -= 20; 
    } else if (a[i] == dbass) {
      yoffset -= 30; 
    } else if (a[i] == ebass) {
      yoffset -= 40; 
    } else if (a[i] == fbass) {
      yoffset -= 50; 
    } else if (a[i] == gbass) {
      yoffset -= 60; 
    } else if (a[i] == spacesound){
      yoffset -= 660;
    }
    image(note, x, y+yoffset);
    x += 25;
    //console.log(x);
     if ((x + 25) >= 1060){
       y = y + 159;
       x = 230;
     }
  }
  
  textt();
  
  if (overbutton(beatx, beaty, beatr)) {
		image(smallbeatclick, 20, 20);
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("HOME", 60, 130);
	} 
	
	whennoteisclicked();
	
	if(millis() > lastTimePlayed + timeBetween) {
	  playbassscreenshome();
	  playpercscreenshome();
	  playmelodyscreenshome();
	  lastTimePlayed = millis();
	}
	image(cursordot, mouseX-10, mouseY-10);
}


function percussion() {
  image(back, 0, 0);
  image(spacebar, 500, 570);
  image(smallperc, 20, 20);
  instrumentpages();
  beatanddrumscrollovers();
  
   // Draw the notes based on the array values
  var x = noteX;
  var y = noteY;

 
  for (var i = 0; i < b.length; i+= 1) {
    var yoffset = 0;
    if (b[i] == adrum) {
      yoffset -= 0; 
    } else if (b[i] == bdrum) {
      yoffset -= 10; 
    } else if (b[i] == cdrum) {
      yoffset -= 20; 
    } else if (b[i] == ddrum) {
      yoffset -= 30; 
    } else if (b[i] == edrum) {
      yoffset -= 40; 
    } else if (b[i] == fdrum) {
      yoffset -= 50; 
    } else if (b[i] == gdrum) {
      yoffset -= 60; 
    } else if (b[i] == spacesound){
      yoffset -= 660;
    }
    image(note, x, y+yoffset);
    x += 25;
    //console.log(x);
     if ((x + 25) >= 1060){
       y = y + 159;
       x = 230;
     }
  }

  textt();
  
  if (overbutton(beatx, beaty, beatr)) {
		image(smallpercclick, 20, 20);
		noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("HOME", 60, 130);
	} 
  
	whennoteisclicked();

	if(millis() > lastTimePlayed + timeBetween) {
	  playbassscreenshome();
	  playpercscreenshome();
	  playmelodyscreenshome();
	  lastTimePlayed = millis();
	}
	image(cursordot, mouseX-10, mouseY-10);
}


function melody() {
  image(back, 0, 0);
  image(spacebar, 500, 514);
  image(smallmelody, 20, 20);
  instrumentpages();
  melodyscrollover();
  
  // Draw the notes based on the array values
  var x = noteX;
  var y = noteY;

 //for letter notes
  for (var i = 0; i < c.length; i+= 1) {
    var yoffset = 0;
    if (c[i] == amel) {
      yoffset -= 0; 
    } else if (c[i] == bmel) {
      yoffset -= 10; 
    } else if (c[i] == cmel) {
      yoffset -= 20; 
    } else if (c[i] == dmel) {
      yoffset -= 30; 
    } else if (c[i] == emel) {
      yoffset -= 40; 
    } else if (c[i] == fmel) {
      yoffset -= 50; 
    } else if (c[i] == gmel) {
      yoffset -= 60; 
    } else if (c[i] == spacesound){
      yoffset -= 660;
    }
    image(note, x, y+yoffset);
    x += 25;
     if ((x + 25) >= 1060){
       y = y + 159;
       x = 230;
     }
  }
  
  x = noteX;
  y = noteY;
  //chord visuals /////////////////////
  for (var j = 0; j < c.length; j+= 1) {
    //var yoffset = 0;
    if (c[j] == amelchord) {
      //yoffset -= 60; 
      image(achord, x, y-62);
    } 
    if (c[j] == bmelchord) {
      //yoffset -= 60; 
      image(bchord, x, y-62);
    } 
    if (c[j] == cmelchord) {
      //yoffset -= 60; 
      image(cchord, x, y-62);
    }
    if (c[j] == dmelchord) {
      //yoffset -= 60; 
      image(dchord, x, y-62);
    } 
    if (c[j] == emelchord) {
      //yoffset -= 60; 
      image(echord, x, y-62);
    }
    if (c[j] == fmelchord) {
      //yoffset -= 60; 
      image(fchord, x, y-62);
    }
    if (c[j] == gmelchord) {
      //yoffset -= 60; 
      image(gchord, x, y-62);
    } 
    x += 25;
     if ((x + 25) >= 1060){
       y = y + 159;
       x = 230;
     }
  }
  
  textt();
  
  if (overbutton(beatx, beaty, beatr)) {
	   image(smallmelodyclick, 20, 20);
	   noStroke();
		fill(255);
		textFont(AndaleMono);
		textSize(12);
    text("HOME", 60, 130);
  } 
  
	if (keyIsPressed){
	  if (key == 'A' || key == 'a') {
		image(Aclick, 248, 613);
   } else if (key == 'B' || key == 'b') {
     image(Bclick, 367, 613);
   } else if (key == 'C' || key == 'c') {
     image(Cclick, 485, 613);
   } else if (key == 'D' || key == 'd') {
     image(Dclick, 603, 613);
   } else if (key == 'E' || key == 'e') {
     image(Eclick, 722, 613);
   } else if (key == 'F' || key == 'f') {
     image(Fclick, 840, 613);
   } else if (key == 'G' || key == 'g') {
     image(Gclick, 959, 613);
   } else if (key == ' '){
     image(spacebarclick, 500, 514);
   }
	}
	
	
   if (keyIsPressed){
	  if (key == '1') {
		image(oneclick, 296, ynumberkeys);
   } else if (key == '2') {
     image(twoclick, 400, ynumberkeys);
   } else if (key == '3') {
     image(threeclick, 503, ynumberkeys);
   } else if (key == '4') {
     image(fourclick, 606, ynumberkeys);
   } else if (key == '5') {
     image(fiveclick, 710, ynumberkeys);
   } else if (key == '6') {
     image(sixclick, 813, ynumberkeys);
   } else if (key == '7') {
     image(sevenclick, 916, ynumberkeys);
   } 
	}
	
  image(one, 296, ynumberkeys);
  image(two, 400, ynumberkeys);
  image(three, 503, ynumberkeys);
  image(four, 606, ynumberkeys);
  image(five, 710, ynumberkeys);
  image(six, 813, ynumberkeys);
  image(seven, 916, ynumberkeys);
  
	if(millis() > lastTimePlayed + timeBetween) {
	  playbassscreenshome();
	  playpercscreenshome();
	  playmelodyscreenshome();
	  lastTimePlayed = millis();
	}
  image(cursordot, mouseX-10, mouseY-10);
}

/*function instructions(){
  image(back, 0, 0);
  image(instructclick, 20, 700);
  image(instructions, 2, 2);
  if (overbutton(20, 700, 21)){
    instructclick
  }
  image(cursordot, mouseX-10, mouseY-10);
}*/

