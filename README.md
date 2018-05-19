# bitrock

Prerequisite installs:

This is a gradle project so you will need to have gradle on your project path.  You can install gradle with homebrew using `brew install gradle` on a mac.  If you don't have homebrew already installed run the homebrew install script

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`

Running locally:

To run the boot app locally you can use the spring boot gradle plugin

`gradle bootRun`

This will start the app on port 8080 and you can visit it at localhost:8080.


To run the frontend you will also need yarn.  This can be installed with homebrew as well

`brew install yarn`

Next install webpack in the frontend directory

`npm i -D webpack-cli`

Once you have yarn installed you will need to add webpack for bundling your js assets and running a dev server

`yarn add --dev webpack webpack-dev-server`

