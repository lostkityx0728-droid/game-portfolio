gdjs.BossCode = {};
gdjs.BossCode.localVariables = [];
gdjs.BossCode.idToCallbackMap = new Map();
gdjs.BossCode.GDBulletObjects1= [];
gdjs.BossCode.GDBulletObjects2= [];
gdjs.BossCode.GDBulletObjects3= [];
gdjs.BossCode.GDLives_9595TallyObjects1= [];
gdjs.BossCode.GDLives_9595TallyObjects2= [];
gdjs.BossCode.GDLives_9595TallyObjects3= [];
gdjs.BossCode.GDGame_9595Over_9595TextObjects1= [];
gdjs.BossCode.GDGame_9595Over_9595TextObjects2= [];
gdjs.BossCode.GDGame_9595Over_9595TextObjects3= [];
gdjs.BossCode.GDfuelObjects1= [];
gdjs.BossCode.GDfuelObjects2= [];
gdjs.BossCode.GDfuelObjects3= [];
gdjs.BossCode.GDGreenDotBarObjects1= [];
gdjs.BossCode.GDGreenDotBarObjects2= [];
gdjs.BossCode.GDGreenDotBarObjects3= [];
gdjs.BossCode.GDCopperRedBarObjects1= [];
gdjs.BossCode.GDCopperRedBarObjects2= [];
gdjs.BossCode.GDCopperRedBarObjects3= [];
gdjs.BossCode.GDBullet_9595BObjects1= [];
gdjs.BossCode.GDBullet_9595BObjects2= [];
gdjs.BossCode.GDBullet_9595BObjects3= [];
gdjs.BossCode.GDExplosionBigObjects1= [];
gdjs.BossCode.GDExplosionBigObjects2= [];
gdjs.BossCode.GDExplosionBigObjects3= [];
gdjs.BossCode.GDWallTopObjects1= [];
gdjs.BossCode.GDWallTopObjects2= [];
gdjs.BossCode.GDWallTopObjects3= [];
gdjs.BossCode.GDWallRightObjects1= [];
gdjs.BossCode.GDWallRightObjects2= [];
gdjs.BossCode.GDWallRightObjects3= [];
gdjs.BossCode.GDShockWaveObjects1= [];
gdjs.BossCode.GDShockWaveObjects2= [];
gdjs.BossCode.GDShockWaveObjects3= [];
gdjs.BossCode.GDFuelFlashFXObjects1= [];
gdjs.BossCode.GDFuelFlashFXObjects2= [];
gdjs.BossCode.GDFuelFlashFXObjects3= [];
gdjs.BossCode.GDExplosion1Objects1= [];
gdjs.BossCode.GDExplosion1Objects2= [];
gdjs.BossCode.GDExplosion1Objects3= [];
gdjs.BossCode.GDShooterBObjects1= [];
gdjs.BossCode.GDShooterBObjects2= [];
gdjs.BossCode.GDShooterBObjects3= [];
gdjs.BossCode.GDBullet_9595AObjects1= [];
gdjs.BossCode.GDBullet_9595AObjects2= [];
gdjs.BossCode.GDBullet_9595AObjects3= [];
gdjs.BossCode.GDShooterAObjects1= [];
gdjs.BossCode.GDShooterAObjects2= [];
gdjs.BossCode.GDShooterAObjects3= [];
gdjs.BossCode.GDSparksObjects1= [];
gdjs.BossCode.GDSparksObjects2= [];
gdjs.BossCode.GDSparksObjects3= [];
gdjs.BossCode.GDBOSS_9595AObjects1= [];
gdjs.BossCode.GDBOSS_9595AObjects2= [];
gdjs.BossCode.GDBOSS_9595AObjects3= [];
gdjs.BossCode.GDmidnightObjects1= [];
gdjs.BossCode.GDmidnightObjects2= [];
gdjs.BossCode.GDmidnightObjects3= [];
gdjs.BossCode.GDSnowObjects1= [];
gdjs.BossCode.GDSnowObjects2= [];
gdjs.BossCode.GDSnowObjects3= [];
gdjs.BossCode.GDSmall_9595StarObjects1= [];
gdjs.BossCode.GDSmall_9595StarObjects2= [];
gdjs.BossCode.GDSmall_9595StarObjects3= [];
gdjs.BossCode.GDPixelHeartBarObjects1= [];
gdjs.BossCode.GDPixelHeartBarObjects2= [];
gdjs.BossCode.GDPixelHeartBarObjects3= [];
gdjs.BossCode.GDMain_9595ShipObjects1= [];
gdjs.BossCode.GDMain_9595ShipObjects2= [];
gdjs.BossCode.GDMain_9595ShipObjects3= [];
gdjs.BossCode.GDLargeAsteroids2Objects1= [];
gdjs.BossCode.GDLargeAsteroids2Objects2= [];
gdjs.BossCode.GDLargeAsteroids2Objects3= [];
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects1= [];
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects2= [];
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects3= [];
gdjs.BossCode.GDWhiteFadeObjects1= [];
gdjs.BossCode.GDWhiteFadeObjects2= [];
gdjs.BossCode.GDWhiteFadeObjects3= [];
gdjs.BossCode.GDBackGroundObjects1= [];
gdjs.BossCode.GDBackGroundObjects2= [];
gdjs.BossCode.GDBackGroundObjects3= [];
gdjs.BossCode.GDHitFlashObjects1= [];
gdjs.BossCode.GDHitFlashObjects2= [];
gdjs.BossCode.GDHitFlashObjects3= [];
gdjs.BossCode.GDTutorialBoxObjects1= [];
gdjs.BossCode.GDTutorialBoxObjects2= [];
gdjs.BossCode.GDTutorialBoxObjects3= [];
gdjs.BossCode.GDTutorialTextObjects1= [];
gdjs.BossCode.GDTutorialTextObjects2= [];
gdjs.BossCode.GDTutorialTextObjects3= [];


gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BossCode.GDBulletObjects1});
gdjs.BossCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "firecooldown") >= 3;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firecooldown");
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects = Hashtable.newFrom({"LargeAsteroids2": gdjs.BossCode.GDLargeAsteroids2Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects = Hashtable.newFrom({"LargeAsteroids2": gdjs.BossCode.GDLargeAsteroids2Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.BossCode.GDLargeAsteroids2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDLargeAsteroids2Objects1 */
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].setPosition(gdjs.random(1280),gdjs.random(720));
}
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects = Hashtable.newFrom({"LargeAsteroids2": gdjs.BossCode.GDLargeAsteroids2Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects = Hashtable.newFrom({"fuel": gdjs.BossCode.GDfuelObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosionBigObjects1Objects = Hashtable.newFrom({"ExplosionBig": gdjs.BossCode.GDExplosionBigObjects1});
gdjs.BossCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BossCode.GDBulletObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects = Hashtable.newFrom({"LargeAsteroids2": gdjs.BossCode.GDLargeAsteroids2Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects = Hashtable.newFrom({"fuel": gdjs.BossCode.GDfuelObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.BossCode.GDExplosion1Objects1});
gdjs.BossCode.mapOf = Hashtable.newFrom({});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1, "Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1, "Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects = Hashtable.newFrom({"FuelFlashFX": gdjs.BossCode.GDFuelFlashFXObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects = Hashtable.newFrom({"fuel": gdjs.BossCode.GDfuelObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects = Hashtable.newFrom({"FuelFlashFX": gdjs.BossCode.GDFuelFlashFXObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects = Hashtable.newFrom({"WallRight": gdjs.BossCode.GDWallRightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects = Hashtable.newFrom({"WallRight": gdjs.BossCode.GDWallRightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects = Hashtable.newFrom({"WallRight": gdjs.BossCode.GDWallRightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.BossCode.GDWallTopObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.BossCode.GDWallTopObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.BossCode.GDWallTopObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BossCode.GDBulletObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBOSS_95959595AObjects1Objects = Hashtable.newFrom({"BOSS_A": gdjs.BossCode.GDBOSS_9595AObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects = Hashtable.newFrom({"FuelFlashFX": gdjs.BossCode.GDFuelFlashFXObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects2Objects = Hashtable.newFrom({"Small_Star": gdjs.BossCode.GDSmall_9595StarObjects2});
gdjs.BossCode.eventsList3 = function(runtimeScene) {

};gdjs.BossCode.eventsList4 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("LoopIndex", variable);
}
gdjs.BossCode.localVariables.push(variables);
}
const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects2);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects2);
gdjs.BossCode.GDSmall_9595StarObjects2.length = 0;


gdjs.BossCode.localVariables[0].getFromIndex(0).setNumber(repeatIndex2);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects2Objects, (( gdjs.BossCode.GDBOSS_9595AObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBOSS_9595AObjects2[0].getPointX("Center")), (( gdjs.BossCode.GDBOSS_9595AObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBOSS_9595AObjects2[0].getPointY("Center")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects2[i].setColor("185;200;230");
}
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects2[i].addForceTowardObject((gdjs.BossCode.GDMain_9595ShipObjects2.length !== 0 ? gdjs.BossCode.GDMain_9595ShipObjects2[0] : null), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)), 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects2[i].rotateTowardObject((gdjs.BossCode.GDMain_9595ShipObjects2.length !== 0 ? gdjs.BossCode.GDMain_9595ShipObjects2[0] : null), 0, runtimeScene);
}
}
}
}
gdjs.BossCode.localVariables.pop();

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects2Objects = Hashtable.newFrom({"Small_Star": gdjs.BossCode.GDSmall_9595StarObjects2});
gdjs.BossCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemyShootCDB") >= 0.02;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 20;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BossCode.GDBOSS_9595AObjects1, gdjs.BossCode.GDBOSS_9595AObjects2);

gdjs.copyArray(runtimeScene.getObjects("ShooterB"), gdjs.BossCode.GDShooterBObjects2);
gdjs.BossCode.GDSmall_9595StarObjects2.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDShooterBObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDShooterBObjects2[i].returnVariable(gdjs.BossCode.GDShooterBObjects2[i].getVariables().getFromIndex(0)).add(10);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects2Objects, (( gdjs.BossCode.GDBOSS_9595AObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBOSS_9595AObjects2[0].getPointX("Head")), (( gdjs.BossCode.GDBOSS_9595AObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDBOSS_9595AObjects2[0].getPointY("Head")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects2[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterBObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterBObjects2[0].getVariables()).getFromIndex(0))), 100, 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects2[i].setAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterBObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterBObjects2[0].getVariables()).getFromIndex(0))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootCDB");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDmidnightObjects1Objects = Hashtable.newFrom({"midnight": gdjs.BossCode.GDmidnightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects2Objects = Hashtable.newFrom({"Snow": gdjs.BossCode.GDSnowObjects2});
gdjs.BossCode.eventsList6 = function(runtimeScene) {

};gdjs.BossCode.eventsList7 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("SnowIndex", variable);
}
gdjs.BossCode.localVariables.push(variables);
}
const repeatCount2 = runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber();
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.BossCode.GDSnowObjects2.length = 0;


gdjs.BossCode.localVariables[0].getFromIndex(0).setNumber(repeatIndex2);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects2Objects, gdjs.randomInRange(0, 1280), 0, "");
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].setColor("200;204;216");
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].getBehavior("Resizable").setSize(12, 12);
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].rotateTowardAngle(gdjs.randomInRange(80, 100), 20, runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].returnVariable(gdjs.BossCode.GDSnowObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(10)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(11))));
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].returnVariable(gdjs.BossCode.GDSnowObjects2[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomInRange(-(8), 8));
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects2[i].resetTimer("drift");
}
}
}
}
gdjs.BossCode.localVariables.pop();

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects = Hashtable.newFrom({"Snow": gdjs.BossCode.GDSnowObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.BossCode.GDWallTopObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects = Hashtable.newFrom({"Snow": gdjs.BossCode.GDSnowObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects = Hashtable.newFrom({"WallRight": gdjs.BossCode.GDWallRightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects = Hashtable.newFrom({"Snow": gdjs.BossCode.GDSnowObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects = Hashtable.newFrom({"FuelFlashFX": gdjs.BossCode.GDFuelFlashFXObjects1});
gdjs.BossCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects2);
gdjs.copyArray(runtimeScene.getObjects("fuel"), gdjs.BossCode.GDfuelObjects2);
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects2[i].rotateTowardObject((gdjs.BossCode.GDMain_9595ShipObjects2.length !== 0 ? gdjs.BossCode.GDMain_9595ShipObjects2[0] : null), 100, runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects2[i].addForceTowardObject((gdjs.BossCode.GDMain_9595ShipObjects2.length !== 0 ? gdjs.BossCode.GDMain_9595ShipObjects2[0] : null), 250, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fuel"), gdjs.BossCode.GDfuelObjects1);
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("1", 1.15, "linear", 0.08, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].getBehavior("Tween").addValueTween("2", 1.15, 0.75, "linear", 0.25, true, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].getBehavior("Tween").addObjectColorHSLTween2("3", 160, true, -(1), -(1), "linear", 0, false);
}
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects2Objects = Hashtable.newFrom({"ShockWave": gdjs.BossCode.GDShockWaveObjects2});
gdjs.BossCode.eventsList9 = function(runtimeScene) {

};gdjs.BossCode.eventsList10 = function(runtimeScene) {

{


const repeatCount2 = 3;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects2);
gdjs.BossCode.GDShockWaveObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects2Objects, (( gdjs.BossCode.GDMain_9595ShipObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects2[0].getPointX("origin")), (( gdjs.BossCode.GDMain_9595ShipObjects2.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects2[0].getPointY("origin")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDShockWaveObjects2.length ;i < len;++i) {
    gdjs.BossCode.GDShockWaveObjects2[i].getBehavior("Tween").addObjectScaleTween3("Expand", 5, "linear", 0.25, true, true);
}
}
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects = Hashtable.newFrom({"ShockWave": gdjs.BossCode.GDShockWaveObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects = Hashtable.newFrom({"LargeAsteroids2": gdjs.BossCode.GDLargeAsteroids2Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.BossCode.GDExplosion1Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects = Hashtable.newFrom({"fuel": gdjs.BossCode.GDfuelObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects = Hashtable.newFrom({"ShockWave": gdjs.BossCode.GDShockWaveObjects1});
gdjs.BossCode.mapOf = Hashtable.newFrom({});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.BossCode.GDExplosion1Objects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects = Hashtable.newFrom({"ShockWave": gdjs.BossCode.GDShockWaveObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects = Hashtable.newFrom({"Sparks": gdjs.BossCode.GDSparksObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1Objects = Hashtable.newFrom({"Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1, "Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1, "Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosionBigObjects1Objects = Hashtable.newFrom({"ExplosionBig": gdjs.BossCode.GDExplosionBigObjects1});
gdjs.BossCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Death") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}
}

}


};gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BossCode.GDBulletObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1, "Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1, "Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects = Hashtable.newFrom({"Sparks": gdjs.BossCode.GDSparksObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.BossCode.GDBulletObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects = Hashtable.newFrom({"Sparks": gdjs.BossCode.GDSparksObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1, "Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1, "Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.BossCode.GDWallTopObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects = Hashtable.newFrom({"Bullet_B": gdjs.BossCode.GDBullet_9595BObjects1, "Bullet_A": gdjs.BossCode.GDBullet_9595AObjects1, "Small_Star": gdjs.BossCode.GDSmall_9595StarObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects = Hashtable.newFrom({"WallRight": gdjs.BossCode.GDWallRightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects = Hashtable.newFrom({"Main_Ship": gdjs.BossCode.GDMain_9595ShipObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDmidnightObjects1Objects = Hashtable.newFrom({"midnight": gdjs.BossCode.GDmidnightObjects1});
gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects = Hashtable.newFrom({"Sparks": gdjs.BossCode.GDSparksObjects1});
gdjs.BossCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.BossCode.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("HitFlash"), gdjs.BossCode.GDHitFlashObjects1);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.BossCode.GDTutorialBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.BossCode.GDTutorialTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "Background Layer", 1);
}
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "Boss Layer", 1);
}
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "UI Layer", 1);
}
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "FX Layer", 1);
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fireRate");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "largeAsteroidTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dash cooldown");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fuelcost");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "mediumAS");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hittime");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BOSSA");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShockWaveCD");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootCDA");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootCDB");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BossAStart");
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].setColor("140;150;170");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Brightness", "brightness", 0.5);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").setEffectStringParameter("Outline", "color", "120;160;220");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").setEffectDoubleParameter("Outline", "thickness", 1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FanPatternCD");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FanWaveCD");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(90);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SnowCD");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SnowPatternCD");
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(40);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(65);
}
{for(var i = 0, len = gdjs.BossCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCopperRedBarObjects1[i].SetMaxValue(16, null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DamageIFrame");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HackFlash");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DeathWhiteout");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("CP_Start");
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "Background Layer", "DamageBW", "opacity", "0");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "Background Layer", "DamageNoise", "noise", "0");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "Background Layer", "DamageBright", "brightness", "0.8");
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(5);
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(0);
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "CP_Start", "");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-futuristic-device-fail-2939.wav", -(1), false, 5, 1);
}
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].getBehavior("Effect").enableEffect("Glitch", false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBackGroundObjects1[i].getBehavior("Effect").enableEffect("OldFilm", false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").setEffectBooleanParameter("Noise", "noise", false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").enableEffect("BossGlitch", false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDHitFlashObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDHitFlashObjects1[i].getBehavior("Tween").addObjectOpacityTween2("0", 0, "linear", 5, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialStart");
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialBoxObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialBoxObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialBoxObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialBoxObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialShow");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialSwap");
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.saveState.hasLoadJustSucceeded(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-futuristic-device-fail-2939.wav", -(1), false, 5, 1);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "preview-silence.wav", 1, false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDGreenDotBarObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDGreenDotBarObjects1[i].IsEmpty(null)) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDGreenDotBarObjects1[k] = gdjs.BossCode.GDGreenDotBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDGreenDotBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 100, 0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.angleBetweenPositions((gdjs.BossCode.GDMain_9595ShipObjects1[i].getPointX("")), (gdjs.BossCode.GDMain_9595ShipObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(1)).setNumber(80);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fuelcost") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) - (1), null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fuelcost");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TutorialStart") >= 1.0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.BossCode.GDTutorialBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.BossCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.BossCode.GDTutorialBoxObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialBoxObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Text").setText("YIXolZ Command calling Falco. It’s been a while since you’ve been on a mission with your ship—have you gotten out of practice?");
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialBoxObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialBoxObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ab", 180, "linear", 0.3, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ab", 255, "linear", 0.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialShow");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-digital-glitch-break-2950.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TutorialShow") >= 3.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.BossCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Text").setText("Cliff has modified your old spaceship a bit; now you can sprint by right-clicking.");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(2);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialShow");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-electric-buzz-glitch-2593.wav", false, 80, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TutorialShow") >= 3.5;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.BossCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Text").setText("He said it looks like they've added some useful new features. Try using the mouse wheel... beep beep");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(3);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TutorialShow");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TutorialShow") >= 2;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialBox"), gdjs.BossCode.GDTutorialBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.BossCode.GDTutorialTextObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-small-electric-glitch-2595.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialBoxObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialBoxObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ab", 0, "linear", 0.3, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDTutorialTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ab", 0, "linear", 0.3, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fireRate") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCopperRedBarObjects1[i].IsFull(null)) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDCopperRedBarObjects1[k] = gdjs.BossCode.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCopperRedBarObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.BossCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects, (( gdjs.BossCode.GDMain_9595ShipObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects1[0].getPointX("Cannon")), (( gdjs.BossCode.GDMain_9595ShipObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects1[0].getPointY("Cannon")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].addPolarForce((( gdjs.BossCode.GDMain_9595ShipObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects1[0].getAngle()), 400, 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].rotateTowardAngle((( gdjs.BossCode.GDMain_9595ShipObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDMain_9595ShipObjects1[0].getAngle()), 0, runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fireRate");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-short-laser-gun-shot-1670.wav", false, 30, 1);
}

{ //Subevents
gdjs.BossCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "largeAsteroidTimer") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19896260);
}
}
if (isConditionTrue_0) {
gdjs.BossCode.GDLargeAsteroids2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects, gdjs.random(1280), gdjs.random(720), "");
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].addPolarForce(gdjs.random(360), gdjs.randomInRange(30, 50), 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "largeAsteroidTimer");
}

{ //Subevents
gdjs.BossCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeAsteroids2"), gdjs.BossCode.GDLargeAsteroids2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
/* Reuse gdjs.BossCode.GDLargeAsteroids2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Lives_Tally"), gdjs.BossCode.GDLives_9595TallyObjects1);
gdjs.BossCode.GDExplosionBigObjects1.length = 0;

gdjs.BossCode.GDfuelObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDLives_9595TallyObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDLives_9595TallyObjects1[i].getBehavior("Text").setText("Lives:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) - (1), null);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "hittime");
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosionBigObjects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.2, null);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).sub(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DamageIFrame");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-8-bit-bomb-explosion-2811.wav", 0, false, 20, 1.2);
}

{ //Subevents
gdjs.BossCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BossCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("LargeAsteroids2"), gdjs.BossCode.GDLargeAsteroids2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBulletObjects1 */
/* Reuse gdjs.BossCode.GDLargeAsteroids2Objects1 */
gdjs.BossCode.GDExplosion1Objects1.length = 0;

gdjs.BossCode.GDfuelObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-short-bass-hit-2299.wav", false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_B"), gdjs.BossCode.GDBullet_9595BObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOf, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBullet_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595BObjects1 */
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects, 0, 0, "");
}
{}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-magic-sparkle-poof-hit-3082.wav", false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dash cooldown") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDMain_9595ShipObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)) == 1) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDMain_9595ShipObjects1[k] = gdjs.BossCode.GDMain_9595ShipObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDMain_9595ShipObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dash cooldown");
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 200, 1);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "dashtime");
}
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) - (2), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "dashtime") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDMain_9595ShipObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)) == 1) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDMain_9595ShipObjects1[k] = gdjs.BossCode.GDMain_9595ShipObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDMain_9595ShipObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 100, 0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("fuel"), gdjs.BossCode.GDfuelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
/* Reuse gdjs.BossCode.GDfuelObjects1 */
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) + (1), null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects, (( gdjs.BossCode.GDfuelObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDfuelObjects1[0].getPointX("")), (( gdjs.BossCode.GDfuelObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDfuelObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fuel"), gdjs.BossCode.GDfuelObjects1);
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].rotate(gdjs.randomFloatInRange(20, 50), runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDGreenDotBarObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDGreenDotBarObjects1[i].IsEmpty(null) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDGreenDotBarObjects1[k] = gdjs.BossCode.GDGreenDotBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDGreenDotBarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDMain_9595ShipObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDMain_9595ShipObjects1[k] = gdjs.BossCode.GDMain_9595ShipObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDMain_9595ShipObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(1))), 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 1000, runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDGreenDotBarObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDGreenDotBarObjects1[i].IsEmpty(null) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDGreenDotBarObjects1[k] = gdjs.BossCode.GDGreenDotBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDGreenDotBarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDMain_9595ShipObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariableNumber(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDMain_9595ShipObjects1[k] = gdjs.BossCode.GDMain_9595ShipObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDMain_9595ShipObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 1000, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallRight"), gdjs.BossCode.GDWallRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
/* Reuse gdjs.BossCode.GDWallRightObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].getBehavior("Bounce").BounceOffHorizontally(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].separateFromObjectsList(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.BossCode.GDWallTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDMain_9595ShipObjects1 */
/* Reuse gdjs.BossCode.GDWallTopObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].getBehavior("Bounce").BounceOffVertically(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects, null);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].separateFromObjectsList(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDGreenDotBarObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDGreenDotBarObjects1[i].IsEmpty(null)) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDGreenDotBarObjects1[k] = gdjs.BossCode.GDGreenDotBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDGreenDotBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].returnVariable(gdjs.BossCode.GDMain_9595ShipObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fireheat");
}
{for(var i = 0, len = gdjs.BossCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCopperRedBarObjects1[i].SetValue(gdjs.BossCode.GDCopperRedBarObjects1[i].Value(null) + (0.2), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);
{for(var i = 0, len = gdjs.BossCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCopperRedBarObjects1[i].SetValue(gdjs.BossCode.GDCopperRedBarObjects1[i].Value(null) - (0.15), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDCopperRedBarObjects1[i].IsFull(null) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDCopperRedBarObjects1[k] = gdjs.BossCode.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCopperRedBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firecooldown");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BossAStart") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].putAround(640, 50, 0, 0);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BossAStart");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "BossAStart");
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Boss_A_Appear", 255, "linear", 5, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("CP_Boss");
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "CP_Boss", "");
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-asteroid-winds-2007.wav", -(1), false, 3, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Tween").exists("Boss_A_Appear") ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19922284);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBOSS_9595AObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].clearForces();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(1);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "preview-silence.wav", 1, true, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BossCode.GDBulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBOSS_95959595AObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariableNumber(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBOSS_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBulletObjects1 */
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].returnVariable(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(1)).sub(2);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].returnVariable(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].resetTimer("HitFlash");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects, (( gdjs.BossCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBulletObjects1[0].getPointX("")), (( gdjs.BossCode.GDBulletObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBulletObjects1[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-bell-sound-with-delay-585.wav", false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariableNumber(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getTimerElapsedTimeInSecondsOrNaN("HitFlash") >= 0.08 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBOSS_9595AObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].setColor("140;150;170");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].returnVariable(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FanPatternCD") >= 0.12;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.randomInRange(40, 140));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FanWaveCD");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FanPatternCD");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FanWaveCD") >= 0.18;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 20;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FanWaveCD");
}

{ //Subevents
gdjs.BossCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariableNumber(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(1)) <= 50 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariableNumber(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(1)) >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(2);
}

{ //Subevents
gdjs.BossCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDBOSS_9595AObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariableNumber(gdjs.BossCode.GDBOSS_9595AObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDBOSS_9595AObjects1[k] = gdjs.BossCode.GDBOSS_9595AObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDBOSS_9595AObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBOSS_9595AObjects1 */
gdjs.BossCode.GDmidnightObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDmidnightObjects1Objects, 620, 80, "");
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 6, 2, 4, null);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(-(1));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-brass-stick-singing-2287.wav", false, 10, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19938260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 5);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BossENDBGM_Swap");
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BossDEATH", 255, "linear", 4, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BossENDBGM_Swap") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDWhiteFadeObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").hasFinished("BossDEATH") ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDWhiteFadeObjects1[k] = gdjs.BossCode.GDWhiteFadeObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDWhiteFadeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == -(1));
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(-(2));
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Boss_Die");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == -(2));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19940948);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LargeAsteroids2"), gdjs.BossCode.GDLargeAsteroids2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fuel"), gdjs.BossCode.GDfuelObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(-(3));
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "preview-silence.wav", 2, false, 10, 1);
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BossDeath", 0, "linear", 2, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDfuelObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDfuelObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 13;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SnowPatternCD") >= 2.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SnowCD");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SnowPatternCD");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SnowCD") >= 0.3;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SnowCD");
}

{ //Subevents
gdjs.BossCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.BossCode.GDSnowObjects1);
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].setY(gdjs.BossCode.GDSnowObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDSnowObjects1[i].getVariables().getFromIndex(0))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].setX(gdjs.BossCode.GDSnowObjects1[i].getX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.BossCode.GDSnowObjects1[i].getVariables().getFromIndex(1))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.BossCode.GDSnowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDSnowObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDSnowObjects1[i].getVariableNumber(gdjs.BossCode.GDSnowObjects1[i].getVariables().getFromIndex(1)) >= 0.25 ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDSnowObjects1[k] = gdjs.BossCode.GDSnowObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDSnowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDSnowObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].returnVariable(gdjs.BossCode.GDSnowObjects1[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomInRange(-(10), 10));
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].resetTimer("drift");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.BossCode.GDSnowObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.BossCode.GDWallTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDSnowObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.BossCode.GDSnowObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallRight"), gdjs.BossCode.GDWallRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDSnowObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SnowPatternCD") >= 1.2;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.BossCode.GDSnowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSnowObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
/* Reuse gdjs.BossCode.GDSnowObjects1 */
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) + (1), null);
}
}
{for(var i = 0, len = gdjs.BossCode.GDSnowObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSnowObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDFuelFlashFXObjects1Objects, (( gdjs.BossCode.GDSnowObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSnowObjects1[0].getPointX("")), (( gdjs.BossCode.GDSnowObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSnowObjects1[0].getPointY("")), "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FuelPull");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FuelPull") >= 0.6;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BossCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.BossCode.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShockWaveCD") >= 0.6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( !(gdjs.BossCode.GDCopperRedBarObjects1[i].IsFull(null)) ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDCopperRedBarObjects1[k] = gdjs.BossCode.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDCopperRedBarObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDCopperRedBarObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShockWaveCD");
}
{for(var i = 0, len = gdjs.BossCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDCopperRedBarObjects1[i].SetValue(20, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-electronic-retro-block-hit-2185.wav", false, 20, 1);
}

{ //Subevents
gdjs.BossCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeAsteroids2"), gdjs.BossCode.GDLargeAsteroids2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ShockWave"), gdjs.BossCode.GDShockWaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDLargeAsteroids2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDLargeAsteroids2Objects1 */
gdjs.BossCode.GDExplosion1Objects1.length = 0;

gdjs.BossCode.GDfuelObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDfuelObjects1Objects, (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointX("")), (( gdjs.BossCode.GDLargeAsteroids2Objects1.length === 0 ) ? 0 :gdjs.BossCode.GDLargeAsteroids2Objects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDLargeAsteroids2Objects1.length ;i < len;++i) {
    gdjs.BossCode.GDLargeAsteroids2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShockWave"), gdjs.BossCode.GDShockWaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects, gdjs.BossCode.mapOf, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.BossCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosion1Objects1Objects, 0, 0, "");
}
{}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShockWave"), gdjs.BossCode.GDShockWaveObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDShockWaveObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
gdjs.BossCode.GDSparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects, (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointX("")), (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-magic-sparkle-poof-hit-3082.wav", false, 10, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemyShootCDB") >= 0.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShooterB"), gdjs.BossCode.GDShooterBObjects1);
gdjs.BossCode.GDBullet_9595BObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDShooterBObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDShooterBObjects1[i].returnVariable(gdjs.BossCode.GDShooterBObjects1[i].getVariables().getFromIndex(0)).add(10);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1Objects, (( gdjs.BossCode.GDShooterBObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDShooterBObjects1[0].getPointX("")), (( gdjs.BossCode.GDShooterBObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDShooterBObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterBObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterBObjects1[0].getVariables()).getFromIndex(0))), 100, 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].setAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterBObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterBObjects1[0].getVariables()).getFromIndex(0))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootCDB");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemyShootCDA") >= 0.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BOSSA") >= 15;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShooterA"), gdjs.BossCode.GDShooterAObjects1);
gdjs.BossCode.GDBullet_9595AObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDShooterAObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDShooterAObjects1[i].returnVariable(gdjs.BossCode.GDShooterAObjects1[i].getVariables().getFromIndex(0)).sub(10);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1Objects, (( gdjs.BossCode.GDShooterAObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDShooterAObjects1[0].getPointX("")), (( gdjs.BossCode.GDShooterAObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDShooterAObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].setColor("255;0;0");
}
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterAObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterAObjects1[0].getVariables()).getFromIndex(0))), 100, 1);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].setAngle(-((gdjs.RuntimeObject.getVariableNumber(((gdjs.BossCode.GDShooterAObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BossCode.GDShooterAObjects1[0].getVariables()).getFromIndex(0)))));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyShootCDA");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_B"), gdjs.BossCode.GDBullet_9595BObjects1);
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBullet_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595BObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
gdjs.BossCode.GDExplosionBigObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDExplosionBigObjects1Objects, (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595AObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595BObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBullet_9595BObjects1[0].getPointX("")) :gdjs.BossCode.GDBullet_9595AObjects1[0].getPointX("")) :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointX("")), (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595AObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595BObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBullet_9595BObjects1[0].getPointY("")) :gdjs.BossCode.GDBullet_9595AObjects1[0].getPointY("")) :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointY("")), "");
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.2, 0, 0.1, null);
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].SetValue(gdjs.BossCode.GDGreenDotBarObjects1[i].Value(null) - (1), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).sub(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "DamageIFrame");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-8-bit-bomb-explosion-2811.wav", 0, false, 20, 1.2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() <= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(1);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "DamageBW", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "DamageNoise", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "DamageBright", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "DamagePixel", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() <= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BOSS_A"), gdjs.BossCode.GDBOSS_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.BossCode.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenDotBar"), gdjs.BossCode.GDGreenDotBarObjects1);
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "", "DamageBW", "opacity", "1");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "", "DamageNoise", "noise", "0.2");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "", "DamageBright", "brightness", "0.65");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "", "DamagePixel", "size", "2");
}
{for(var i = 0, len = gdjs.BossCode.GDGreenDotBarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDGreenDotBarObjects1[i].getBehavior("Effect").enableEffect("Glitch", true);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBackGroundObjects1[i].getBehavior("Effect").enableEffect("OldFilm", true);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").setEffectBooleanParameter("Noise", "noise", true);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBOSS_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBOSS_9595AObjects1[i].getBehavior("Effect").enableEffect("BossGlitch", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "HackFlash") >= 0.15;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "Background Layer", "DamageNoise", "noise", "RandomInRange(0.08,0.16)");
}
{gdjs.evtTools.camera.setLayerEffectStringParameter(runtimeScene, "Background Layer", "DamagePixel", "size", "RandomInRange(2,4)");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HackFlash");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "DamageIFrame") >= 0.02;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("DeathFade", 255, "linear", 0.8, false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDMain_9595ShipObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDMain_9595ShipObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Death");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "mixkit-arcade-video-game-explosion-2810.wav", 0, false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BossCode.GDWhiteFadeObjects1.length;i<l;++i) {
    if ( gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").hasFinished("DeathFade") ) {
        isConditionTrue_0 = true;
        gdjs.BossCode.GDWhiteFadeObjects1[k] = gdjs.BossCode.GDWhiteFadeObjects1[i];
        ++k;
    }
}
gdjs.BossCode.GDWhiteFadeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDWhiteFadeObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").addObjectColorTween2("GOBlack", "0;0;0", "linear", 3, false, false);
}
}

{ //Subevents
gdjs.BossCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BossCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_B"), gdjs.BossCode.GDBullet_9595BObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBulletObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595BObjects1 */
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
gdjs.BossCode.GDSparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects, (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595AObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595BObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBullet_9595BObjects1[0].getPointX("")) :gdjs.BossCode.GDBullet_9595AObjects1[0].getPointX("")) :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointX("")), (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595AObjects1.length === 0 ) ? (( gdjs.BossCode.GDBullet_9595BObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDBullet_9595BObjects1[0].getPointY("")) :gdjs.BossCode.GDBullet_9595AObjects1[0].getPointY("")) :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-magic-sparkle-poof-hit-3082.wav", false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.BossCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
gdjs.BossCode.GDSparksObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects, (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointX("")), (( gdjs.BossCode.GDSmall_9595StarObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDSmall_9595StarObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-magic-sparkle-poof-hit-3082.wav", false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_B"), gdjs.BossCode.GDBullet_9595BObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.BossCode.GDWallTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallTopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBullet_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595BObjects1 */
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_A"), gdjs.BossCode.GDBullet_9595AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_B"), gdjs.BossCode.GDBullet_9595BObjects1);
gdjs.copyArray(runtimeScene.getObjects("Small_Star"), gdjs.BossCode.GDSmall_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallRight"), gdjs.BossCode.GDWallRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDBullet_95959595BObjects1ObjectsGDgdjs_9546BossCode_9546GDBullet_95959595AObjects1ObjectsGDgdjs_9546BossCode_9546GDSmall_95959595StarObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDWallRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BossCode.GDBullet_9595AObjects1 */
/* Reuse gdjs.BossCode.GDBullet_9595BObjects1 */
/* Reuse gdjs.BossCode.GDSmall_9595StarObjects1 */
{for(var i = 0, len = gdjs.BossCode.GDBullet_9595BObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595BObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDBullet_9595AObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDBullet_9595AObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BossCode.GDSmall_9595StarObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDSmall_9595StarObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Ship"), gdjs.BossCode.GDMain_9595ShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("midnight"), gdjs.BossCode.GDmidnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDMain_95959595ShipObjects1Objects, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDmidnightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFade"), gdjs.BossCode.GDWhiteFadeObjects1);
/* Reuse gdjs.BossCode.GDmidnightObjects1 */
gdjs.BossCode.GDSparksObjects1.length = 0;

{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.BossCode.GDWhiteFadeObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDWhiteFadeObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Pass", 255, "linear", 3, false);
}
}
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 2, 0, 2);
}
{for(var i = 0, len = gdjs.BossCode.GDmidnightObjects1.length ;i < len;++i) {
    gdjs.BossCode.GDmidnightObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BossCode.mapOfGDgdjs_9546BossCode_9546GDSparksObjects1Objects, (( gdjs.BossCode.GDmidnightObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDmidnightObjects1[0].getPointX("")), (( gdjs.BossCode.GDmidnightObjects1.length === 0 ) ? 0 :gdjs.BossCode.GDmidnightObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pass");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pass") >= 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game Start");
}
}

}


};

gdjs.BossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BossCode.GDBulletObjects1.length = 0;
gdjs.BossCode.GDBulletObjects2.length = 0;
gdjs.BossCode.GDBulletObjects3.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects1.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects2.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects3.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects1.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects2.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects3.length = 0;
gdjs.BossCode.GDfuelObjects1.length = 0;
gdjs.BossCode.GDfuelObjects2.length = 0;
gdjs.BossCode.GDfuelObjects3.length = 0;
gdjs.BossCode.GDGreenDotBarObjects1.length = 0;
gdjs.BossCode.GDGreenDotBarObjects2.length = 0;
gdjs.BossCode.GDGreenDotBarObjects3.length = 0;
gdjs.BossCode.GDCopperRedBarObjects1.length = 0;
gdjs.BossCode.GDCopperRedBarObjects2.length = 0;
gdjs.BossCode.GDCopperRedBarObjects3.length = 0;
gdjs.BossCode.GDBullet_9595BObjects1.length = 0;
gdjs.BossCode.GDBullet_9595BObjects2.length = 0;
gdjs.BossCode.GDBullet_9595BObjects3.length = 0;
gdjs.BossCode.GDExplosionBigObjects1.length = 0;
gdjs.BossCode.GDExplosionBigObjects2.length = 0;
gdjs.BossCode.GDExplosionBigObjects3.length = 0;
gdjs.BossCode.GDWallTopObjects1.length = 0;
gdjs.BossCode.GDWallTopObjects2.length = 0;
gdjs.BossCode.GDWallTopObjects3.length = 0;
gdjs.BossCode.GDWallRightObjects1.length = 0;
gdjs.BossCode.GDWallRightObjects2.length = 0;
gdjs.BossCode.GDWallRightObjects3.length = 0;
gdjs.BossCode.GDShockWaveObjects1.length = 0;
gdjs.BossCode.GDShockWaveObjects2.length = 0;
gdjs.BossCode.GDShockWaveObjects3.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects2.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects3.length = 0;
gdjs.BossCode.GDExplosion1Objects1.length = 0;
gdjs.BossCode.GDExplosion1Objects2.length = 0;
gdjs.BossCode.GDExplosion1Objects3.length = 0;
gdjs.BossCode.GDShooterBObjects1.length = 0;
gdjs.BossCode.GDShooterBObjects2.length = 0;
gdjs.BossCode.GDShooterBObjects3.length = 0;
gdjs.BossCode.GDBullet_9595AObjects1.length = 0;
gdjs.BossCode.GDBullet_9595AObjects2.length = 0;
gdjs.BossCode.GDBullet_9595AObjects3.length = 0;
gdjs.BossCode.GDShooterAObjects1.length = 0;
gdjs.BossCode.GDShooterAObjects2.length = 0;
gdjs.BossCode.GDShooterAObjects3.length = 0;
gdjs.BossCode.GDSparksObjects1.length = 0;
gdjs.BossCode.GDSparksObjects2.length = 0;
gdjs.BossCode.GDSparksObjects3.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects1.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects2.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects3.length = 0;
gdjs.BossCode.GDmidnightObjects1.length = 0;
gdjs.BossCode.GDmidnightObjects2.length = 0;
gdjs.BossCode.GDmidnightObjects3.length = 0;
gdjs.BossCode.GDSnowObjects1.length = 0;
gdjs.BossCode.GDSnowObjects2.length = 0;
gdjs.BossCode.GDSnowObjects3.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects1.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects2.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects3.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects1.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects2.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects3.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects1.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects2.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects3.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects1.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects2.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects3.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects1.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects2.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects3.length = 0;
gdjs.BossCode.GDWhiteFadeObjects1.length = 0;
gdjs.BossCode.GDWhiteFadeObjects2.length = 0;
gdjs.BossCode.GDWhiteFadeObjects3.length = 0;
gdjs.BossCode.GDBackGroundObjects1.length = 0;
gdjs.BossCode.GDBackGroundObjects2.length = 0;
gdjs.BossCode.GDBackGroundObjects3.length = 0;
gdjs.BossCode.GDHitFlashObjects1.length = 0;
gdjs.BossCode.GDHitFlashObjects2.length = 0;
gdjs.BossCode.GDHitFlashObjects3.length = 0;
gdjs.BossCode.GDTutorialBoxObjects1.length = 0;
gdjs.BossCode.GDTutorialBoxObjects2.length = 0;
gdjs.BossCode.GDTutorialBoxObjects3.length = 0;
gdjs.BossCode.GDTutorialTextObjects1.length = 0;
gdjs.BossCode.GDTutorialTextObjects2.length = 0;
gdjs.BossCode.GDTutorialTextObjects3.length = 0;

gdjs.BossCode.eventsList12(runtimeScene);
gdjs.BossCode.GDBulletObjects1.length = 0;
gdjs.BossCode.GDBulletObjects2.length = 0;
gdjs.BossCode.GDBulletObjects3.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects1.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects2.length = 0;
gdjs.BossCode.GDLives_9595TallyObjects3.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects1.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects2.length = 0;
gdjs.BossCode.GDGame_9595Over_9595TextObjects3.length = 0;
gdjs.BossCode.GDfuelObjects1.length = 0;
gdjs.BossCode.GDfuelObjects2.length = 0;
gdjs.BossCode.GDfuelObjects3.length = 0;
gdjs.BossCode.GDGreenDotBarObjects1.length = 0;
gdjs.BossCode.GDGreenDotBarObjects2.length = 0;
gdjs.BossCode.GDGreenDotBarObjects3.length = 0;
gdjs.BossCode.GDCopperRedBarObjects1.length = 0;
gdjs.BossCode.GDCopperRedBarObjects2.length = 0;
gdjs.BossCode.GDCopperRedBarObjects3.length = 0;
gdjs.BossCode.GDBullet_9595BObjects1.length = 0;
gdjs.BossCode.GDBullet_9595BObjects2.length = 0;
gdjs.BossCode.GDBullet_9595BObjects3.length = 0;
gdjs.BossCode.GDExplosionBigObjects1.length = 0;
gdjs.BossCode.GDExplosionBigObjects2.length = 0;
gdjs.BossCode.GDExplosionBigObjects3.length = 0;
gdjs.BossCode.GDWallTopObjects1.length = 0;
gdjs.BossCode.GDWallTopObjects2.length = 0;
gdjs.BossCode.GDWallTopObjects3.length = 0;
gdjs.BossCode.GDWallRightObjects1.length = 0;
gdjs.BossCode.GDWallRightObjects2.length = 0;
gdjs.BossCode.GDWallRightObjects3.length = 0;
gdjs.BossCode.GDShockWaveObjects1.length = 0;
gdjs.BossCode.GDShockWaveObjects2.length = 0;
gdjs.BossCode.GDShockWaveObjects3.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects1.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects2.length = 0;
gdjs.BossCode.GDFuelFlashFXObjects3.length = 0;
gdjs.BossCode.GDExplosion1Objects1.length = 0;
gdjs.BossCode.GDExplosion1Objects2.length = 0;
gdjs.BossCode.GDExplosion1Objects3.length = 0;
gdjs.BossCode.GDShooterBObjects1.length = 0;
gdjs.BossCode.GDShooterBObjects2.length = 0;
gdjs.BossCode.GDShooterBObjects3.length = 0;
gdjs.BossCode.GDBullet_9595AObjects1.length = 0;
gdjs.BossCode.GDBullet_9595AObjects2.length = 0;
gdjs.BossCode.GDBullet_9595AObjects3.length = 0;
gdjs.BossCode.GDShooterAObjects1.length = 0;
gdjs.BossCode.GDShooterAObjects2.length = 0;
gdjs.BossCode.GDShooterAObjects3.length = 0;
gdjs.BossCode.GDSparksObjects1.length = 0;
gdjs.BossCode.GDSparksObjects2.length = 0;
gdjs.BossCode.GDSparksObjects3.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects1.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects2.length = 0;
gdjs.BossCode.GDBOSS_9595AObjects3.length = 0;
gdjs.BossCode.GDmidnightObjects1.length = 0;
gdjs.BossCode.GDmidnightObjects2.length = 0;
gdjs.BossCode.GDmidnightObjects3.length = 0;
gdjs.BossCode.GDSnowObjects1.length = 0;
gdjs.BossCode.GDSnowObjects2.length = 0;
gdjs.BossCode.GDSnowObjects3.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects1.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects2.length = 0;
gdjs.BossCode.GDSmall_9595StarObjects3.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects1.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects2.length = 0;
gdjs.BossCode.GDPixelHeartBarObjects3.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects1.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects2.length = 0;
gdjs.BossCode.GDMain_9595ShipObjects3.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects1.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects2.length = 0;
gdjs.BossCode.GDLargeAsteroids2Objects3.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects1.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects2.length = 0;
gdjs.BossCode.GDAsteroid_9595_9595_9595FlameObjects3.length = 0;
gdjs.BossCode.GDWhiteFadeObjects1.length = 0;
gdjs.BossCode.GDWhiteFadeObjects2.length = 0;
gdjs.BossCode.GDWhiteFadeObjects3.length = 0;
gdjs.BossCode.GDBackGroundObjects1.length = 0;
gdjs.BossCode.GDBackGroundObjects2.length = 0;
gdjs.BossCode.GDBackGroundObjects3.length = 0;
gdjs.BossCode.GDHitFlashObjects1.length = 0;
gdjs.BossCode.GDHitFlashObjects2.length = 0;
gdjs.BossCode.GDHitFlashObjects3.length = 0;
gdjs.BossCode.GDTutorialBoxObjects1.length = 0;
gdjs.BossCode.GDTutorialBoxObjects2.length = 0;
gdjs.BossCode.GDTutorialBoxObjects3.length = 0;
gdjs.BossCode.GDTutorialTextObjects1.length = 0;
gdjs.BossCode.GDTutorialTextObjects2.length = 0;
gdjs.BossCode.GDTutorialTextObjects3.length = 0;


return;

}

gdjs['BossCode'] = gdjs.BossCode;
