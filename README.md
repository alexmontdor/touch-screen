# touch-screen
this is a small exercise to implement the drag n Drop for both a touch-screen and a normal screen
The user can drag a picture over boxes (dropzone) and drop them into them. When dropped, a text is displayed.
Beside the mainframe there is a small dashboard displaying the state of the mouse (button pressed / coordinates of the mouse when dragging)


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
## JS
The main.js includes functions for the drag n drop. DragDropTouch is a polyfills that makes the program working for the touchscreen.

## Display area
The display should be responsive

# Tests
the soft has been test on an Android Phone (Samsung)

# Usefull link
* [Drag n Drop Bernardo Castilho's github](https://github.com/Bernardo-Castilho/dragdroptouch/) - Drag n Drop Polyfill
* [Setting up a docker container by Caleb Sotelo](http://paislee.io/the-ultimate-nodejs-development-setup-with-docker/) - Caleb's blog article - My code follow for most of it this article



