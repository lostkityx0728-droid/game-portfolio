gdjs.Boss_95DieCode = {};
gdjs.Boss_95DieCode.localVariables = [];
gdjs.Boss_95DieCode.idToCallbackMap = new Map();
gdjs.Boss_95DieCode.GDImageObjects1= [];
gdjs.Boss_95DieCode.GDImageObjects2= [];
gdjs.Boss_95DieCode.GDNewSprite2Objects1= [];
gdjs.Boss_95DieCode.GDNewSprite2Objects2= [];
gdjs.Boss_95DieCode.GDDialog_95951Objects1= [];
gdjs.Boss_95DieCode.GDDialog_95951Objects2= [];
gdjs.Boss_95DieCode.GDNewSprite5Objects1= [];
gdjs.Boss_95DieCode.GDNewSprite5Objects2= [];
gdjs.Boss_95DieCode.GDDialog_95952Objects1= [];
gdjs.Boss_95DieCode.GDDialog_95952Objects2= [];
gdjs.Boss_95DieCode.GDDialog_95953Objects1= [];
gdjs.Boss_95DieCode.GDDialog_95953Objects2= [];
gdjs.Boss_95DieCode.GDDialog_95954Objects1= [];
gdjs.Boss_95DieCode.GDDialog_95954Objects2= [];
gdjs.Boss_95DieCode.GDWhiteCoverObjects1= [];
gdjs.Boss_95DieCode.GDWhiteCoverObjects2= [];


gdjs.Boss_95DieCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog_2"), gdjs.Boss_95DieCode.GDDialog_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialog_3"), gdjs.Boss_95DieCode.GDDialog_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialog_4"), gdjs.Boss_95DieCode.GDDialog_95954Objects1);
gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Boss_95DieCode.GDImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteCover"), gdjs.Boss_95DieCode.GDWhiteCoverObjects1);
{for(var i = 0, len = gdjs.Boss_95DieCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ArrowShake");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TweenArrow");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Swap");
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95952Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95952Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95953Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95953Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95954Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95954Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDWhiteCoverObjects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDWhiteCoverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Start", 0, "linear", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Boss_95DieCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ArrowShake") >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boss_95DieCode.GDNewSprite5Objects1.length;i<l;++i) {
    if ( gdjs.Boss_95DieCode.GDNewSprite5Objects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Boss_95DieCode.GDNewSprite5Objects1[k] = gdjs.Boss_95DieCode.GDNewSprite5Objects1[i];
        ++k;
    }
}
gdjs.Boss_95DieCode.GDNewSprite5Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Boss_95DieCode.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs.Boss_95DieCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDNewSprite5Objects1[i].getBehavior("Tween").addObjectOpacityTween2("1", 50, "linear", 1, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TweenArrow");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TweenArrow") >= 1.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.Boss_95DieCode.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs.Boss_95DieCode.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDNewSprite5Objects1[i].getBehavior("Tween").addObjectOpacityTween2("1", 255, "linear", 0.9, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TweenArrow");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Boss_95DieCode.GDImageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boss_95DieCode.GDImageObjects1.length;i<l;++i) {
    if ( gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").getAnimationName() == "1" ) {
        isConditionTrue_0 = true;
        gdjs.Boss_95DieCode.GDImageObjects1[k] = gdjs.Boss_95DieCode.GDImageObjects1[i];
        ++k;
    }
}
gdjs.Boss_95DieCode.GDImageObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Swap") >= 3;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog_1"), gdjs.Boss_95DieCode.GDDialog_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialog_2"), gdjs.Boss_95DieCode.GDDialog_95952Objects1);
/* Reuse gdjs.Boss_95DieCode.GDImageObjects1 */
{for(var i = 0, len = gdjs.Boss_95DieCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Swap");
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95952Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95952Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95951Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95951Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Boss_95DieCode.GDImageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boss_95DieCode.GDImageObjects1.length;i<l;++i) {
    if ( gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").getAnimationName() == "2" ) {
        isConditionTrue_0 = true;
        gdjs.Boss_95DieCode.GDImageObjects1[k] = gdjs.Boss_95DieCode.GDImageObjects1[i];
        ++k;
    }
}
gdjs.Boss_95DieCode.GDImageObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Swap") >= 3;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog_2"), gdjs.Boss_95DieCode.GDDialog_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialog_3"), gdjs.Boss_95DieCode.GDDialog_95953Objects1);
/* Reuse gdjs.Boss_95DieCode.GDImageObjects1 */
{for(var i = 0, len = gdjs.Boss_95DieCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").setAnimationName("3");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Swap");
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95953Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95953Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95952Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95952Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Image"), gdjs.Boss_95DieCode.GDImageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Boss_95DieCode.GDImageObjects1.length;i<l;++i) {
    if ( gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").getAnimationName() == "3" ) {
        isConditionTrue_0 = true;
        gdjs.Boss_95DieCode.GDImageObjects1[k] = gdjs.Boss_95DieCode.GDImageObjects1[i];
        ++k;
    }
}
gdjs.Boss_95DieCode.GDImageObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Swap") >= 3;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialog_3"), gdjs.Boss_95DieCode.GDDialog_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialog_4"), gdjs.Boss_95DieCode.GDDialog_95954Objects1);
/* Reuse gdjs.Boss_95DieCode.GDImageObjects1 */
{for(var i = 0, len = gdjs.Boss_95DieCode.GDImageObjects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDImageObjects1[i].getBehavior("Animation").setAnimationName("4");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Swap");
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95954Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95954Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Boss_95DieCode.GDDialog_95953Objects1.length ;i < len;++i) {
    gdjs.Boss_95DieCode.GDDialog_95953Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BacktoBoss");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BacktoBoss") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.Boss_95DieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Boss_95DieCode.GDImageObjects1.length = 0;
gdjs.Boss_95DieCode.GDImageObjects2.length = 0;
gdjs.Boss_95DieCode.GDNewSprite2Objects1.length = 0;
gdjs.Boss_95DieCode.GDNewSprite2Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95951Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95951Objects2.length = 0;
gdjs.Boss_95DieCode.GDNewSprite5Objects1.length = 0;
gdjs.Boss_95DieCode.GDNewSprite5Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95952Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95952Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95953Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95953Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95954Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95954Objects2.length = 0;
gdjs.Boss_95DieCode.GDWhiteCoverObjects1.length = 0;
gdjs.Boss_95DieCode.GDWhiteCoverObjects2.length = 0;

gdjs.Boss_95DieCode.eventsList0(runtimeScene);
gdjs.Boss_95DieCode.GDImageObjects1.length = 0;
gdjs.Boss_95DieCode.GDImageObjects2.length = 0;
gdjs.Boss_95DieCode.GDNewSprite2Objects1.length = 0;
gdjs.Boss_95DieCode.GDNewSprite2Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95951Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95951Objects2.length = 0;
gdjs.Boss_95DieCode.GDNewSprite5Objects1.length = 0;
gdjs.Boss_95DieCode.GDNewSprite5Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95952Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95952Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95953Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95953Objects2.length = 0;
gdjs.Boss_95DieCode.GDDialog_95954Objects1.length = 0;
gdjs.Boss_95DieCode.GDDialog_95954Objects2.length = 0;
gdjs.Boss_95DieCode.GDWhiteCoverObjects1.length = 0;
gdjs.Boss_95DieCode.GDWhiteCoverObjects2.length = 0;


return;

}

gdjs['Boss_95DieCode'] = gdjs.Boss_95DieCode;
