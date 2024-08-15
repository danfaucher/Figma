figma.loadAllPagesAsync() // ensures all PageNodes are loaded, can be slow in very large files


const games = [
  {
    "staging_ID": "6326541217110687744",
    "prod_ID": "6326541217110687744",
    "modal_type": "read_along",
    "game": "BalletLesson",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6283025955715809280",
    "prod_ID": "6283025955715809280",
    "modal_type": "read_along",
    "game": "Bedtime",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6318140191475236864",
    "prod_ID": "6318140191475236864",
    "modal_type": "read_along",
    "game": "BestFriends",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6379360629936881664",
    "prod_ID": "6379360629936881664",
    "modal_type": "read_along",
    "game": "CleaningTheCar",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6283025676505186304",
    "prod_ID": "6283025676505186304",
    "modal_type": "read_along",
    "game": "Gardening",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6283024986068221952",
    "prod_ID": "6283024986068221952",
    "modal_type": "read_along",
    "game": "GeorgesRacingCar",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6283025481495216128",
    "prod_ID": "6283025481495216128",
    "modal_type": "read_along",
    "game": "HideAndSeek",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6206942370492055552",
    "prod_ID": "6206942370492055552",
    "modal_type": "read_along",
    "game": "LunchTime",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6172155804536274944",
    "prod_ID": "6172155804536274944",
    "modal_type": "read_along",
    "game": "MummyPigsSurpriseParty",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6206942726387138560",
    "prod_ID": "6206942726387138560",
    "modal_type": "read_along",
    "game": "PancakeFlip",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6318133646549057536",
    "prod_ID": "6318133646549057536",
    "modal_type": "read_along",
    "game": "PedroPonysCast",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6283025200715923456",
    "prod_ID": "6283025200715923456",
    "modal_type": "read_along",
    "game": "PeppasKiteAdventure",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6206942583952769024",
    "prod_ID": "6206942583952769024",
    "modal_type": "read_along",
    "game": "Peppa's Music Class",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6326540899375382528",
    "prod_ID": "6326540899375382528",
    "modal_type": "read_along",
    "game": "PetContest",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6206942829898366976",
    "prod_ID": "6206942829898366976",
    "modal_type": "read_along",
    "game": "Picnic",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6350207454436917248",
    "prod_ID": "6350207454436917248",
    "modal_type": "game_custom",
    "game": "Birthday Baking",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6554422785608392704",
    "prod_ID": "6554422785608392704",
    "modal_type": "game_custom",
    "game": "Build with George",
    "Themed": "Sports",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "7127656050539761664",
    "prod_ID": "6868722416684765184",
    "modal_type": "game_custom",
    "game": "Build with George Christmas",
    "Themed": "Sports",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6704167638326841344",
    "prod_ID": "6776292651225976832",
    "modal_type": "game_custom",
    "game": "Schoolbus Ride Along",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6707357110736527360",
    "prod_ID": "6740687709937471488",
    "modal_type": "game_custom",
    "game": "Guinea Pig Petting Farm",
    "Themed": "Animals",
    "Location": "Playground",
    "Character": "Pets",
    "Gameplay": ""
  },
  {
    "staging_ID": "6753046485025431552",
    "prod_ID": "6810397299945119744",
    "modal_type": "game_custom",
    "game": "Grandad Dog's Garage",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "Family",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6413507333535563776",
    "prod_ID": "6413507333535563776",
    "modal_type": "game_custom",
    "game": "Messy Room",
    "Themed": "Travel",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "7127657621591822336",
    "prod_ID": "6868722965652054016",
    "modal_type": "game_custom",
    "game": "Messy Room Christmas",
    "Themed": "Travel",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6183678743085580288",
    "prod_ID": "6183678743085580288",
    "modal_type": "game_custom",
    "game": "Plant with Grandpa Pig",
    "Themed": "Food",
    "Location": "Outside",
    "Character": "Family",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6413507698716835840",
    "prod_ID": "6413507698716835840",
    "modal_type": "game_custom",
    "game": "Silly Sounds",
    "Themed": "Party",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6843297083353731072",
    "prod_ID": "7107067251756634112",
    "modal_type": "game_custom",
    "game": "Dinosaur Park",
    "Themed": "Animals",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6773512087770767360",
    "prod_ID": "6819023759404572672",
    "modal_type": "game_custom",
    "game": "Motor Home",
    "Themed": "Travel",
    "Location": "Travel",
    "Character": "Family",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6379330047047630848",
    "prod_ID": "6379330047047630848",
    "modal_type": "game_custom_stacking_blocks",
    "game": "Stacking - Blocks",
    "Themed": "School",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6471771163149869056",
    "prod_ID": "6471771163149869056",
    "modal_type": "game_custom_stacking_blocks",
    "game": "Stacking - Presents",
    "Themed": "School",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6318141147663302656",
    "prod_ID": "6318141147663302656",
    "modal_type": "game_custom_treetop_rescue",
    "game": "Autumn",
    "Themed": "Outdoors",
    "Location": "Carnival",
    "Character": "George",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6183676586504486912",
    "prod_ID": "6183676586504486912",
    "modal_type": "game_custom_treetop_rescue",
    "game": "Christmas",
    "Themed": "Outdoors",
    "Location": "Carnival",
    "Character": "George",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6252185890769076224",
    "prod_ID": "6252185890769076224",
    "modal_type": "game_custom_treetop_rescue",
    "game": "Green",
    "Themed": "Outdoors",
    "Location": "Carnival",
    "Character": "George",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6667168323930951680",
    "prod_ID": "6667168323930951680",
    "modal_type": "game_template_teaparty",
    "game": "Core",
    "Themed": "Party",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6722284206776655872",
    "prod_ID": "6729942437838069760",
    "modal_type": "game_template_teaparty",
    "game": "Christmas",
    "Themed": "Party",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6768326962783199232",
    "prod_ID": "6776291209652084736",
    "modal_type": "game_template_teaparty",
    "game": "Easter",
    "Themed": "Party",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6707376837349351424",
    "prod_ID": "6713937094737793024",
    "modal_type": "game_template_teaparty",
    "game": "Halloween",
    "Themed": "Party",
    "Location": "Carnival",
    "Character": "Friends",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6579847772087390208",
    "prod_ID": "6579847772087390208",
    "modal_type": "laundry",
    "game": "Core",
    "Themed": "Outdoors",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": ""
  },
  {
    "staging_ID": "",
    "prod_ID": "6765738916070432768",
    "modal_type": "laundry",
    "game": "Core (with rainbow BGs)",
    "Themed": "Outdoors",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": ""
  },
  {
    "staging_ID": "6771154483719442432",
    "prod_ID": "6776297053638762496",
    "modal_type": "laundry",
    "game": "Core (with Easter BGs)",
    "Themed": "Outdoors",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": ""
  },
  {
    "staging_ID": "6707107512482799616",
    "prod_ID": "6714218417742290944",
    "modal_type": "laundry",
    "game": "Halloween",
    "Themed": "Outdoors",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": ""
  },
  {
    "staging_ID": "6663935928310173696",
    "prod_ID": "6659538525096644608",
    "modal_type": "laundry",
    "game": "Summer",
    "Themed": "Outdoors",
    "Location": "Home",
    "Character": "Family",
    "Gameplay": ""
  },
  {
    "staging_ID": "6646096953516232704",
    "prod_ID": "6635930787758346240",
    "modal_type": "game_template_shopping",
    "game": "Produce",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "Family",
    "Gameplay": "Narrative"
  },
  {
    "staging_ID": "6651163896216555520",
    "prod_ID": "6379375847723237376",
    "modal_type": "game_template_connect",
    "game": "Garden",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6722311260582715392",
    "prod_ID": "6729947729049034752",
    "modal_type": "game_template_connect",
    "game": "Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707400186297323520",
    "prod_ID": "6714236926819962880",
    "modal_type": "game_template_connect",
    "game": "Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6814229960425869312",
    "prod_ID": "6819321337895587840",
    "modal_type": "game_template_connect",
    "game": "New York",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6879598994201526272",
    "prod_ID": "6879899036661456896",
    "modal_type": "game_template_connect",
    "game": "Dinosaurs",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "7174134519515455488",
    "prod_ID": "7190788346254336000",
    "modal_type": "game_template_connect",
    "game": "Peppa's 20th Party",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6874412798731108352",
    "prod_ID": "6874454556659560448",
    "modal_type": "game_template_connect",
    "game": "Ingredients",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6770833748257935360",
    "prod_ID": "6776294542823530496",
    "modal_type": "game_template_connect",
    "game": "Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6350224995897049088",
    "prod_ID": "6350224995897049088",
    "modal_type": "game_template_connect",
    "game": "Winter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "George",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6657684163055067136",
    "prod_ID": "6669326236472971264",
    "modal_type": "game_template_hide_and_seek",
    "game": "OutdoorGreenForest",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6657684163055067136",
    "prod_ID": "6776298604251975680",
    "modal_type": "game_template_hide_and_seek",
    "game": "OutdoorGreenForest (w/ Easter Egg Findables)",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6856283498488274944",
    "prod_ID": "6776299974858252288",
    "modal_type": "game_template_hide_and_seek",
    "game": "Soft Play Center",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6787939117971017728",
    "prod_ID": "6797645579229995008",
    "modal_type": "game_template_hide_and_seek",
    "game": "Muddy Festival",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6873129148186103808",
    "prod_ID": "6874455848568107008",
    "modal_type": "game_template_hide_and_seek",
    "game": "Grandpa Pig's Garden",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6838225407368765440",
    "prod_ID": "6843649655029501952",
    "modal_type": "game_template_hide_and_seek",
    "game": "Halloween Party",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6712763083663876096",
    "prod_ID": "6717555806732685312",
    "modal_type": "game_template_hide_and_seek",
    "game": "Playgroup",
    "Themed": "Sports",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6609926146407141376",
    "prod_ID": "6609926146407141376",
    "modal_type": "game_template_smoothie_maker",
    "game": "Core",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6811697887584587776",
    "prod_ID": "6819317037794463744",
    "modal_type": "game_template_smoothie_maker",
    "game": "Wild West",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6648331747029422080",
    "prod_ID": "6633518076030226432",
    "modal_type": "game_template_smoothie_maker",
    "game": "Easter",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707104424380342272",
    "prod_ID": "6714302987263156224",
    "modal_type": "game_template_smoothie_maker",
    "game": "Halloween",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6879823576451792896",
    "prod_ID": "6879918042466361344",
    "modal_type": "game_template_smoothie_maker",
    "game": "Jungle",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800532546171052032",
    "prod_ID": "6808515609245126656",
    "modal_type": "game_template_smoothie_maker",
    "game": "Track",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6582011277561438208",
    "prod_ID": "6582011277561438208",
    "modal_type": "game_template_smoothie_maker",
    "game": "Christmas",
    "Themed": "Food",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6823362941644054528",
    "prod_ID": "6829076673888129024",
    "modal_type": "game_template_sorting",
    "game": "Treasure (CMS-able)",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6516773506391875584",
    "prod_ID": "6516773506391875584",
    "modal_type": "game_template_sorting",
    "game": "Easter Eggs",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6603418194925985792",
    "prod_ID": "6603418194925985792",
    "modal_type": "game_template_sorting",
    "game": "Christmas Decorations",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6712526757744087040",
    "prod_ID": "6717551191752577024",
    "modal_type": "game_template_sorting",
    "game": "Berries",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6707304184517234688",
    "prod_ID": "6713887461445603328",
    "modal_type": "game_template_sorting",
    "game": "Halloween",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6758140878581403648",
    "prod_ID": "6758421374662483968",
    "modal_type": "game_template_sorting",
    "game": "Valentines",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6663937235183996928",
    "prod_ID": "6659277536887447552",
    "modal_type": "game_template_sorting",
    "game": "Seashell",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6758431659024191488",
    "prod_ID": "6808519239859838976",
    "modal_type": "game_template_sorting",
    "game": "Trophies",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6871920309403131904",
    "prod_ID": "6874472222069764096",
    "modal_type": "game_template_sorting",
    "game": "Food Groups",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "7178102668233412608",
    "prod_ID": "7190794680236380160",
    "modal_type": "game_template_sorting",
    "game": "Peppa's 20th Party",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6737153377897287680",
    "prod_ID": "6740446508734877696",
    "modal_type": "game_template_sorting",
    "game": "Recycling (sorting_Recycle)",
    "Themed": "Party",
    "Location": "Home",
    "Character": "Peppa",
    "Gameplay": "Level_challenge"
  },
  {
    "staging_ID": "6945810129963196416",
    "prod_ID": "6947611601537212416",
    "modal_type": "game_template_shadow",
    "game": "Pretend Shop",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6557123924908974080",
    "prod_ID": "6649373945229877248",
    "modal_type": "game_template_shadow",
    "game": "Cave",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6873824659910168576",
    "prod_ID": "6874747530928861184",
    "modal_type": "game_template_shadow",
    "game": "Daddy Pig Chef",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6760678279962955776",
    "prod_ID": "6765742951695523840",
    "modal_type": "game_template_shadow",
    "game": "Bedroom",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6643248344189898752",
    "prod_ID": "6819027843511619584",
    "modal_type": "game_template_shadow",
    "game": "Theatre (**4.3 update with Hash Brown)",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6724103043004243968",
    "prod_ID": "6729944144705884160",
    "modal_type": "game_template_shadow",
    "game": "Theatre_Christmas",
    "Themed": "Party",
    "Location": "Playground",
    "Character": "Friends",
    "Gameplay": ""
  },
  {
    "staging_ID": "6781279118859444224",
    "prod_ID": "6787518417188032512",
    "modal_type": "game_template_matching",
    "game": "Friends",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6185184722545541120",
    "prod_ID": "6185184722545541120",
    "modal_type": "game_template_matching",
    "game": "Winter",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6645016255988506624",
    "prod_ID": "6631604078988894208",
    "modal_type": "game_template_matching",
    "game": "Easter",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6235866906276921344",
    "prod_ID": "6235866906276921344",
    "modal_type": "game_template_matching",
    "game": "Spring",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6813919677912326144",
    "prod_ID": "6819292257972264960",
    "modal_type": "game_template_matching",
    "game": "America",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6264826387727646720",
    "prod_ID": "6264826387727646720",
    "modal_type": "game_template_matching",
    "game": "Summer",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318149190308331520",
    "prod_ID": "6318149190308331520",
    "modal_type": "game_template_matching",
    "game": "Autumn",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6800497888431579136",
    "prod_ID": "6808516445975224320",
    "modal_type": "game_template_matching",
    "game": "Balls",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6867221377683038208",
    "prod_ID": "6869289597571047424",
    "modal_type": "game_template_matching",
    "game": "Desserts",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318170017225506816",
    "prod_ID": "6318170017225506816",
    "modal_type": "game_template_matching",
    "game": "Halloween",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6239887358435524608",
    "prod_ID": "6239887358435524608",
    "modal_type": "game_template_matching",
    "game": "Christmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6565274221195956224",
    "prod_ID": "6565274221195956224",
    "modal_type": "game_template_difference",
    "game": "Australia",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318189477193842688",
    "prod_ID": "6318189477193842688",
    "modal_type": "game_template_difference",
    "game": "AutumnHarvest",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318185471843237888",
    "prod_ID": "6318185471843237888",
    "modal_type": "game_template_difference",
    "game": "AutumnHike",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6565276799694671872",
    "prod_ID": "6565276799694671872",
    "modal_type": "game_template_difference",
    "game": "Bicycles",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6689232977515520000",
    "prod_ID": "6670060589033328640",
    "modal_type": "game_template_difference",
    "game": "Boat",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6699417177543680000",
    "prod_ID": "6670063783155212288",
    "modal_type": "game_template_difference",
    "game": "Cake",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318179192118706176",
    "prod_ID": "6318179192118706176",
    "modal_type": "game_template_difference",
    "game": "CampfireStories",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6215264176651108352",
    "prod_ID": "6215264176651108352",
    "modal_type": "game_template_difference",
    "game": "ChristmasVisit",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6671513080698245120",
    "prod_ID": "6819025642156331008",
    "modal_type": "game_template_difference",
    "game": "City (Holiday)",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6899844594054479872",
    "prod_ID": "6633128489462145024",
    "modal_type": "game_template_difference",
    "game": "Easter",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318181281528020992",
    "prod_ID": "6318181281528020992",
    "modal_type": "game_template_difference",
    "game": "GeorgeDigger",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6200346680533975040",
    "prod_ID": "6200346680533975040",
    "modal_type": "game_template_difference",
    "game": "GeorgesToys",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6273257632664911872",
    "prod_ID": "6273257632664911872",
    "modal_type": "game_template_difference",
    "game": "GrannysChickens",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6582374510700929024",
    "prod_ID": "6582374510700929024",
    "modal_type": "game_template_difference",
    "game": "Halloween",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6831290237965307904",
    "prod_ID": "6843655560055889920",
    "modal_type": "game_template_difference",
    "game": "Pumpkin",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318185471843237888",
    "prod_ID": "6318185471843237888",
    "modal_type": "game_template_difference",
    "game": "Hike",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6671514655864922112",
    "prod_ID": "6670061767481757696",
    "modal_type": "game_template_difference",
    "game": "Instrument",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6565275801769091072",
    "prod_ID": "6565275801769091072",
    "modal_type": "game_template_difference",
    "game": "Office",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6273260802942173184",
    "prod_ID": "6273260802942173184",
    "modal_type": "game_template_difference",
    "game": "Playgroup",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6200332270440546304",
    "prod_ID": "6200332270440546304",
    "modal_type": "game_template_difference",
    "game": "PeppasToys",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6899809165410320384",
    "prod_ID": "6257952345666093056",
    "modal_type": "game_template_difference",
    "game": "RichardRabbit",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6811731108946911232",
    "prod_ID": "6819027308117102592",
    "modal_type": "game_template_difference",
    "game": "Motorhome",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6758137261229088768",
    "prod_ID": "6670065118860681216",
    "modal_type": "game_template_difference",
    "game": "NYC",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6945832005766750208",
    "prod_ID": "6947612374874595328",
    "modal_type": "game_template_difference",
    "game": "Detective's Club",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6788226767969853440",
    "prod_ID": "6797641667299119104",
    "modal_type": "game_template_difference",
    "game": "Festival",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6722303260254019584",
    "prod_ID": "6729946399316250624",
    "modal_type": "game_template_difference",
    "game": "North George",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6879512970561593344",
    "prod_ID": "6879519993520852992",
    "modal_type": "game_template_difference",
    "game": "Scavenger ",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6206951875162406912",
    "prod_ID": "6206951875162406912",
    "modal_type": "game_template_difference",
    "game": "SnowDay",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6257951469031391232",
    "prod_ID": "6257951469031391232",
    "modal_type": "game_template_difference",
    "game": "SpaceTrip",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6245660037218304000",
    "prod_ID": "6245660037218304000",
    "modal_type": "game_template_difference",
    "game": "SpringVegetables",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6245662242331688960",
    "prod_ID": "6245662242331688960",
    "modal_type": "game_template_difference",
    "game": "TeaParty",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "7174033447828459520",
    "prod_ID": "7190795468857806848",
    "modal_type": "game_template_difference",
    "game": "Peppa's 20th Party",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6206954354717491200",
    "prod_ID": "6206954354717491200",
    "modal_type": "game_template_difference",
    "game": "WinterPeppa",
    "Themed": "Holidays",
    "Location": "Playground",
    "Character": "George",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6379326577804574720",
    "prod_ID": "6379326577804574720",
    "modal_type": "game_template_woodblock",
    "game": "PeppasFamily",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6780606171832389632",
    "prod_ID": "6787522792157487104",
    "modal_type": "game_template_woodblock",
    "game": "Playground (scene)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6722282504497401856",
    "prod_ID": "6729943344654983168",
    "modal_type": "game_template_woodblock",
    "game": "Christmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6691743402564001792",
    "prod_ID": "6697619117734236160",
    "modal_type": "game_template_woodblock",
    "game": "Dinosaurs",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6707105260246405120",
    "prod_ID": "6713951739187957760",
    "modal_type": "game_template_woodblock",
    "game": "Halloween",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6712538960224325632",
    "prod_ID": "6714290555593564160",
    "modal_type": "game_template_woodblock",
    "game": "Garden",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6663934082233409536",
    "prod_ID": "6659575759107661824",
    "modal_type": "game_template_woodblock",
    "game": "Ocean",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6811704285936623616",
    "prod_ID": "6819309575456559104",
    "modal_type": "game_template_woodblock",
    "game": "Squaredancing",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6736660184130916352",
    "prod_ID": "6740445171414601728",
    "modal_type": "game_template_woodblock",
    "game": "CityWheels",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6770841671738597376",
    "prod_ID": "6776301874307538944",
    "modal_type": "game_template_woodblock",
    "game": "Easter",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583401319089446912",
    "prod_ID": "6583401319089446912",
    "modal_type": "game_template_puzzle_book",
    "game": "AutumnLeaves",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583378271208611840",
    "prod_ID": "6583378271208611840",
    "modal_type": "game_template_puzzle_book",
    "game": "BackyardGames",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318193516111462400",
    "prod_ID": "6669467747709755392",
    "modal_type": "game_template_puzzle_book",
    "game": "Balloons (Hot Air)",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583417392727728128",
    "prod_ID": "6583417392727728128",
    "modal_type": "game_template_puzzle_book",
    "game": "BubbleFun",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583437146104401920",
    "prod_ID": "6583437146104401920",
    "modal_type": "game_template_puzzle_book",
    "game": "Carnival",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6843349423259656192",
    "prod_ID": "6669468284018630656",
    "modal_type": "game_template_puzzle_book",
    "game": "Castle",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6204014956589875200",
    "prod_ID": "6204014956589875200",
    "modal_type": "game_template_puzzle_book",
    "game": "ChristmasFair",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6339205137659068416",
    "prod_ID": "6339205137659068416",
    "modal_type": "game_template_puzzle_book",
    "game": "ChristmasOuting",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6204014443035099136",
    "prod_ID": "6204014443035099136",
    "modal_type": "game_template_puzzle_book",
    "game": "CoolFamily",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6899845928879136768",
    "prod_ID": "6631668838275096576",
    "modal_type": "game_template_puzzle_book",
    "game": "EasterEggs",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583414543209861120",
    "prod_ID": "6583414543209861120",
    "modal_type": "game_template_puzzle_book",
    "game": "EdmondAstronaut",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6899846417968537600",
    "prod_ID": "6631668291719536640",
    "modal_type": "game_template_puzzle_book",
    "game": "EggHunt",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6781276844128997376",
    "prod_ID": "6787521454807846912",
    "modal_type": "game_template_puzzle_book",
    "game": "Mandy Mouse",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6781277344249417728",
    "prod_ID": "6787520948374999040",
    "modal_type": "game_template_puzzle_book",
    "game": "Farfamilies",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6819271997130940416",
    "prod_ID": "6819271997130940416",
    "modal_type": "game_template_puzzle_book",
    "game": "Performing Arts",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6813590531357151232",
    "prod_ID": "6819275037107949568",
    "modal_type": "game_template_puzzle_book",
    "game": "Miss Rabbit",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6339205137659068416",
    "prod_ID": "6339205137659068416",
    "modal_type": "game_template_puzzle_book",
    "game": "FatherChristmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6849094500892286976",
    "prod_ID": "6864997512701419520",
    "modal_type": "game_template_puzzle_book",
    "game": "Family Christmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6631669391436685312",
    "prod_ID": "6631669391436685312",
    "modal_type": "game_template_puzzle_book",
    "game": "Flowers",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583419228977238016",
    "prod_ID": "6583419228977238016",
    "modal_type": "game_template_puzzle_book",
    "game": "GardenCritters",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6582354265978310656",
    "prod_ID": "6582354265978310656",
    "modal_type": "game_template_puzzle_book",
    "game": "Halloween",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6562366577347010560",
    "prod_ID": "6562366577347010560",
    "modal_type": "game_template_puzzle_book",
    "game": "MrDinosaur",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6560011923527176192",
    "prod_ID": "6560011923527176192",
    "modal_type": "game_template_puzzle_book",
    "game": "MrPotato",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6671515666469883904",
    "prod_ID": "6669468505213640704",
    "modal_type": "game_template_puzzle_book",
    "game": "Mystery",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6318458759412711424",
    "prod_ID": "6631672030333374464",
    "modal_type": "game_template_puzzle_book",
    "game": "PicnicLunch",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6631672702625779712",
    "prod_ID": "6631672702625779712",
    "modal_type": "game_template_puzzle_book",
    "game": "Pirates",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6689231377099132928",
    "prod_ID": "6669468753222836224",
    "modal_type": "game_template_puzzle_book",
    "game": "Pizza",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "",
    "prod_ID": "6631673331205152768",
    "modal_type": "game_template_puzzle_book",
    "game": "PlayForts",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "7001982552156278784",
    "prod_ID": "6631673730460950528",
    "modal_type": "game_template_puzzle_book",
    "game": "PlaygroundFun",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583439613349203968",
    "prod_ID": "6583439613349203968",
    "modal_type": "game_template_puzzle_book",
    "game": "Suzy",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6204014824343470080",
    "prod_ID": "6204014824343470080",
    "modal_type": "game_template_puzzle_book",
    "game": "Skating",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6339208909827342336",
    "prod_ID": "6339208909827342336",
    "modal_type": "game_template_puzzle_book",
    "game": "SkiLesson",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6214663157659467776",
    "prod_ID": "6214663157659467776",
    "modal_type": "game_template_puzzle_book",
    "game": "Snowday",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6583441109079953408",
    "prod_ID": "6583441109079953408",
    "modal_type": "game_template_puzzle_book",
    "game": "SpaceTrip",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6204014669611401216",
    "prod_ID": "6204014669611401216",
    "modal_type": "game_template_puzzle_book",
    "game": "Tobogganing",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6843350362561454080",
    "prod_ID": "6631674207680471040",
    "modal_type": "game_template_puzzle_book",
    "game": "ToyBear",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6671516097333960704",
    "prod_ID": "6669468987244027904",
    "modal_type": "game_template_puzzle_book",
    "game": "Trophy",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6603332922758533120",
    "prod_ID": "6603332922758533120",
    "modal_type": "game_template_puzzle_book",
    "game": "WinterBird",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6529413344198795264",
    "prod_ID": "6529413344198795264",
    "modal_type": "game_template_puzzle_book",
    "game": "WorldAdventure",
    "Themed": "School",
    "Location": "School",
    "Character": "Friends",
    "Gameplay": "Puzzles"
  },
  {
    "staging_ID": "6830942070140837888",
    "prod_ID": "6707408440771878912",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Autumn",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6722578931291267072",
    "prod_ID": "6722609914883739648",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Christmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6899880496143286272",
    "prod_ID": "6737824449718521856",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Easter",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6843352589250334720",
    "prod_ID": "6707409034232336384",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Halloween",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "7001983314752049152",
    "prod_ID": "6737825183851749376",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Spring",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6670771828738498560",
    "prod_ID": "6670771828738498560",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Summer",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6722579881447923712",
    "prod_ID": "6722609117643022336",
    "modal_type": "game_template_paint_with_peppa",
    "game": "Winter",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6610281327581863936",
    "prod_ID": "6610281327581863936",
    "modal_type": "game_template_dressup",
    "game": "Peppa_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6380420051215843328",
    "prod_ID": "6380420051215843328",
    "modal_type": "game_template_dressup",
    "game": "Peppa_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6516758152018010112",
    "prod_ID": "6516758152018010112",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6580138177475514368",
    "prod_ID": "6580138177475514368",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6603406708837060608",
    "prod_ID": "6603406708837060608",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6559906618885677056",
    "prod_ID": "6559906618885677056",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800204505125359616",
    "prod_ID": "6808508614265937920",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6554475779993509888",
    "prod_ID": "6554475779993509888",
    "modal_type": "game_template_dressup",
    "game": "Peppa_Space",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6610285351467094016",
    "prod_ID": "6610285351467094016",
    "modal_type": "game_template_dressup",
    "game": "George_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6285944071466778624",
    "prod_ID": "6285944071466778624",
    "modal_type": "game_template_dressup",
    "game": "George_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6899890215692017664",
    "prod_ID": "6633490480127156224",
    "modal_type": "game_template_dressup",
    "game": "George_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6580139156094717952",
    "prod_ID": "6580139156094717952",
    "modal_type": "game_template_dressup",
    "game": "George_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6603409677578018816",
    "prod_ID": "6603409677578018816",
    "modal_type": "game_template_dressup",
    "game": "George_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6560001884804485120",
    "prod_ID": "6560001884804485120",
    "modal_type": "game_template_dressup",
    "game": "George_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800202499644071936",
    "prod_ID": "6808509634182258688",
    "modal_type": "game_template_dressup",
    "game": "George_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6554479429822320640",
    "prod_ID": "6554479429822320640",
    "modal_type": "game_template_dressup",
    "game": "George_Space",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6285944920607817728",
    "prod_ID": "6285944920607817728",
    "modal_type": "game_template_dressup",
    "game": "MumPig_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6285944920607817728",
    "prod_ID": "6285944920607817728",
    "modal_type": "game_template_dressup",
    "game": "MumPig_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6899882883234930688",
    "prod_ID": "6633506488418181120",
    "modal_type": "game_template_dressup",
    "game": "MumPig_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707370141805711360",
    "prod_ID": "6714243662180130816",
    "modal_type": "game_template_dressup",
    "game": "MumPig_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6603411157903089664",
    "prod_ID": "6603411157903089664",
    "modal_type": "game_template_dressup",
    "game": "MumPig_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800205371748257792",
    "prod_ID": "6808506988276883456",
    "modal_type": "game_template_dressup",
    "game": "MumPig_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6562080370922758144",
    "prod_ID": "6562080370922758144",
    "modal_type": "game_template_dressup",
    "game": "MumPig_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6610267972745961472",
    "prod_ID": "6610267972745961472",
    "modal_type": "game_template_dressup",
    "game": "DadPig_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6285946291386056704",
    "prod_ID": "6285946291386056704",
    "modal_type": "game_template_dressup",
    "game": "DadPig_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6899888138236469248",
    "prod_ID": "6633477175505461248",
    "modal_type": "game_template_dressup",
    "game": "DadPig_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707344626516500480",
    "prod_ID": "6714246744641249280",
    "modal_type": "game_template_dressup",
    "game": "DadPig_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6603413389247647744",
    "prod_ID": "6603413389247647744",
    "modal_type": "game_template_dressup",
    "game": "DadPig_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6562079427208552448",
    "prod_ID": "6562079427208552448",
    "modal_type": "game_template_dressup",
    "game": "DadPig_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800207765643071488",
    "prod_ID": "6808505570719571968",
    "modal_type": "game_template_dressup",
    "game": "DadPig_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6712508979884593152",
    "prod_ID": "6717553296911503360",
    "modal_type": "game_template_dressup",
    "game": "Suzy_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6697609628146212864",
    "prod_ID": "6697609628146212864",
    "modal_type": "game_template_dressup",
    "game": "Suzy_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6771150698427191296",
    "prod_ID": "6776314718054912000",
    "modal_type": "game_template_dressup",
    "game": "Suzy_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6788221569763381248",
    "prod_ID": "6797644257617387520",
    "modal_type": "game_template_dressup",
    "game": "Suzy_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800200349476069376",
    "prod_ID": "6808511708907311104",
    "modal_type": "game_template_dressup",
    "game": "Suzy_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707373689838772224",
    "prod_ID": "6713943979704586240",
    "modal_type": "game_template_dressup",
    "game": "Suzy_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6722277008071729152",
    "prod_ID": "6729944918177484800",
    "modal_type": "game_template_dressup",
    "game": "Suzy_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6712504492507795456",
    "prod_ID": "6717554717098643456",
    "modal_type": "game_template_dressup",
    "game": "Danny_ColdWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6697612139104051200",
    "prod_ID": "6697612139104051200",
    "modal_type": "game_template_dressup",
    "game": "Danny_WarmWeather",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6771148960995479552",
    "prod_ID": "6776315448820113408",
    "modal_type": "game_template_dressup",
    "game": "Danny_Easter",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6788224132881584128",
    "prod_ID": "6797643443335208960",
    "modal_type": "game_template_dressup",
    "game": "Danny_Festival",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6800198802717417472",
    "prod_ID": "6808510571189772288",
    "modal_type": "game_template_dressup",
    "game": "Danny_Sports",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707375327517347840",
    "prod_ID": "6713941403512741888",
    "modal_type": "game_template_dressup",
    "game": "Danny_Halloween",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6722278395128057856",
    "prod_ID": "6729945729485901824",
    "modal_type": "game_template_dressup",
    "game": "Danny_Christmas",
    "Themed": "Holidays",
    "Location": "Home",
    "Character": "Friends",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6450824575289655296",
    "prod_ID": "6450824575289655296",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Garden",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "",
    "prod_ID": "6379383889835589632",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Picnic Lunch (Spring Lunch Scene Maker)",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6415325200082010112",
    "prod_ID": "6415325200082010112",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Seaside ",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6350211961258508288",
    "prod_ID": "6350211961258508288",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Peppa Home",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6686134027363295232",
    "prod_ID": "6686135018322534400",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Castle",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6603415340257513472",
    "prod_ID": "6603415340257513472",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Christmas (winter)",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6707073433100099584",
    "prod_ID": "6713921524592152576",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Halloween",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6640523716161970176",
    "prod_ID": "6650394878996520960",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Mermaid",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "",
    "prod_ID": "",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Olympics",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6879819834839023616",
    "prod_ID": "6879915437912625152",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Dinosaurs",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6947304762933252096",
    "prod_ID": "6947613574630084608",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Playground",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6791429520428769280",
    "prod_ID": "6797648670675312640",
    "modal_type": "game_template_fuzzyfelt",
    "game": "Carnivals",
    "Themed": "Outdoors",
    "Location": "Outside",
    "Character": "",
    "Gameplay": "World_Build"
  },
  {
    "staging_ID": "6765731411026120704",
    "prod_ID": "6765731411026120704",
    "modal_type": "colouring_book",
    "game": "COVIDRainbow (8 Sheets)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6239882917921685504",
    "prod_ID": "6239882917921685504",
    "modal_type": "colouring_book",
    "game": "FatherChristmas",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6222177432279973888",
    "prod_ID": "6222177432279973888",
    "modal_type": "colouring_book",
    "game": "ChristmasHoliday (8 sheets)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6318513483545575424",
    "prod_ID": "6318513483545575424",
    "modal_type": "colouring_book",
    "game": "Halloween",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6707329654801571840",
    "prod_ID": "6713994549190598656",
    "modal_type": "colouring_book",
    "game": "Halloween 2",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6206939351721443328",
    "prod_ID": "6206939351721443328",
    "modal_type": "colouring_book",
    "game": "SnowActivity (colouring_Winter1)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6222075423187009536",
    "prod_ID": "6222075423187009536",
    "modal_type": "colouring_book",
    "game": "MountainSnow",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6222176262111100928",
    "prod_ID": "6222176262111100928",
    "modal_type": "colouring_book",
    "game": "AlpineHoliday",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6587032696611540992",
    "prod_ID": "6587032696611540992",
    "modal_type": "colouring_book",
    "game": "CoolFriends",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6587034800621228032",
    "prod_ID": "6587034800621228032",
    "modal_type": "colouring_book",
    "game": "AutumnFarm",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6583476625192132608",
    "prod_ID": "6583476625192132608",
    "modal_type": "colouring_book",
    "game": "DaysOutside",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6871265462894993408",
    "prod_ID": "6874753158149713920",
    "modal_type": "colouring_book",
    "game": "Cheese World",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6871260945554087936",
    "prod_ID": "6874754283376615424",
    "modal_type": "colouring_book",
    "game": "Fruit Veg World (cwp_Vegworld)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6642438033035759616",
    "prod_ID": "6632772374740213760",
    "modal_type": "colouring_book",
    "game": "Easter",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6645019952269238272",
    "prod_ID": "6632769479227613184",
    "modal_type": "colouring_book",
    "game": "SpringGreenery",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6780616056317943808",
    "prod_ID": "6787513721421438976",
    "modal_type": "colouring_book",
    "game": "Friends",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6780620458432925696",
    "prod_ID": "6787516479675441152",
    "modal_type": "colouring_book",
    "game": "Friends2",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6811705162428719104",
    "prod_ID": "6819306916406239232",
    "modal_type": "colouring_book",
    "game": "Hollywood",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6811712087836991488",
    "prod_ID": "6819301007101661184",
    "modal_type": "colouring_book",
    "game": "Cacti",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6788217370333941760",
    "prod_ID": "6797640733286342656",
    "modal_type": "colouring_book",
    "game": "Carnival",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6632771070517190656",
    "prod_ID": "6632771070517190656",
    "modal_type": "colouring_book",
    "game": "DayTrip",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6899892377423716352",
    "prod_ID": "6632771693916594176",
    "modal_type": "colouring_book",
    "game": "SunnyWheels",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6666099359788310528",
    "prod_ID": "6669475629062819840",
    "modal_type": "colouring_book",
    "game": "BeachPeppa",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6671517676476829696",
    "prod_ID": "6669476613239476224",
    "modal_type": "colouring_book",
    "game": "SeaGeorge",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6273620300718407680",
    "prod_ID": "6669474598627184640",
    "modal_type": "colouring_book",
    "game": "Jungle",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6669477830116118528",
    "prod_ID": "6669477830116118528",
    "modal_type": "colouring_book",
    "game": "Instruments",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6697621571015806976",
    "prod_ID": "6697623376173342720",
    "modal_type": "colouring_book",
    "game": "Space (8 sheets)",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6686133193552437248",
    "prod_ID": "6686132421863804928",
    "modal_type": "colouring_book",
    "game": "Castle",
    "Themed": "School",
    "Location": "School",
    "Character": "Peppa",
    "Gameplay": "Draw"
  },
  {
    "staging_ID": "6274986752956432384",
    "prod_ID": "6274986752956432384",
    "modal_type": "video_episode",
    "game": "S001_E001_MuddyPuddles",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6519674236224278528",
    "prod_ID": "6519674236224278528",
    "modal_type": "video_episode",
    "game": "S001_E002_MrDinoLost",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6203977891110191104",
    "prod_ID": "6203977891110191104",
    "modal_type": "video_episode",
    "game": "S001_E003_BestFriend",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6519674792692158464",
    "prod_ID": "6519674792692158464",
    "modal_type": "video_episode",
    "game": "S001_E004_PollyParrot",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6519675143881236480",
    "prod_ID": "6519675143881236480",
    "modal_type": "video_episode",
    "game": "S001_E005_HideandSeek",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517579382627373056",
    "prod_ID": "6517579382627373056",
    "modal_type": "video_episode",
    "game": "S001_E006_Playgroup",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517595011677822976",
    "prod_ID": "6517595011677822976",
    "modal_type": "video_episode",
    "game": "S001_E007_MummyPigWork",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517610320946139136",
    "prod_ID": "6517610320946139136",
    "modal_type": "video_episode",
    "game": "S001_E008_PiggyinMiddle",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517594381279301632",
    "prod_ID": "6517594381279301632",
    "modal_type": "video_episode",
    "game": "S001_E009_DaddyLosesGlasses",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517609772084891648",
    "prod_ID": "6517609772084891648",
    "modal_type": "video_episode",
    "game": "S001_E010_Gardening",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517602000021626880",
    "prod_ID": "6517602000021626880",
    "modal_type": "video_episode",
    "game": "S001_E011_Hiccups",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517609759676964864",
    "prod_ID": "6517609759676964864",
    "modal_type": "video_episode",
    "game": "S001_E012_Bicycles",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517595548759625728",
    "prod_ID": "6517595548759625728",
    "modal_type": "video_episode",
    "game": "S001_E013_Secrets",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6381558010761707520",
    "prod_ID": "6381558010761707520",
    "modal_type": "video_episode",
    "game": "S001_E014_FlyingKite",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6709547252490833920",
    "prod_ID": "6709547252490833920",
    "modal_type": "video_episode",
    "game": "S001_E015_Picnic",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517610352442347520",
    "prod_ID": "6517610352442347520",
    "modal_type": "video_episode",
    "game": "S001_E016_MusicalInstruments",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6274993873915740160",
    "prod_ID": "6274993873915740160",
    "modal_type": "video_episode",
    "game": "S001_E017_FrogsWormsButterflies",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517601148545540096",
    "prod_ID": "6517601148545540096",
    "modal_type": "video_episode",
    "game": "S001_E018_DressingUp",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6517610840825929728",
    "prod_ID": "6517610840825929728",
    "modal_type": "video_episode",
    "game": "S001_E020_SchoolFete",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6203992594259640320",
    "prod_ID": "6203992594259640320",
    "modal_type": "video_episode",
    "game": "S001_E021_MummyPigBirthday",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656327502919245824",
    "prod_ID": "6656327502919245824",
    "modal_type": "video_episode",
    "game": "S001_E034_Lunch",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6274992133413797888",
    "prod_ID": "6274992133413797888",
    "modal_type": "video_episode",
    "game": "S001_E040_VeryHotDay",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6709608163545063424",
    "prod_ID": "6709608163545063424",
    "modal_type": "video_episode",
    "game": "S001_E042_DadGetFit",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6709606102942228480",
    "prod_ID": "6709606102942228480",
    "modal_type": "video_episode",
    "game": "S001_E051_MovieCamera",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656293541518118912",
    "prod_ID": "6656293541518118912",
    "modal_type": "video_episode",
    "game": "S002_E005_Mysteries",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6274994171635826688",
    "prod_ID": "6274994171635826688",
    "modal_type": "video_episode",
    "game": "S002_E020_Swimming",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656640931370504192",
    "prod_ID": "6656640931370504192",
    "modal_type": "video_episode",
    "game": "S002_E028_Painting",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6204022970831077376",
    "prod_ID": "6204022970831077376",
    "modal_type": "video_episode",
    "game": "S002_E042_GrannyandGrandpaAttic",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656640529782677504",
    "prod_ID": "6656640529782677504",
    "modal_type": "video_episode",
    "game": "S002_E049_Stars",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6274989484392054784",
    "prod_ID": "6274989484392054784",
    "modal_type": "video_episode",
    "game": "S003_E006_CampingHoliday",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656640200953434112",
    "prod_ID": "6656640200953434112",
    "modal_type": "video_episode",
    "game": "S003_E007_Compost",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6203993724565848064",
    "prod_ID": "6203993724565848064",
    "modal_type": "video_episode",
    "game": "S003_E010_Washing",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6203993563223556096",
    "prod_ID": "6203993563223556096",
    "modal_type": "video_episode",
    "game": "S003_E017_MrPotatoComestoTown",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656644359169642496",
    "prod_ID": "6656644359169642496",
    "modal_type": "video_episode",
    "game": "S003_E019_GrannyPigChicken",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656648858286301184",
    "prod_ID": "6656648858286301184",
    "modal_type": "video_episode",
    "game": "S004_E002_Whistling",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656641250015973376",
    "prod_ID": "6656641250015973376",
    "modal_type": "video_episode",
    "game": "S004_E007_Spring (easter)",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6656294918394875904",
    "prod_ID": "6656294918394875904",
    "modal_type": "video_episode",
    "game": "S004_E022_BlackberryBush",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6248623725759954944",
    "prod_ID": "6248623725759954944",
    "modal_type": "video_sing_along",
    "game": "BigBalloon",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248621196837912576",
    "prod_ID": "6248621196837912576",
    "modal_type": "video_sing_along",
    "game": "MissPollyHadADolly",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248619562699325440",
    "prod_ID": "6248619562699325440",
    "modal_type": "video_sing_along",
    "game": "WheelsOnBus",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204022970831077376",
    "prod_ID": "6895102105401561088",
    "modal_type": "video_sing_along",
    "game": "BirdyBirdyWoofWoof",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204024512124551168",
    "prod_ID": "6204024512124551168",
    "modal_type": "video_sing_along",
    "game": "RecyclingSong",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204024369409163264",
    "prod_ID": "6204024369409163264",
    "modal_type": "video_sing_along",
    "game": "SeasideHoliday",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204024857349324800",
    "prod_ID": "6204024857349324800",
    "modal_type": "video_sing_along",
    "game": "CountingSong",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248622685903912960",
    "prod_ID": "6248622685903912960",
    "modal_type": "video_sing_along",
    "game": "Rainbow",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204024604235661312",
    "prod_ID": "6204024604235661312",
    "modal_type": "video_sing_along",
    "game": "NorthStar",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248621588711735296",
    "prod_ID": "6248621588711735296",
    "modal_type": "video_sing_along",
    "game": "GrandpaTrain",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248620421239799808",
    "prod_ID": "6248620421239799808",
    "modal_type": "video_sing_along",
    "game": "JollyPirates",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248623415037526016",
    "prod_ID": "6248623415037526016",
    "modal_type": "video_sing_along",
    "game": "TrainSong",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6248623017631416320",
    "prod_ID": "6248623017631416320",
    "modal_type": "video_sing_along",
    "game": "BingBongSong (Songs_BingBong)",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6204024724574437376",
    "prod_ID": "6204024724574437376",
    "modal_type": "video_sing_along",
    "game": "MerryJoyfulGreetings",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6512371422935654400",
    "prod_ID": "6512371422935654400",
    "modal_type": "video_nursery",
    "game": "ItsyBitsySpider-RowYourBoat",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6512372669432467456",
    "prod_ID": "6512372669432467456",
    "modal_type": "video_nursery",
    "game": "OldMacDonald-TwinkleTwinkle",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6904159914697179136",
    "prod_ID": "6740421129177538560",
    "modal_type": "video_nursery",
    "game": "Five Little Monkeys",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "",
    "prod_ID": "",
    "modal_type": "video_nursery",
    "game": "ABC Song",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6843956047682740224",
    "prod_ID": "6843955715925745664",
    "modal_type": "video_nursery",
    "game": "If You're Spooky and You Know it",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6830943938963316736",
    "prod_ID": "6740424176473608192",
    "modal_type": "video_nursery",
    "game": "Daddy Pig ",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6740423877461680128",
    "prod_ID": "6740423877461680128",
    "modal_type": "video_nursery",
    "game": "Twinkle twinkle",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6740423469024550912",
    "prod_ID": "6740423469024550912",
    "modal_type": "video_nursery",
    "game": "Wheels on the Bus",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6740422850926743552",
    "prod_ID": "6740422850926743552",
    "modal_type": "video_nursery",
    "game": "Humpty Dumpty",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6904160303282659328",
    "prod_ID": "6740422554028740608",
    "modal_type": "video_nursery",
    "game": "Rain Rain Go Away",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6740422278559436800",
    "prod_ID": "6740422278559436800",
    "modal_type": "video_nursery",
    "game": "Jingle Bells",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6740421595252793344",
    "prod_ID": "6740421595252793344",
    "modal_type": "video_nursery",
    "game": "(We Wish You a) Merry Christmas",
    "Themed": "School",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Play-a-long"
  },
  {
    "staging_ID": "6647763199723180032",
    "prod_ID": "6647763199723180032",
    "modal_type": "video_created",
    "game": "COVID_WHO",
    "Themed": "",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6557740654651908096",
    "prod_ID": "6557740654651908096",
    "modal_type": "video_music",
    "game": "01_It's PeppaPig",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6557741104239353856",
    "prod_ID": "6557741104239353856",
    "modal_type": "video_music",
    "game": "02_Bing BongZoo",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6557741811155734528",
    "prod_ID": "6557741811155734528",
    "modal_type": "video_music",
    "game": "03_Lets GetReady",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6557742233354375168",
    "prod_ID": "6557742233354375168",
    "modal_type": "video_music",
    "game": "04_Expert Daddy Pig",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6560532663808696320",
    "prod_ID": "6560532663808696320",
    "modal_type": "video_music",
    "game": "05_RainbowRainbow",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6560533013521375232",
    "prod_ID": "6560533013521375232",
    "modal_type": "video_music",
    "game": "06_SuperPotato",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6560533394808770560",
    "prod_ID": "6560533394808770560",
    "modal_type": "video_music",
    "game": "07_PeppaAndFriends",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6560533871231377408",
    "prod_ID": "6560533871231377408",
    "modal_type": "video_music",
    "game": "08_ClassOfMadameGazelle",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562861529860542464",
    "prod_ID": "6562861529860542464",
    "modal_type": "video_music",
    "game": "09_Festival Fun",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562861230823444480",
    "prod_ID": "6562861230823444480",
    "modal_type": "video_music",
    "game": "10_JumpingInMuddyPuddles",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562860855659732992",
    "prod_ID": "6562860855659732992",
    "modal_type": "video_music",
    "game": "11_Holidays",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562860432181829632",
    "prod_ID": "6562860432181829632",
    "modal_type": "video_music",
    "game": "12_Traffic",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562862194401878016",
    "prod_ID": "6562862194401878016",
    "modal_type": "video_music",
    "game": "13_BalloonRide",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562862693847015424",
    "prod_ID": "6562862693847015424",
    "modal_type": "video_music",
    "game": "14_BusyMissRabbit",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6562863162472407040",
    "prod_ID": "6562863162472407040",
    "modal_type": "video_music",
    "game": "15_Lullaby",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826233875606413312",
    "prod_ID": "6826248246768308224",
    "modal_type": "video_music",
    "game": "Recycling",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826236236362027008",
    "prod_ID": "6826252377297920000",
    "modal_type": "video_music",
    "game": "Schoolbus",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826236558388109312",
    "prod_ID": "6826251486331277312",
    "modal_type": "video_music",
    "game": "DiggingwMrBull",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826237477100064768",
    "prod_ID": "6826249883809353728",
    "modal_type": "video_music",
    "game": "WinterDays",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826251845586001920",
    "prod_ID": "6826251845586001920",
    "modal_type": "video_music",
    "game": "PeppasPerfectDay",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826237202947776512",
    "prod_ID": "6826253870151376896",
    "modal_type": "video_music",
    "game": "NorthStar",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826235493596925952",
    "prod_ID": "6826253579377053696",
    "modal_type": "video_music",
    "game": "PumpkinParty",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6861115531693658112",
    "prod_ID": "6861670646108266496",
    "modal_type": "video_music",
    "game": "ChristmasMuddyPuddles",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826236832288739328",
    "prod_ID": "6826252704277467136",
    "modal_type": "video_music",
    "game": "PeppasAdventures",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826209879288586240",
    "prod_ID": "6826250779318427648",
    "modal_type": "video_music",
    "game": "BingBongChampion",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6826238155952365568",
    "prod_ID": "6826253248966561792",
    "modal_type": "video_music",
    "game": "BirdyBirdyWoofWoof",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6919357164180226048",
    "prod_ID": "6920062415132561408",
    "modal_type": "video_music",
    "game": "Big Day Out",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6919357614631698432",
    "prod_ID": "6920064412405604352",
    "modal_type": "video_music",
    "game": "Look in a Book",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6920028054949740544",
    "prod_ID": "6920420387662729216",
    "modal_type": "video_music",
    "game": "Gardening with Grandad Pig",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6932351244334010368",
    "prod_ID": "6932368037295300608",
    "modal_type": "video_music",
    "game": "Roller Disco",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6942165626777772032",
    "prod_ID": "6942927939197603840",
    "modal_type": "video_music",
    "game": "Bestest Daddy in the World",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6955574071035961344",
    "prod_ID": "6955575350046892032",
    "modal_type": "video_music",
    "game": "Peppa's Club",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6960350412067311616",
    "prod_ID": "6961022338183860224",
    "modal_type": "video_music",
    "game": "My Best Friend Peppa",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6975570878134358016",
    "prod_ID": "6975572533613568000",
    "modal_type": "video_music",
    "game": "Bedtime",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6985705095128289280",
    "prod_ID": "6985707831844540416",
    "modal_type": "video_music",
    "game": "Mindfulness",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7045135671987675136",
    "prod_ID": "7046185247477862400",
    "modal_type": "video_music",
    "game": "Jolly Pirates ",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7129854329323134976",
    "prod_ID": "7130591205825585152",
    "modal_type": "video_music",
    "game": "Dinosaur Song (DinoParty)",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6942927439588888576",
    "prod_ID": "6942927439588888576",
    "modal_type": "video_music",
    "game": "Bestest Daddy in the World_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6955574469322870784",
    "prod_ID": "6955575652007419904",
    "modal_type": "video_music",
    "game": "Peppa's Club_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6961021970150465536",
    "prod_ID": "6961021970150465536",
    "modal_type": "video_music",
    "game": "My Best Friend Peppa_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6975571241491111936",
    "prod_ID": "6975572250519015424",
    "modal_type": "video_music",
    "game": "Bedtime_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "6985690785215815680",
    "prod_ID": "6985707569910255616",
    "modal_type": "video_music",
    "game": "Mindfulness_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7046864327684526080",
    "prod_ID": "7046865027126792192",
    "modal_type": "video_music",
    "game": "Jolly Pirates_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7129865206919208960",
    "prod_ID": "7130590454738984960",
    "modal_type": "video_music",
    "game": "Dinosaur Song_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138606012299612160",
    "prod_ID": "7140023860740628480",
    "modal_type": "video_music",
    "game": "Peppa Pig – Theme Tune [Remix] (ThemeTuneRemix) ",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138609639026204672",
    "prod_ID": "7140024112612773888",
    "modal_type": "video_music",
    "game": "Let’s Jump In",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138610284462481408",
    "prod_ID": "7140027185347305472",
    "modal_type": "video_music",
    "game": "Peppa’s Favourite Places",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138624693020790784",
    "prod_ID": "7140028663092875264",
    "modal_type": "video_music",
    "game": "Bing Bong Garden",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138625651159207936",
    "prod_ID": "7140026541647470592",
    "modal_type": "video_music",
    "game": "Cruise Ship Holiday",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138626506168078336",
    "prod_ID": "7140028233730367488",
    "modal_type": "video_music",
    "game": "Bobbing Up and Down",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138642732957179904",
    "prod_ID": "7140027847103614976",
    "modal_type": "video_music",
    "game": "The Magic Word is Potty (MagicWordPotty)",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138644723108286464",
    "prod_ID": "7140026685356908544",
    "modal_type": "video_music",
    "game": "Best Day",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138643303906807808",
    "prod_ID": "7140023821339336704",
    "modal_type": "video_music",
    "game": "Teacher Peppa",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138609926134697984",
    "prod_ID": "7140028026129096704",
    "modal_type": "video_music",
    "game": "Let’s Jump In_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138610622410137600",
    "prod_ID": "7140027421503397888",
    "modal_type": "video_music",
    "game": "Peppa’s Favourite Places_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138624985825157120",
    "prod_ID": "7140029124508258304",
    "modal_type": "video_music",
    "game": "Bing Bong Garden_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138625970157002752",
    "prod_ID": "7140028862905323520",
    "modal_type": "video_music",
    "game": "Cruise Ship Holiday_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138626802596323328",
    "prod_ID": "7140026871177158656",
    "modal_type": "video_music",
    "game": "Bobbing Up and Down_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138643013132492800",
    "prod_ID": "7140027619197718528",
    "modal_type": "video_music",
    "game": "The Magic Word is Potty_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138644456845484032",
    "prod_ID": "7140024358516428800",
    "modal_type": "video_music",
    "game": "Best Day_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  },
  {
    "staging_ID": "7138643611038916608",
    "prod_ID": "7140028469135679488",
    "modal_type": "video_music",
    "game": "Teacher Peppa_Preview",
    "Themed": "Party",
    "Location": "Movie_Theatre",
    "Character": "",
    "Gameplay": "Watch"
  }
 ]

const colors = ["#82ca58", "#34aea2 ", "#ea4548 ", "#9c5dd9 ", "#28877d ", "#70e511 ", "#257bb1 ", "#fecff1 ", "#afc9e1 ", "#df408f ", "#74b8e2 ", "#afa665 ", "#31B46C ", "#c011b6 ", "#a97c1e ", "#4e1c37 ", "#6EA4A1 ", "#1c5e87 ", "#5aaa99 ", "#b46864 ", "#c52e21 ", "#bce80b ", "#1bd1b6 ", "#e1b94d ", "#6c7e76"];

const tagColorHex = "#2c2349"

const setThisBorderColor = "#00b74f"

//build array of curent categories
let catch_categories = []
let current_categories = []

//build array of themes 
//let themes = []
//let catch_themes = []

//loop variables
let ypos = 0;
let xpos = 0;
let xcount = 0;

let ystart = 0;
let yoffset = 4000;

//Gameplay
for (let i = 0; i < games.length; i++) {
  //if value isn't in array then push new value -- categories
  if (!catch_categories.includes(games[i].modal_type)) {
    catch_categories.push(games[i].modal_type);
    current_categories.push({'theme': games[i].modal_type, 'xpos': 0, 'ypos': ystart, 'xcount': 0});
    ystart += yoffset;
  }
  //if value isn't in array then push new value -- themes 
  /*if (!catch_themes.includes(games[i].Gameplay)) {
    catch_themes.push(games[i].Gameplay);
    themes.push({ 'theme': games[i].Gameplay ,  'xpos': 0 ,  'ypos': ystart ,  'xcount': 0 });
    ystart += yoffset;
  }*/
}

current_categories.forEach(theme => {
  //set labels on page only
  let themeLabel = figma.createText();
  themeLabel.characters = theme.theme
  themeLabel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]
  themeLabel.fontSize = 200;

  themeLabel.x = -3500;
  themeLabel.y = theme.ypos;

})



games.forEach(game => {

  // START FIGMA //
  // Outer Frame ---------------- 
  let outerFrame = figma.createFrame();

  outerFrame.layoutMode = 'VERTICAL'

  let gameIndex = catch_categories.indexOf(game.modal_type)
    console.log("gameIndex " + gameIndex)

  
  let categoryColor = figma.util.rgb(colors[gameIndex])
  let tagColor = figma.util.rgb(tagColorHex)

  outerFrame.fills = [{ type: 'SOLID', color: categoryColor }]
  outerFrame.strokes = [{ type: 'SOLID', color: categoryColor }]
  //outerFrame.strokeWeight = 35
  outerFrame.cornerRadius = 50
  outerFrame.layoutSizingHorizontal = 'HUG'
  outerFrame.layoutAlign = 'STRETCH';
  outerFrame.counterAxisSizingMode = 'FIXED';
  outerFrame.primaryAxisSizingMode = 'FIXED';
  outerFrame.primaryAxisAlignItems = "CENTER"
  outerFrame.counterAxisAlignItems = "CENTER"

  outerFrame.layoutGrow = 1
  outerFrame.resize(512, 712)

  //----------------------*************************

    //position each outerframe according to category

    //let groupNum = current_categories.findIndex(x => x.theme === game.Gameplay); 
    let groupNum = gameIndex

    outerFrame.x = current_categories[groupNum].xpos
    outerFrame.y = current_categories[groupNum].ypos
    
    if (current_categories[groupNum].xcount === 4) {
      current_categories[groupNum].ypos -= yoffset;
      current_categories[groupNum].ypos += 800; //why plus eight hundred?
      current_categories[groupNum].xcount = 0;
      current_categories[groupNum].xpos += 600;
    
    } else {
      current_categories[groupNum].ypos += 800;
      current_categories[groupNum].xcount++;
    }

    // Inside Frame ---------------- 

    let innerFrame = figma.createFrame();
    outerFrame.appendChild(innerFrame)

    innerFrame.layoutMode = 'VERTICAL'
    innerFrame.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    innerFrame.layoutSizingHorizontal = 'FILL' // FIXED/ HUG/ FILL
    innerFrame.primaryAxisAlignItems = "CENTER"
    innerFrame.counterAxisAlignItems = "CENTER"
    innerFrame.fills = [{ type: 'SOLID', color: categoryColor }]


    let tagBorderColor = figma.util.rgb(setThisBorderColor)
    innerFrame.strokes = [{ type: 'SOLID', color: tagBorderColor }]
    innerFrame.strokeWeight = 20
    innerFrame.cornerRadius = 50
    innerFrame.resize(512, 512)
    innerFrame.name = game.prod_ID;


    //text -----------------
    /*    {
            "staging_ID": "7138644723108286464",
            "prod_ID": "7140026685356908544",
            "modal_type": "video_music",
            "game": "Best Day",
            "Gameplay": "Party",
            "Gameplay": "",
            "Gameplay": "",
            "Gameplay": ""
        },*/
  //text -----------------
  let textFrame = figma.createFrame();
  outerFrame.appendChild(textFrame)

  textFrame.layoutMode = 'VERTICAL'
  textFrame.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
  textFrame.layoutSizingHorizontal = 'FILL' // FIXED/ HUG/ FILL
  textFrame.primaryAxisAlignItems = "CENTER"
  textFrame.counterAxisAlignItems = "CENTER"
  textFrame.fills = [{ type: 'SOLID', color: tagColor }]



    let prod_ID = figma.createText();
    prod_ID.characters = game.prod_ID
    prod_ID.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    prod_ID.fontSize = 12;

    textFrame.appendChild(prod_ID)

    let modal_type = figma.createText();
    modal_type.characters = game.modal_type
    modal_type.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    modal_type.fontSize = 30;

    textFrame.appendChild(modal_type)

    let woppgame = figma.createText();
    woppgame.characters = game.game
    woppgame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    woppgame.fontSize = 42;

    textFrame.appendChild(woppgame)

    let Gameplay = figma.createText();
    Gameplay.characters = game.Gameplay
    Gameplay.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
    Gameplay.fontSize = 22;

    textFrame.appendChild(Gameplay)

  })

  