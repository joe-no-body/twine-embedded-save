# Embedding Twine saves in HTML

This repo contains a proof of concept Twine story that allows you to download a copy of the story's HTML with your save data embedded. Upon opening the downloaded HTML file, the story state will resume exactly as it was left off, even in a different browser or on a different computer, even after being edited using Twine.

The intent of this POC is to show that Twine could be more than just a tool for interactive fiction by bringing it a little closer to applications like Tiddlywiki, HyperCard, and Excel. By storing save data within the exported HTML itself, you could build a simple app to record data, save it to HTML, and share it with someone else as a single, editable file. That person could update the data and tweak the functionality using Twine, then send the resulting file back to you with all their changes embedded. It's not as seamless as the in-place editing offered by the aforementioned tools, but it's a step in the right direction.

## How it works - a quick demo

1. Open the game, enter a name, and click "Continue".
2. Click "Save Game" and save the file to new location when prompted.
3. Open the saved HTML file in a different web browser/session or on a different machine.
4. Observe that your name and game state has been persisted.
5. Go to [twinery.org/2](https://twinery.org/2) and import the saved HTML file.
6. In the imported game, click "Play".
7. Observe that your name and game state has still been persisted.
8. Go back to the editor and change the greeting in the "Greeting" passage.
9. Click "Play" once again and observe that your name and game state are -- you guessed it -- still persisted, but now the greeting is different.

## TODOs

- [ ] extend or replace the SugarCube UI to use this saving mechanism
