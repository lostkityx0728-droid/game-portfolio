gdjs.DeathCode = {};
gdjs.DeathCode.localVariables = [];
gdjs.DeathCode.idToCallbackMap = new Map();
gdjs.DeathCode.GDShadowObjects1= [];
gdjs.DeathCode.GDShadowObjects2= [];
gdjs.DeathCode.GDMain_9595ShipObjects1= [];
gdjs.DeathCode.GDMain_9595ShipObjects2= [];
gdjs.DeathCode.GDmidnightObjects1= [];
gdjs.DeathCode.GDmidnightObjects2= [];
gdjs.DeathCode.GDFuelFlashFXObjects1= [];
gdjs.DeathCode.GDFuelFlashFXObjects2= [];


gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDmidnightObjects1Objects = Hashtable.newFrom({"midnight": gdjs.DeathCode.GDmidnightObjects1});
gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.DeathCode.GDMain_9595ShipObjects1});
gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDmidnightObjects1Objects = Hashtable.newFrom({"midnight": gdjs.DeathCode.GDmidnightObjects1});
gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDFuelFlashFXObjects1Objects = Hashtable.newFrom({"FuelFlashFX": gdjs.DeathCode.GDFuelFlashFXObjects1});
gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.DeathCode.GDMain_9595ShipObjects1);
{for(var i = 0, len = gdjs.DeathCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDMain_9595ShipObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 100, 0);
}
}
{for(var i = 0, len = gdjs.DeathCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDMain_9595ShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.DeathCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.DeathCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.angleBetweenPositions((gdjs.DeathCode.GDMain_9595ShipObjects1[i].getPointX("")), (gdjs.DeathCode.GDMain_9595ShipObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
{for(var i = 0, len = gdjs.DeathCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.DeathCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(1)).setNumber(80);
}
}
{for(var i = 0, len = gdjs.DeathCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.DeathCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-asteroid-space-atmosphere-2004.wav", 1, false, 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Midnight1");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Midnight1") >= 3;
if (isConditionTrue_0) {
gdjs.DeathCode.GDmidnightObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDmidnightObjects1Objects, gdjs.randomInRange(100, 1100), gdjs.randomInRange(100, 600), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Midnight1");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Midnight1");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.DeathCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("midnight"), gdjs.DeathCode.GDmidnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDMain_95959595ShipObjects1Objects, gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDmidnightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shadow"), gdjs.DeathCode.GDShadowObjects1);
/* Reuse gdjs.DeathCode.GDmidnightObjects1 */
gdjs.DeathCode.GDFuelFlashFXObjects1.length = 0;

{for(var i = 0, len = gdjs.DeathCode.GDmidnightObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDmidnightObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.DeathCode.GDShadowObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDShadowObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ShadowTween", 0, "linear", 6, true);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.DeathCode.mapOfGDgdjs_9546DeathCode_9546GDFuelFlashFXObjects1Objects, (( gdjs.DeathCode.GDmidnightObjects1.length === 0 ) ? 0 :gdjs.DeathCode.GDmidnightObjects1[0].getPointX("")), (( gdjs.DeathCode.GDmidnightObjects1.length === 0 ) ? 0 :gdjs.DeathCode.GDmidnightObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Back");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Back") >= 5;
if (isConditionTrue_0) {
{gdjs.saveState.restoreGameSaveStateFromStorage(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), "default", true);
}
}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDShadowObjects1.length = 0;
gdjs.DeathCode.GDShadowObjects2.length = 0;
gdjs.DeathCode.GDMain_9595ShipObjects1.length = 0;
gdjs.DeathCode.GDMain_9595ShipObjects2.length = 0;
gdjs.DeathCode.GDmidnightObjects1.length = 0;
gdjs.DeathCode.GDmidnightObjects2.length = 0;
gdjs.DeathCode.GDFuelFlashFXObjects1.length = 0;
gdjs.DeathCode.GDFuelFlashFXObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);
gdjs.DeathCode.GDShadowObjects1.length = 0;
gdjs.DeathCode.GDShadowObjects2.length = 0;
gdjs.DeathCode.GDMain_9595ShipObjects1.length = 0;
gdjs.DeathCode.GDMain_9595ShipObjects2.length = 0;
gdjs.DeathCode.GDmidnightObjects1.length = 0;
gdjs.DeathCode.GDmidnightObjects2.length = 0;
gdjs.DeathCode.GDFuelFlashFXObjects1.length = 0;
gdjs.DeathCode.GDFuelFlashFXObjects2.length = 0;


return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
