/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So this is a file for client-side modifications (mods). There is one for the server side as well.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist.
*/

//when my players joins the game for the first time, after everything in the room is initialized
//called also for lurk mode (nickName == "")

var familyRoles;
var familyIntro = "The Family Room is for roleplay.\n"
var rolesInfo = {
    wife: ["Emily", "You are Emily, a restless housewife."],
    husband: ["Dick", "You are Richard and you are back from work."],
    child1: ["Sam", "You are Samuel and you are upset"],
    child2: ["Grace", "You are Grace, a princess."],
    child3: ["Phoebe", "You are Phoebe, and life sucks."],
    uncle: ["Uncle", "You are the Uncle and you don't remember what you were doing."],
    milkman: ["Milkman", "You are the Milkman, and you are delivering milk."],
    boyfriend: ["Jamal", "You are Jamal, Phoebe's new boyfriend."],
    fly: ["Fly", "You are just a fly on the wall."],
}

function initMod(playerId, roomId) {
    print("Mod: " + players[playerId].nickName + " (you) joined the game at " + roomId);

    //prevent duplicate listeners
    if (!socket.hasListeners('musicOn')) {

        socket.on('musicOn', function (beat) {

            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        //music is playing
        socket.on('musicEnter', function (beat) {
            //start from random
            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        socket.on('musicOff', function (beat) {
            print("The MOD module communicates with a custom socket event: music off");
            //just to be sure I stop all the beats
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
            SOUNDS.DJStop.play();
            bg.rewind();
            bg.stop();
        });


        //music is playing stop all bit without record scratch
        socket.on('musicExit', function (beat) {
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
        });



        socket.on('updateRoles', function (newcomerId, fr) {

            //keep track of the roles
            familyRoles = fr;
            var newcomerAssigned = false;


            //change all the sprites just to be sure
            for (var roleId in familyRoles) {
                var rolePlayer = familyRoles[roleId];

                //role assigned
                if (rolePlayer != "") {
                    print(rolePlayer + " is roleplaying as " + roleId);
                    if (players[rolePlayer] != null) //player exists
                    {
                        //newcomer has a role
                        if (newcomerId == rolePlayer)
                            newcomerAssigned = true;

                        changeCharacter(rolePlayer, roleId, roleId + "Walk", roleId + "Emote");

                        //newcomer is me > intro text
                        if (newcomerId == me.id) {
                            longText = familyIntro + rolesInfo[roleId][1];
                            longTextLines = -1;
                            longTextAlign = "center";
                        }
                    }
                }
            }

            //server doesn't bother to keep track of spectators so all newcomers without roles are flies
            if (!newcomerAssigned) {

                changeCharacter(newcomerId, "fly", "flyWalk", "flyEmote");

                if (newcomerId == me.id) {
                    longText = familyIntro + rolesInfo.fly[1];
                    longTextLines = -1;
                    longTextAlign = "center";
                }

            }

        });

  socket.on('reloadVideo', function (videoId)
	{
		print("reloadVideo received");
		setVideo(videoId, true)
	});

	socket.on('changeVideo', function (videoId)
	{
		print("changeVideo received");
		setVideo(videoId, false)
	});

    }

}

//roomnameEnter: called when a player enters a room, after all the normal operations
//called also for lurk mode (nickName == "")
function experimentsEnter(playerId, roomId) {
    print("MOD: " + players[playerId].nickName + " entered room " + roomId);

    //a full screen welcome text appears
    longText = "Welcome " + players[playerId].nickName;
    longTextLines = -1;
    longTextAlign = "center";
}

//roomnameExit: called right before a player exits or disconnects
function experimentsExit(playerId) {
    print("MOD: " + players[playerId].nickName + " exited room " + roomId);
}

//called every frame in a specific room - beware: this is client side, everything non deterministic and non server-driven
//may misalign the players clients
function experimentsUpdate() {
    //print("MOD: updating experiments");
}

//roomnameTalk: called when somebody in the room talks, passes player object and the new bubble (before it's added to the stack and before the sound is made)
function experimentsTalk(playerId, bubble) {
    print("MOD: " + players[playerId].nickName + " said " + bubble.message);

    //overwrites the color
    bubble.color = color("#FFFFFF");
    //all bubbles show up in the center and lines are not drawn
    /*
    bubble.x = WIDTH / 2 - bubble.w / 2;
    bubble.y = HEIGHT / 2;
    bubble.px = 0;
    bubble.py = 0;
    */
}

//this can override or modify the normal player drawing function
function experimentsDrawSprite(playerId, sprite, drawingFunction) {
    //print("MOD: " + players[playerId].nickName + " being drawn experimentally " + sprite.width); //let's not call this at every frame

    //the normal drawing function comment this out to see the examples below
    drawingFunction();

    /*
    //don't try this
    tint(random(0, 255), random(0, 255), random(0, 255));
    drawingFunction();
    noTint();
    */

    //draw a square
    /*
    fill(0);
    rect(0, 0, 10, 10);
    */

    /*
    //sprites drawn horizontally and 20 pixel above the grund
    push();
    translate(0, -20);
    angleMode(DEGREES);
    rotate(90);
    //the original drawing function
    drawingFunction();
    pop();
    */

}

function mirrorRoomDrawSprite(playerId, sprite, drawingFunction) {

    if (players[playerId] != null) {
        //original
        //sprite.mirrorX(1);
        drawingFunction();

        //mirrored
        push();
        scale(-1, 1);

        if (sprite.mirrorX() == 1) {
            translate(players[playerId].x - WIDTH / 2, 0);
        }
        else {
            translate(WIDTH / 2 - players[playerId].x, 0);
        }
        //the original drawing function
        drawingFunction();
        pop();
    }
}

function mirrorRoomTalk(playerId, bubble) {
    var p = players[playerId];
    var bx = (WIDTH - p.x);//(p.x < WIDTH / 2) ? (WIDTH - p.x) : (p.x - WIDTH / 2);

    var messageReverse = bubble.message.split("").reverse().join("");
    var mirrorBubble = new Bubble(bubble.pid, messageReverse, p.labelColor, bx, p.y, bubble.offY);
    mirrorBubble.color = bubble.color;
    pushBubbles(mirrorBubble);
    bubbles.push(mirrorBubble);

    //remove lines
    bubble.px = -1;
    bubble.py = -1;

}

function censorshipRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "In the Censorship Room each word can only be uttered once and never again.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function darkRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "The Dark Room is only for cybersex. You must be 18 years or older to enter.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}


function rhymeRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "In the Rhyme Room you can only rhyme with the sentences in the air.\nNo repeats, no made-up words. The best poet wins.";
        longTextLines = -1;
        longTextAlign = "center";
        bg.rewind();
        bg.stop();
    }
}

function VIPRoomEnter(playerId, roomId) {
    if (playerId == me.id) {
        longText = "Only 3 visitors are allowed in the VIP room. First in, first out.";
        longTextLines = -1;
        longTextAlign = "center";
    }
}

function VIPRoomExit(playerId) {
    //stop music before you leave, if any
    //if (ROOMS.VIProom.musicLoop != null) {
    ROOMS.VIProom.musicLoop.stop();
    //}
}



//when ANYBODY Enters
function thirdFloorEnter(playerId, sprite, drawingFunction) {
    //somebody else is entering - turn into sheep
    if (playerId != me.id) {
        turnToSheep(playerId);
    }
}


//called when I receive data from a player already in the room
function thirdFloorIntro(playerId, roomId) {
    turnToSheep(playerId);
}

function turnToSheep(playerId) {
    var p = players[playerId];

    //sheepIdle has been preloaded via DATA
    p.sheepWalkAnimation = loadAnimation(loadSpriteSheet(IMAGES.sheepWalk, 11, 18, 3));
    p.sheepIdleAnimation = loadAnimation(loadSpriteSheet(IMAGES.sheepIdle, 11, 18, 2));
    removeSprite(p.sprite);
    p.sprite = createSprite(10, 10);
    p.sprite.scale = ASSET_SCALE;
    p.sprite.depthOffset = 18 / 2;
    p.sprite.addAnimation('walk', p.sheepWalkAnimation);
    p.sprite.addAnimation('emote', p.sheepIdleAnimation);
}

//BAAA AAA AAAAA
function thirdFloorTalk(playerId, bubble) {
    if (playerId != me.id) {

        var l = bubble.message.length - 1;
        var baa = "B";
        for (var i = 0; i < l; i++) {
            if (bubble.message[i] != " ")
                baa += "A";
            else
                baa += " ";
        }

        bubble.message = baa;
        bubble.tw = textWidth(bubble.message);
        bubble.w = round(bubble.tw + TEXT_PADDING * 2);

        bubble.x = round(bubble.px - bubble.w / 2);
        if (bubble.x + bubble.w + BUBBLE_MARGIN > width) {
            bubble.x = width - bubble.w - BUBBLE_MARGIN
        }
        if (bubble.x < BUBBLE_MARGIN) {
            bubble.x = BUBBLE_MARGIN;
        }

    }

}

//called when I receive data from a player already in the room
//should arrive
function familyRoomIntro(playerId, roomId) {
    var assigned = false;
    //must override the normal intros
    //check this person's role
    for (var roleId in familyRoles) {
        var rolePlayer = familyRoles[roleId];

        //role assigned
        if (rolePlayer == playerId) {
            //print("Ah ha " + playerId + " is " + roleId);
            changeCharacter(rolePlayer, roleId, roleId + "Walk", roleId + "Emote");
            assigned = true;
        }

    }

    if (!assigned)
        changeCharacter(playerId, "fly", "flyWalk", "flyEmote");
}


//changes the appearance of the character, only for this room
function changeCharacter(playerId, roleId, walkSS, emoteSS) {
    var p = players[playerId];

    print(playerId + " changes appearance becoming " + roleId);
    //spritesheet have been preloaded, standard size and animation avatar
    p.altWalkAnimation = loadAnimation(loadSpriteSheet(IMAGES[walkSS], AVATAR_W, AVATAR_H, 4));
    p.altEmoteAnimation = loadAnimation(loadSpriteSheet(IMAGES[emoteSS], AVATAR_W, AVATAR_H, 2));

    removeSprite(p.sprite);

    p.sprite = createSprite(10, 10, 10, 10);
    p.sprite.scale = ASSET_SCALE;
    p.sprite.addAnimation('walk', p.altWalkAnimation);
    p.sprite.addAnimation('emote', p.altEmoteAnimation);
    p.sprite.label = rolesInfo[roleId][0];
    p.sprite.depthOffset = AVATAR_H / 2;

    if (roleId != "fly") {
        p.sprite.onMouseOver = function () {
            rolledSprite = this;
        };

        p.sprite.onMouseOut = function () {
            if (rolledSprite == this)
                rolledSprite = null;
        };
    }
}


//the sculpture in my first floor is randomize between the 4 variations
//appears differently to different users but always the same in the same browser
function firstFloorEnter(playerId, roomId) {
    if (playerId == me.id) {

        var s = localStorage.getItem("sculpture");

        if (s == null) {
            s = floor(random(1, 5));
            window.localStorage.setItem("sculpture", s);
        }

        //getSprites is a p5 play function
        var roomSprites = getSprites();

        for (var i = 0; i < roomSprites.length; i++) {
            if (roomSprites[i].id != null)
                if (roomSprites[i].id == "sculpture" + s) {
                    roomSprites[i].visible = true;
                }
        }
    }
}

	//var videoUrl = "https://www.youtube.com/embed/iGxrq19AiBI?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=iGxrq19AiBI";

	var youtubeUrl = "https://www.youtube.com/embed/";

	var youtubeParameters = "?autoplay=1&mute=0&enablejsapi=1&loop=1";

	var currentLocalYoutubeId = null; //null;


    function dBsZaalEnter(playerId, roomId)
	{
		print("Freeplay! " + players[playerId].nickName + " entered room " + roomId);
		if(playerId == me.id && players[playerId].nickName.length > 0)
		{
			print("player with name entered dBs");
      e = document.getElementById("video-container");
      if (e != null)
        e.style.display = "block";
			// start the video!
      //setVideo("9oleJ4OUnxU", true, "");
			//setVideo("playlist&list=PLNiztf0SpnykWe8WJuka-EPJLvKCNg5XC");
		}
	 // e = document.getElementById("talk-form");
		//if (e != null)
			//e.style.display = "none";

	//	e = document.getElementById("no-talkie");
		//if (e != null)
		//	e.style.display = "block";
    }

     function dBsZaalExit(playerId)
	   {
        //setVideo("", true, "");

  		if(playerId == me.id)
  		{
  			console.log("I left");
  			e = document.getElementById("video-container");
  			if (e != null)
  				e.style.display = "none";

  			e = document.getElementById("talk-form");
  			if (e != null)
  			  e.style.display = "block";

  			e = document.getElementById("no-talkie");
  		  	if (e != null)
  			  e.style.display = "none";

  		}
  		else
  		{
  			console.log(players[playerId].nickName + " Left Freeplay");
  		}
    }


    function setVideo(videoId, reload, playlistId) //function setVideo(videoId, reload, playlistId)
	  {
  		if(nickName == "")
  		{
  			console.log("Player in lurk mode, don't start video yet!");
  			return;
  		}

  		if (videoId != currentLocalYoutubeId || reload == true)
  		{// only update video if it has changed!
  			currentLocalYoutubeId = videoId;
  			var videoUrl = youtubeUrl + videoId + youtubeParameters + playlistId;
  			player = select("#yt_video");
  			player.attribute('src', videoUrl);
  		}
	  }

    /*

	function dBsZaalEnter(playerId, roomId)
	{
		print("Freeplay! " + players[playerId].nickName + " entered room " + roomId);
		if(playerId == me.id && players[playerId].nickName.length > 0)
		{
			print("player with name entered dBs");
			// start the video!
      setVideo("BmdHXUlAIgc");
			//setVideo("playlist&list=PLNiztf0SpnykWe8WJuka-EPJLvKCNg5XC");
		}
	 // e = document.getElementById("talk-form");
		//if (e != null)
			//e.style.display = "none";

	//	e = document.getElementById("no-talkie");
		//if (e != null)
		//	e.style.display = "block";
	}

	//roomnameExit: called right before a player exits or disconnects
	// this seems to just be called for other players!
	// Had to modify client to have it called for the play leaving
	function dBsZaalExit(playerId)
	{
		if(playerId == me.id)
		{
			console.log("I Left Freeplay");
			e = document.getElementById("video-container");
			if (e != null)
				e.style.display = "none";
				setVideo("");

			e = document.getElementById("talk-form");
			if (e != null)
			  e.style.display = "block";

			e = document.getElementById("no-talkie");
		  	if (e != null)
			  e.style.display = "none";

		}
		else
		{
			console.log(players[playerId].nickName + " Left Freeplay");
		}
    }

	function dBsBarEnter(playerId, roomId)
	{
		if(playerId == me.id)
		{
			e = document.getElementById("video-container");
			if (e != null)
			e.style.display = "none";
	    }
	}
*/

/*
    function LIFFTheater2Enter(playerId, roomId)
    {
        //Empty just to declare this
    }

    function LIFFTheater2Exit(playerId)
    {
        //Empty just to declare this
    }

    function LIFFOutsideEnter(playerId, roomId)
    {
        //Empty just to declare this
    }

    function LIFFOutsideExit(playerId)
    {
        //Empty just to declare this
    }
    */
