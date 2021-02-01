var robot=require("robotjs");


setTimeout(handleOpenfirefox,1000);


function handleOpenfirefox(){
    robot.moveMouse(67,844);
    robot.mouseClick();
    robot.typeString("Firefox");
    robot.keyTap("enter");
    setTimeout(openfirefox,1000);
}

function openfirefox(){
    robot.moveMouse(298,76);
    robot.mouseClick();
    robot.typeString("gmail.com");
    robot.keyTap("enter");
    setTimeout(openCodechefDiscuss,6000);
}
function openCodechefDiscuss(){
    robot.moveMouse(240,39);
    robot.mouseClick();
    robot.typeString("disc");
    robot.keyTap("enter");
    robot.moveMouse(209,39);
    robot.mouseClick();
    setTimeout(openCodeForces,6000);
}
function openCodeForces(){
    robot.moveMouse(240,39);
    robot.mouseClick();
    robot.typeString("codeforces.com/profile/aditya7409");
    robot.keyTap("enter");
    robot.moveMouse(209,39);
    robot.mouseClick();
    setTimeout(openCodeForcesContests,6000);
}
function openCodeForcesContests(){
    robot.moveMouse(240,39);
    robot.mouseClick();
    robot.typeString("codeforces.com/contests");
    robot.keyTap("enter");
    robot.moveMouse(209,39);
    robot.mouseClick();
    
}
