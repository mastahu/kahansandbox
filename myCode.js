		var sketchProc=function(processingInstance){ with (processingInstance){
// NIE RUSZAĆ TEGO NA GÓRZE /\ 
		
		
size(400, 400); 
frameRate(30);


background(0, 255, 0);

// tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);

// stem
fill(48, 130, 31);
rect(176, 103, 12, 32); 


draw = function() {
    // take a bite out of the tomato!
fill(255, 255, 255);
ellipse(mouseX, mouseY, 60, 60);
};


// NIE RUSZAĆ TEGO POD SPODEM \/ 
		}};