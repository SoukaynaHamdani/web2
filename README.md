# Web Development Project 2 - *The Ultimate Plant Parent!*

Submitted by: **Soukayna Hamdani**

This web app: **is a flashcard app for testing your houseplant knowledge. It shows a set of plant-themed flashcards one at a time. Click a card to flip between the question and the answer, and click the "Next" button to jump to a random card in the set. Cards are color-coded by difficulty (Easy / Medium / Hard) and some include a photo of the plant.**



Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] Smooth 3D flip animation when a card is turned over
* [x] The "Next" button never shows the same card twice in a row
* [x] A difficulty tag (Easy / Medium / Hard) is displayed on each card
* [x] Decorative plant-themed background styling to match the card set

## Video Walkthrough

Here's a walkthrough of implemented required features:


<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<div>
    <a href="https://www.loom.com/share/6fcddfae81404ab9b13e626921c622c9">
       
    </a>
    <a href="https://www.loom.com/share/6fcddfae81404ab9b13e626921c622c9">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6fcddfae81404ab9b13e626921c622c9-701747e657d56ee6-full-play.gif#t=0.1">
    </a>
  </div>
GIF created with loom   
## Notes

Describe any challenges encountered while building the app.

- Getting the 3D flip animation right took some CSS experimentation with `perspective`, `transform-style: preserve-3d`, and `backface-visibility`.
- Making sure the "Next" button never shows the same card twice in a row required a small loop to re-roll the random index until it differs from the current one.
- Resetting the card back to the question side whenever a new card appears, which I handled with a `useEffect` that watches the current card.

## License

    Copyright 2026 Soukayna Hamdani

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
