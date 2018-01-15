# touch-screen
this is a small exercise to implement the drag n Drop for both a touch-screen and a normal screen.
Users can drag a picture over boxes (dropzone) and drop it into them. When dropped, a text is displayed.
Beside the main frame, there is a small dashboard displaying the state of the mouse (button pressed / coordinates of the mouse when dragging).


# Pre-requirement
## Config
Os : Ubuntu 16.04 Server
software required:
- docker
- git

## Launching the container
Run launch.sh script in src/server
Command after cloning:
```
cd src/server
/bin/bash ./scripts/launch.sh
```

## Possible Issues
When setting up the docker container, the system may display an error

Example:
```
docker: Error response from daemon: oci runtime error: container_linux.go:262: starting container process caused "exec: \"/app/scripts/dev_entrypoint.sh\": permission denied".
```
The fix is to change the mode of execution of the file
```
src/server/scripts> chmod +x dev_entrypoint.sh
```

# Comments on code
## Structure
### JS / CSS / Images
On a Docker point of view, these file are considered as static. They are placed on the public directory (/public).

### Server side
The Server is a nodeJS / express easy server working.
The static directory is the public directory.
The views are embedded within the app (/src/server/views). Here there is only one address (index)


### Package.json
The package.json is located in the /src/server
When the container is starting, it triggers the modules' installation. So the package.json sould be at the root as per the container reference ... therefore /scr/server


## JS
The main.js includes functions for the drag n drop. DragDropTouch is a polyfills that makes the program working for the touchscreen.
with the following line, the polyfill will not be working:
```
<script src="js/DragDropTouch.js"></script>
```
## Display area
The purpose of this exercise is not a design exercise. Althought the display is responsive.

# Test
the soft has been tested on an Android Phone (Samsung)

# Usefull links
* [Drag n Drop Bernardo Castilho's github](https://github.com/Bernardo-Castilho/dragdroptouch/) - Drag n Drop Polyfill
* [Setting up a docker container by Caleb Sotelo](http://paislee.io/the-ultimate-nodejs-development-setup-with-docker/) - Caleb's blog article - My code follow for most of it this article



