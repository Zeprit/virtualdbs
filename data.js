//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "dBsBar",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click or Tap to move"
};

module.exports.ROOMS =
{
      dBsZaal: {
        bg: "dBsStageBG.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "dBsStage_areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 170,
        tYOffset: 0,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "dBsBar", label: "Bar", point: [247, 136], enterPoint: [94, 74], obstacle: false },
        },
        things: {

        }
    },

    dBsBar: {
        bg: "dBsBarBG.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "dBsBar_areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 45,
        tYOffset: 0,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "dBsZaal", label: "Zaal", point: [94, 68], enterPoint: [234, 140], obstacle: true },
            hff4500: { cmd: "enter", room: "dBsZaal", label: "Zaal", point: [94, 68], enterPoint: [234, 140], obstacle: false },
            hff7700: { cmd: "enter", room: "dBsLobby", label: "Lobby", point: [156, 26], enterPoint: [156, 182], obstacle: false },
            h00ffbc: { cmd: "enter", room: "dBsHall", label: "Hall", point: [128,190], enterPoint: [127,34], obstacle: false },
            h1400ff: { cmd: "text", url: "https://shop.dbstudio.nl/", label: "dBs Shop", txt: "Voor alle dBs merchandise, of zo een heerlijk drankje!\n\nKlik of Tik op dit bericht om de winkel te bezoeken.", align: "center", lines: 5, point: [183,70] },
            //hff0000: { cmd: "text", url: "https://portal.dbstudio.nl/", label: "Reserveringen", txt: "Wil je komen repeteren in onze toffe oefenstudios?\n\nKlik of Tik op dit bericht.", align: "center", lines: 4, point: [189,149] },
            h0000ff: { cmd: "text", url: "https://www.dbstudio.nl/concerten/", label: "Programma", txt: "Klik of Tik op dit bericht om te kijken wat voor bands of evenementen er aan komen!", align: "center", lines: 3, point: [59,66] },

        },
        things: {

        }
    },

    dBsLobby: {
        bg: "dBsLobbyBG.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "dBsLobby_areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 45,
        tYOffset: 0,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "dBsBeerGarten", label: "Beer Garten", point: [50,35], enterPoint: [128,189], obstacle: false },
            h00ffbc: { cmd: "enter", room: "dBsBar", label: "Bar", point: [156, 184], enterPoint: [156, 30], obstacle: false },
        },
        things: {

        }
    },

    dBsBeerGarten: {
        bg: "dBsBeerGartenBG.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "dBsBeerGarten_areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 45,
        tYOffset: 0,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "dBsLobby", label: "Lobby", point: [128,189], enterPoint: [50,35], obstacle: false },
        },
        things: {

        }
    },

   dBsHall: {
        bg: "dBsHall.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "dBsHall_areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 45,
        tYOffset: 0,
        spawn: [72, 90, 173, 152],
        areaColors:
        {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "dBsBar", label: "Bar", point: [127,13], enterPoint: [127,186], obstacle: false },
            hff7700: { cmd: "text", url: "https://portal.dbstudio.nl/", label: "Reserveringen", txt: "Wil je komen repeteren in onze toffe oefenstudios?\n\nKlik of Tik op dit bericht.", align: "center", lines: 4, point: [126,130], obstacle: true },
        },
        things:
        {
            hallLamp: { file: "dBsHallLamp.png", frames: 1, frameDelay: 10, position: [105, 0]},
            hallRedLamp: { file: "dBsHallRedLamp.png", frames: 1, frameDelay: 10, position: [144, 133]},
        }
    },



/*
    IFALobby:
    {
        bg: "ifalobby-bg1.png",
        frames: 6,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#011221",
        tint: "#ffffff",
        bubblesY: 44,
        spawn: [95, 138, 144, 158],
        area: "ifalobby-areas.png",

        areaColors:
        {
            h66ff00: { cmd: "enter", room: "IFATheater1", label: "Theatre Room 1", point: [25,43], enterPoint: [127,188], obstacle: true },
            h00eeff: { cmd: "enter", room: "IFATheater2", label: "Theatre Room 2", point: [225,39], enterPoint: [127,188], obstacle: true },
            //h00e436: { cmd: "enter", room: "IFAOutside", label: "Outside", point: [132, 192], enterPoint: [128, 118], obstacle: false },

            //shop
            he17715: { cmd: "text", url: "https://filmfestivalassen.nl/ifa-shop/", label: "Webshop", txt: "Get some goods and support IFA!\n\nClick or Tap on this box to visit the store", align: "center", lines: 4, point: [180,129],obstacle: true },
            //program
            h23cbb3: { cmd: "text", url: "https://filmfestivalassen.nl/films-tickets/", label: "Program", txt: "The IFA film program\n\nClick or Tap on this box to visit the website", align: "center", lines: 4, point: [77,129],obstacle: true},
            //food
            h1ff25b: { cmd: "text", url: "https://filmfestivalassen.nl/een-hapje-en-drankje-voor-onder-de-film/", label: "Food & Drinks", txt: "Tasty food and beverages\n\nTap on this box to visit the store", align: "center", lines: 4, point: [128, 128],obstacle: true},
            //tickets
            h2525c2: { cmd: "text", url: "https://filmfestivalassen.nl/films-tickets/", label: "Tickets", txt: "Get your IFA tickets here\n\nClick or Tap on this box to visit the ticket store", align: "center", lines: 4, point: [228,160],obstacle: true},
            //Publiekswaardering
            h23b63f: { cmd: "text", url: "https://filmfestivalassen.nl/top-10-ifa-2021/", label: "IFA Top 10", txt: "View and vote for your favourite IFA film\n\nClick or Tap on this box to visit the website", align: "center", lines: 5, point: [73,129],obstacle: true},

            //posters
            hdc2626: { cmd: "text", label: "Kuessipan", align: "center", lines: 1 },
            h266cdc: { cmd: "text", label: "The Dilemma of Desire", align: "center", lines: 1},
            hdc26a0: { cmd: "text", label: "Needle Park Baby", align: "center", lines: 1},
        },

        things:
        {
            Railing: { file: "ifalobby-railing.png", frames: 1, frameDelay: 10, position: [52, 39] },
            table1: { file: "ifalobby-tables.png", frames: 1, frameDelay: 10, position: [8,160]},
            //barperson1: { file: "medewerker1.png", frames: 1, frameDelay: 10, position: [49, 163], label: "Waiter" },
            //barperson2: { file: "medewerker3.png", frames: 1, frameDelay: 10, position: [13, 150], label: "Waiter" },
            //lobbyperson1: { file: "ifa-medewerker1.png", frames: 1, frameDelay: 10, position: [10, 70], label: "IFA Attendant", command: { cmd: "text", txt: "IFA Attendant:\nSsssh, there are movies playing in this room. Please be quiet when you enter.", align: "left", lines: 5, point: [22, 88] } },
            //lobbyperson2: { file: "ifa-medewerker2.png", frames: 1, frameDelay: 10, position: [10, 70], label: "IFA Attendant", command: { cmd: "text", txt: "IFA Attendant:\nSsssh, there are movies playing in this room. Please be quiet when you enter.", align: "left", lines: 5, point: [22, 88] } },

            //bar
            //glass
        }
    },

    IFATheater1:
    {
         bg: "ifatheatre1.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "ifatheatre1-areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 170,
        spawn: [116,166,140,176],

        areaColors:
        {
            //h will be replaced by #
            he17715: { cmd: "enter", room: "IFALobby", label: "Lobby", point: [127,190], enterPoint: [25,41], obstacle: false },
        },
        things: {
        shadow: { file: "ifatheatre1-shadow.png", frames: 1, frameDelay: 10, position: [0, 0] },
        chairs1: { file: "ifatheatre1-chairs2.png", frames: 1, frameDelay: 10, position: [14, 164] },
        chairs2: { file: "ifatheatre1-chairs3.png", frames: 1, frameDelay: 10, position: [14, 147] },
        chairs3: { file: "ifatheatre1-chairs4.png", frames: 1, frameDelay: 10, position: [14, 130] },
        chairs4: { file: "ifatheatre1-chairs5.png", frames: 1, frameDelay: 10, position: [14, 113] },
        }
    },


    IFATheater2:
    {
        bg: "ifatheatre2.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 2,
        area: "ifatheatre2-areas.png",
        tint: "#ffffff",
        pageBg: "#130102",
        bubblesY: 170,
        spawn: [112, 174, 142, 182],
        areaColors: {
            //h will be replaced by #
            he17715: { cmd: "enter", room: "IFALobby", label: "Lobby", point: [127,190], enterPoint: [225,39], obstacle: false },
        },
        things: {
        shadow: { file: "ifatheatre2-shadow.png", frames: 1, frameDelay: 10, position: [0, 0] },
        chairs1: { file: "ifatheatre2-chairs1.png", frames: 1, frameDelay: 10, position: [68, 147] },
        chairs2: { file: "ifatheatre2-chairs2.png", frames: 1, frameDelay: 10, position: [68, 130] },
        chairs3: { file: "ifatheatre2-chairs3.png", frames: 1, frameDelay: 10, position: [68, 113] },
        }
    },


    IFAOutside:
    {
        bg: "likelike-outside-omoma.png",
        frames: 4,
        frameDelay: 20,
        avatarScale: 2,
        pageBg: "#011221",
        //tint: "#fdeac8",
        tint: "#ffffff",
        bubblesY: 44,
        spawn: [94, 166, 163, 199],

        area: "likelikeOutside-areas.png",
        areaColors:
        {

        },

        things:
        {

        },
    },
*/


/*
    LIFFLobby:
    {
        //the background graphics, it can be a spreadsheet
        bg: "liff-lobby.png",
        //if spreadsheet frames
        frames: 6,
        //if animated, animation speed in refreshes (frame dependent)
        frameDelay: 30,
        //normally 2, avatars can be scaled to simulate camera distance
        avatarScale: 2,
        //a shade to tint the avatars to simulate light color, #FFFFFF normal
        tint: "#ffffff",
        //the html body color can be changed
        pageBg: "#28170B",
        //minimum height for the speech bubbles
        bubblesY: 50,
        //if spawning directly in this room, top left and bottom right point defining the rectangular spawn area (random within it)
        spawn: [106, 171, 153, 193],

        //music: "insideliff.mp3",
        //graphics with active areas Sierra Online adventures style
        //color coded as below, #FFFFFF is walkable, transparent is obstacle
        area: "liff-lobby-areas.png",
        //each color can trigger a command, the destination needs to be reached first
        //the "h" is replaced by # to identify color
        areaColors: {
            //enter command changes room
            //room: id of the room to enter
            //label: what to display on rollover
            //point: where to walk after click
            //enterPoint: where to spawn in the next room
            //obstacle: is the area walkable
            hffec27: { cmd: "enter", room: "LIFFTheater1", label: "Theater Room 1", point: [39, 87], enterPoint: [126, 192], obstacle: false },
            h00e436: { cmd: "enter", room: "LIFFOutside", label: "Outside", point: [132, 192], enterPoint: [128, 118], obstacle: false },
            hab5236: { cmd: "enter", room: "LIFFTheater2", label: "Theater Room 2", point: [226, 52], enterPoint: [126, 192], obstacle: false },
            hd5521b: { cmd: "enter", room: "PhotoBooth", label: "Photo Booth", point: [92, 116], enterPoint: [156, 186], obstacle: true },
            h2f77ba: { cmd: "enter", room: "Sewer", label: "Shawshank Redemption", point: [128, 105], enterPoint: [215, 150], obstacle: false },

            h00c6ba: { cmd: "text", url: "https://www.liff.nl/delifferoo", label: "DeLIFFeroo", txt: "For all your food-related needs.\n\nClick or Tap on this box to visit the store.", align: "center", lines: 4, point: [78,170] },
            he35bc8: { cmd: "text", url: "https://shop.liff.nl/", label: "Merch", txt: "T-shirts that blow your socks off!\n\nClick or Tap on this box to visit the store.", align: "center", lines: 4, point: [223, 175] },
            h1ea944: { cmd: "text", url: "https://www.liff.nl/LIFF-Bier", label: "Pronck-LIFF-Beer", txt: "A tasty adult beverage.\n\nClick or Tap on this box for more info.", align: "center", lines: 4, point: [61, 143] },
            h160c19: { cmd: "text", label: "Pulp Fiction", align: "center", lines: 1},
            h7c6d1f: { cmd: "text", label: "Up", align: "center", lines: 1 },
            h41607a: { cmd: "text", label: "Jaws", align: "center", lines: 1},
            h538d20: { cmd: "text", label: "Alien", align: "center", lines: 1},
            h388841: { cmd: "text", label: "Parasite", align: "center", lines: 1 },
            hd5c929: { cmd: "text", label: "Delicious Popcorn", align: "center", lines: 1 },
            h35e5ba: { cmd: "text", url: "https://vote.liff.nl/", label: "Audience scores", txt: "The Top 10 LIFF Films\nbased on audience scores.\n\nClick or Tap on this box to see", align: "center", lines: 4, point: [128, 106]},
        },
        //list of sprites to create in the room
        //sprites are rendered according to depth sort so they can appear above the avatars unlike the background
        //they can be animated, mouse reactive and trigger commands like the areas above
        things: {
            //sprite spreadsheets only 1 row ok?
            PopMachine: { file: "liff-popcorn.png", label: "Freshly popped popcorn", frames: 11, frameDelay: 10, position: [1, 84], visible: true},
            MicStand: { file: "liff-lobby-mic.png", position: [150, 100], visible: true},
            barperson1: { file: "medewerker1.png", frames: 1, frameDelay: 10, position: [49, 163], label: "Waiter" },
            barperson2: { file: "medewerker3.png", frames: 1, frameDelay: 10, position: [13, 150], label: "Waiter" },
            barperson3: { file: "medewerker4.png", frames: 1, frameDelay: 10, position: [39, 149], label: "Waiter" },
            lobbyperson1: { file: "medewerker2.png", frames: 1, frameDelay: 10, position: [10, 70], label: "LIFF Attendant", command: { cmd: "text", txt: "LIFF Attendant:\nSsssh, there are movies playing in this room. Please be quiet when you enter.", align: "left", lines: 5, point: [22, 88] } },
            lobbyperson2: { file: "medewerker5.png", frames: 1, frameDelay: 10, position: [192, 37], label: "LIFF Attendant", command: { cmd: "text", txt: "LIFF Attendant:\nThere is a super underground indie movie premiering in this room, a once in a life-time watch!", align: "left", lines: 5, point: [204, 55] }},
            infoperson: { file: "medewerker6.png", frames: 30, frameDelay: 8, position: [156, 166], label: "Kasper the Friendly Host", command: { cmd: "text", txt: "Kasper the Friendly Host:\nHi, welcome to the LIFF online hub, I'm so glad you're visiting! Here you can walk around and talk to other film fanatics.\nDon't forget to check out the merch, food, and theater rooms. Enjoy!", align: "left", lines: 9, point: [154, 184] } },
            delifferoosign: { file: "liff-menuboard.png", frames: 1, frameDelay: 10, position: [73,148], label: "DeLIFFeroo", visible: true, command: { cmd: "text", txt: "For all your food-related needs.\n\nClick or Tap on this box to visit the store.", url: "https://www.liff.nl/delifferoo", align: "center", lines: 4, point: [78,170] } },
        }
    },

    LIFFOutside: {
        bg: "likelike-outside-omoma.png",
        frames: 4,
        frameDelay: 20,
        avatarScale: 2,
        pageBg: "#011221",
        area: "likelikeOutside-areas.png",
        //tint: "#fdeac8",
        tint: "#ffffff",
        bubblesY: 44,
        spawn: [94, 166, 163, 199],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "LIFFLobby", label: "Enter LIFF", point: [128, 120], enterPoint: [130, 193], obstacle: false },
            //h7fffb8: { cmd: "text", label: "Festival Attendant", txt: "Welcome to Leiden International Film Festival!", align: "center", lines: 1, point: [117, 145] },
            h00c6ba: { cmd: "text", label: "DeLIFFeroo bike", align: "center", lines: 1 },
            hffb000: { cmd: "text", label: "Lumière in moonlight", align: "center", lines: 1 },
            had7239: { cmd: "text", label: "Remember me", align: "center", lines: 1 },
            h396ead: { cmd: "text", label: "when the stars", align: "center", lines: 1 },
            hd8a255: { cmd: "text", label: "come out.", align: "center", lines: 1 },
            h00ff75: { cmd: "text", label: "I wonder who lives here.", align: "center", lines: 1 },
        },
        things: {
            greeter: { file: "museumGuard.png", frames: 17, frameDelay: 10, position: [105, 125], label: "LIFF Greeter", command: { cmd: "text", txt: "LIFF Greeter:\nWelcome to Leiden International Film Festival!", align: "left", lines: 4, point: [116,143] } },

        }
    },

    LIFFTheater1: {
        bg: "LIFFTheater1.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        area: "likelike-backyard-areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 20,
        spawn: [116, 173, 138, 191],
        areaColors: {
            //h will be replaced by #
            hff77a8: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [126, 192], enterPoint: [39, 90], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?
            Chair: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 170],},
            Chair1: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 155],},
            Chair2: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 140],},
            Chair3: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 125],},
            Chair4: { file: "LIFFtheater1_ChairsRow.png", frames: 1, frameDelay: 30, position: [1, 110],},

        }
    },

    dBsZaal: {
        bg: "dBsZaal.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 4,
        area: "dBsZaal-areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 170,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff00ff: { cmd: "enter", room: "dBsBar", label: "Bar", point: [247, 136], enterPoint: [94, 74], obstacle: false },
        },
        things: {

        }
    },

    dBsBar: {
        bg: "dBsBar.png",
        frames: 1,
        frameDelay: 30,
        avatarScale: 4,
        area: "dBsBar-areas.png",
        tint: "#ffffff",
        pageBg: "#170102",
        bubblesY: 45,
        spawn: [72, 90, 173, 152],
        areaColors: {
            //h will be replaced by #
            hff00ff: { cmd: "enter", room: "dBsZaal", label: "Zaal", point: [94, 64], enterPoint: [234, 136], obstacle: false },
        },
        things: {

        }
    },

    PhotoBooth: {
        bg: "photobooth_liff.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 16,
        area: "photobooth_liff_area.png",
        tint: "#ffffff",
        pageBg: "#021213",
        bubblesY: 50,
        spawn: [38, 63, 108, 83],
        areaColors: {
            //h will be replaced by #
            h0ddee3: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [179, 191], enterPoint: [92, 116], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?


        }
    },

    LIFFTheater2: {
        bg: "LIFFtheater2.png",
        avatarScale: 2,
        pageBg: "#120906",
        area: "LIFFtheater2_areasv2.png",
        tint: "#ffffff",
        bubblesY: 10,
        spawn: [106, 178, 150, 193],
        areaColors: {
            hffec27: { cmd: "enter", room: "LIFFLobby", label: "Main Hall", point: [126, 197], enterPoint: [226, 55], obstacle: false },

        },
        things: {
            //sprite spreadsheets only 1 row ok?
            sculpture1: { file: "sculpture1.png", position: [70, 22], visible: false },
            sculpture2: { file: "sculpture2.png", position: [70, 22], visible: false },
            sculpture3: { file: "sculpture3.png", position: [70, 22], visible: false },
            sculpture4: { file: "sculpture4.png", position: [70, 22], frames: 4, frameDelay: 10, visible: false },
            ShortMovie: { file: "LIFFtheater2_movie.png", position: [91, 20], frames: 98, frameDelay: 55, visible: true},

             //front left to right
            Chair: { file: "LIFFtheater2_Chair.png", position: [82, 130], visible: true},
            Chair1: { file: "LIFFtheater2_Chair.png", position: [92, 131], visible: true},
            Chair3: { file: "LIFFtheater2_Chair.png", position: [105, 131], visible: true},
            Chair4: { file: "LIFFtheater2_Chair.png", position: [140, 130], visible: true},
            Chair5: { file: "LIFFtheater2_Chair.png", position: [150, 130], visible: true},
            Chair6: { file: "LIFFtheater2_Chair.png", position: [161, 129], visible: true},
            //back left to right
            Chair7: { file: "LIFFtheater2_Chair.png", position: [87, 150], visible: true},
            Chair8: { file: "LIFFtheater2_Chair.png", position: [98, 150], visible: true},
            Chair9: { file: "LIFFtheater2_Chair.png", position: [111, 155], visible: true},
            Chair10: { file: "LIFFtheater2_Chair.png", position: [146, 150], visible: true},
            Chair11: { file: "LIFFtheater2_Chair.png", position: [157, 150], visible: true},
            Chair12: { file: "LIFFtheater2_Chair.png", position: [170, 148], visible: true},
        }
    },

    Sewer: {
        bg: "LIFFSewer.png",
        frames: 14,
        frameDelay: 20,
        avatarScale: 4,
        area: "LIFFSewerAreas.png",
        tint: "#ffffff",
        pageBg: "#021213",
        bubblesY: 50,
        spawn: [202, 148, 224, 158],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "River", label: "Exit sewer", point: [28, 154], enterPoint: [100, 94], obstacle: false },
            h00ff49: { cmd: "enter", room: "LIFFLobby", label: "Back to Main Hall", point: [208,150], enterPoint: [128, 105], obstacle: false },
            h00ffaa: { cmd: "text", label: "Hi there little guy.", align: "center", lines: 1 },
        },
        things: {
            //spreadsheets only 1 row ok?


        }
    },

  River: {
        bg: "LIFFRiver.png",
        frames: 3,
        frameDelay: 9,
        avatarScale: 4,
        area: "LIFFRiverAreas.png",
        tint: "#ffffff",
        pageBg: "#021213",
        bubblesY: 50,
        spawn: [102,90,122,104],
        areaColors: {
            //h will be replaced by #
            h00ff49: { cmd: "enter", room: "Sewer", label: "Back to sewer", point: [110,95], enterPoint: [28, 154], obstacle: false },
            hff0000: { cmd: "enter", room: "LIFFOutside", label: "Outside", point: [224, 108], enterPoint: [9,158], obstacle: false },
        },
        things: {
            //spreadsheets only 1 row ok?


        }
    },
*/
};
