# Sparta-global-game-project

For our first project large project at Sparta, we given the task to make a game using only HTML5, CSS3 and javascript(jquery), and the only limitation being no canvas.

# Game design

To start of the project I was required to think of a game that I personally wanted to make and/or play. My initial thoughts were to make a maze game, where the game would be to go from start point to the end point, in a certain amount of time. But after putting some thought into the game itself I decided to change the project game into a RPG/dungeon-crawler/adventure game.

## Initial steps

For the first steps of the project, I decided to focus on creating a grid and moving an object through it. After that I created walls(objects that the user object could not move through). Once these steps were finished I decided to design the maze/labyrinth itself using a pen and paper.
I chose to design one map first and complete this fully before continuing to design and create new maps.

## Combat system

After finishing the first map, I than had to create a turn based combat system, where the user and an AI would take turns attacking each other and eventually a winner would be decided. I started out with the layout of the combat interface and than had to choose what information the user would needed. The following features are included:

* Name of enemy
* Health of enemy
* Health Bar of enemy
* Turn counter
* Image of enemy
* Adventurer stats
* User Health/health bar
* Base attack
* Attack multiplier
* Combat Log
* Abilities

## Win/Lose/Esc screen

I than created three separate divs that will remain hidden until certain conditions are met, such as winning or losing.

![GitHub Logo](/sprites/screenshot.png)

![GitHub Logo](/sprites/combatSS.png)

## Landing page

Finally I created the landing page, that would contain a link to the game and instructions on how to play the game.
