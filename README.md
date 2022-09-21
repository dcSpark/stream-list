# Stream list

This project makes it easy to manage a list of points to cover while streaming

![image](https://user-images.githubusercontent.com/2608559/191397787-035c004b-055e-421d-84c8-ebd3780bc98e.png)

## Features

- Dynamically create a list of topics using a json file
- Optionally show an image for covering points
- Easily keep track of speaker notes for each point

# How to use

Look at an example in [./src/shows/example](./src/shows/example)

1. Create a new folder in the `shows` directory for a new stream you want to do
1. Create a JSON file and images in this folder that has all the points you want to cover
1. Set the name of the folder for your show in [currentShow](src/shows/currentShow.json)
1. Launch the application (`yarn tauri dev`)
1. Set up OBS to to record part of the application using the Chroma Key filter to get transparency
1. Use up & down arrows to change between news items

# Other assets

In the [public](./public/) folder, you can find:

- Background to use for OBS
- Thumbnail template to use for Youtube
