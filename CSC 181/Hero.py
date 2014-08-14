def hero(month,day,color):  
  monthZ = {'January':'The Black','February':'The Vengeful','March':'The Dark','April':'The Red','May':'The Cursed','June':'The Savage','July':'The White','August':'The Ugly','September':'The Treacherous','October':'The Blue','November':'The Wicked','December':'The Green'}
  dayZ = {'1':'Gargoyle','2':'Goblin','3':'Creature','4':'King/Queen','5':'Witch/Warlock','6':'Guardian','7':'Fairy','8':'Knight','9':'Elf','10':'Assassin','11':'Sorcerer/Sorceress','12':'Giant','13':'Werewolf','14':'Wizard','15':'Ogre','16':'Beast','17':'Dragon','18':'Ghost','19':'Dwarf','20':'Unicorn','21':'Warrior','22':'Spirit','23':'Thief','24':'Mermaid/Merman','25':'Cyclops','26':'Troll','27':'Orc','28':'Pirate','29':'Vampire','30':'Prince/Princess','31':'Serpent'}
  colorZ = {'Red':'of the Night','Blue':'of the Seas','Green':'of the Forest','White':'of the North','Black':'of the Shadows','Yellow':'of the Dead','Purple':'of the East','Orange':'of the West','Brown':'of the Dessert','Cyan':'of the South','Pink':'of the Mountains'}
  
  return "Your hero name is: "+monthZ[month]+" "+dayZ[day]+" "+colorZ[color]

#month = raw_input('Month of birth (ex. January): ')
#day = raw_input('Day of birth (ex. 1): ')
#color = raw_input('Favorite color (ex. Red): ')

#print
#print hero(month,day,color)
#print
