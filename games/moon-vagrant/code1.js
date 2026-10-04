gdjs.Start_95MangaCode = {};
gdjs.Start_95MangaCode.localVariables = [];
gdjs.Start_95MangaCode.idToCallbackMap = new Map();
gdjs.Start_95MangaCode.GDStartMangaObjects1= [];
gdjs.Start_95MangaCode.GDStartMangaObjects2= [];
gdjs.Start_95MangaCode.GDCamRigObjects1= [];
gdjs.Start_95MangaCode.GDCamRigObjects2= [];
gdjs.Start_95MangaCode.GDShot_959501Objects1= [];
gdjs.Start_95MangaCode.GDShot_959501Objects2= [];
gdjs.Start_95MangaCode.GDShot_959502Objects1= [];
gdjs.Start_95MangaCode.GDShot_959502Objects2= [];
gdjs.Start_95MangaCode.GDShot_959503Objects1= [];
gdjs.Start_95MangaCode.GDShot_959503Objects2= [];
gdjs.Start_95MangaCode.GDShot_959504Objects1= [];
gdjs.Start_95MangaCode.GDShot_959504Objects2= [];
gdjs.Start_95MangaCode.GDShot_959505Objects1= [];
gdjs.Start_95MangaCode.GDShot_959505Objects2= [];
gdjs.Start_95MangaCode.GDBlackFadeObjects1= [];
gdjs.Start_95MangaCode.GDBlackFadeObjects2= [];
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects1= [];
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects2= [];
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1= [];
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects2= [];
gdjs.Start_95MangaCode.GDMouseObjects1= [];
gdjs.Start_95MangaCode.GDMouseObjects2= [];


gdjs.Start_95MangaCode.mapOfGDgdjs_9546Start_959595MangaCode_9546GDCamRigObjects1Objects = Hashtable.newFrom({"CamRig": gdjs.Start_95MangaCode.GDCamRigObjects1});
gdjs.Start_95MangaCode.mapOfGDgdjs_9546Start_959595MangaCode_9546GDShot_9595959505Objects1Objects = Hashtable.newFrom({"Shot_05": gdjs.Start_95MangaCode.GDShot_959505Objects1});
gdjs.Start_95MangaCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Start_95MangaCode.GDCamRigObjects1 */
/* Reuse gdjs.Start_95MangaCode.GDShot_959505Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Start_95MangaCode.mapOfGDgdjs_9546Start_959595MangaCode_9546GDCamRigObjects1Objects, gdjs.Start_95MangaCode.mapOfGDgdjs_9546Start_959595MangaCode_9546GDShot_9595959505Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Start_95MangaCode.GDCamRigObjects1 */
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].addPolarForce(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), 0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(10);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(10);
}
}

}


};gdjs.Start_95MangaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_01"), gdjs.Start_95MangaCode.GDShot_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StateTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(300);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Rotate");
}
{for(var i = 0, len = gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Boss");
}
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].setPosition((( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointX("")),(( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Start_95MangaCode.GDCamRigObjects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDCamRigObjects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Start_95MangaCode.GDCamRigObjects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDCamRigObjects1[0].getPointY("")), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.Start_95MangaCode.GDBlackFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.Start_95MangaCode.GDMouseObjects1);
{for(var i = 0, len = gdjs.Start_95MangaCode.GDBlackFadeObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDBlackFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("1", 0, "linear", 3, false);
}
}
{for(var i = 0, len = gdjs.Start_95MangaCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDMouseObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.1, 0.3, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.1, 0.3, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.1, 0.3, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19805836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_01"), gdjs.Start_95MangaCode.GDShot_959501Objects1);
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].setPosition((( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointX("")),(( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointY("")));
}
}
{gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func(runtimeScene, 1.4, "", 0, (( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointX("")), (( gdjs.Start_95MangaCode.GDShot_959501Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959501Objects1[0].getPointY("")), null);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-lighter-wheel-spin-2641.wav", false, 80, 0.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19808084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_02"), gdjs.Start_95MangaCode.GDShot_959502Objects1);
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].setPosition((( gdjs.Start_95MangaCode.GDShot_959502Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959502Objects1[0].getPointX("")),(( gdjs.Start_95MangaCode.GDShot_959502Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959502Objects1[0].getPointY("")));
}
}
{gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func(runtimeScene, 1.2, "", 0, (( gdjs.Start_95MangaCode.GDShot_959502Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959502Objects1[0].getPointX("")), (( gdjs.Start_95MangaCode.GDShot_959502Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959502Objects1[0].getPointY("")), null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19808972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_03"), gdjs.Start_95MangaCode.GDShot_959503Objects1);
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].setPosition((( gdjs.Start_95MangaCode.GDShot_959503Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959503Objects1[0].getPointX("")),(( gdjs.Start_95MangaCode.GDShot_959503Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959503Objects1[0].getPointY("")));
}
}
{gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func(runtimeScene, 1.5, "", 0, (( gdjs.Start_95MangaCode.GDShot_959503Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959503Objects1[0].getPointX("")), (( gdjs.Start_95MangaCode.GDShot_959503Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959503Objects1[0].getPointY("")), null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19810484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_04"), gdjs.Start_95MangaCode.GDShot_959504Objects1);
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].setPosition((( gdjs.Start_95MangaCode.GDShot_959504Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959504Objects1[0].getPointX("")),(( gdjs.Start_95MangaCode.GDShot_959504Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959504Objects1[0].getPointY("")));
}
}
{gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func(runtimeScene, 2, "", 0, (( gdjs.Start_95MangaCode.GDShot_959504Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959504Objects1[0].getPointX("")), (( gdjs.Start_95MangaCode.GDShot_959504Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959504Objects1[0].getPointY("")), null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CamRig"), gdjs.Start_95MangaCode.GDCamRigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shot_05"), gdjs.Start_95MangaCode.GDShot_959505Objects1);
gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1);
{gdjs.evtsExt__CameraZoom__ZoomWithAnchor.func(runtimeScene, 2.1, "", 0, (( gdjs.Start_95MangaCode.GDShot_959505Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959505Objects1[0].getPointX("")), (( gdjs.Start_95MangaCode.GDShot_959505Objects1.length === 0 ) ? 0 :gdjs.Start_95MangaCode.GDShot_959505Objects1[0].getPointY("")), null);
}
{for(var i = 0, len = gdjs.Start_95MangaCode.GDCamRigObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDCamRigObjects1[i].addPolarForce(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), 0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{for(var i = 0, len = gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length ;i < len;++i) {
    gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("1", 255, "linear", 3, false);
}
}

{ //Subevents
gdjs.Start_95MangaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TinyGreyButton"), gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1[k] = gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Boss");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Boss", true);
}
}

}


};

gdjs.Start_95MangaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95MangaCode.GDStartMangaObjects1.length = 0;
gdjs.Start_95MangaCode.GDStartMangaObjects2.length = 0;
gdjs.Start_95MangaCode.GDCamRigObjects1.length = 0;
gdjs.Start_95MangaCode.GDCamRigObjects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959501Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959501Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959502Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959502Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959503Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959503Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959504Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959504Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959505Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959505Objects2.length = 0;
gdjs.Start_95MangaCode.GDBlackFadeObjects1.length = 0;
gdjs.Start_95MangaCode.GDBlackFadeObjects2.length = 0;
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.Start_95MangaCode.GDMouseObjects1.length = 0;
gdjs.Start_95MangaCode.GDMouseObjects2.length = 0;

gdjs.Start_95MangaCode.eventsList1(runtimeScene);
gdjs.Start_95MangaCode.GDStartMangaObjects1.length = 0;
gdjs.Start_95MangaCode.GDStartMangaObjects2.length = 0;
gdjs.Start_95MangaCode.GDCamRigObjects1.length = 0;
gdjs.Start_95MangaCode.GDCamRigObjects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959501Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959501Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959502Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959502Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959503Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959503Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959504Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959504Objects2.length = 0;
gdjs.Start_95MangaCode.GDShot_959505Objects1.length = 0;
gdjs.Start_95MangaCode.GDShot_959505Objects2.length = 0;
gdjs.Start_95MangaCode.GDBlackFadeObjects1.length = 0;
gdjs.Start_95MangaCode.GDBlackFadeObjects2.length = 0;
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.Start_95MangaCode.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects1.length = 0;
gdjs.Start_95MangaCode.GDTinyGreyButtonObjects2.length = 0;
gdjs.Start_95MangaCode.GDMouseObjects1.length = 0;
gdjs.Start_95MangaCode.GDMouseObjects2.length = 0;


return;

}

gdjs['Start_95MangaCode'] = gdjs.Start_95MangaCode;
