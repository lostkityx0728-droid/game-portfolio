gdjs.Game_32StartCode = {};
gdjs.Game_32StartCode.localVariables = [];
gdjs.Game_32StartCode.idToCallbackMap = new Map();
gdjs.Game_32StartCode.GDBackGround_9595ImageObjects1= [];
gdjs.Game_32StartCode.GDBackGround_9595ImageObjects2= [];
gdjs.Game_32StartCode.GDSmallGreyButtonObjects1= [];
gdjs.Game_32StartCode.GDSmallGreyButtonObjects2= [];
gdjs.Game_32StartCode.GDSmallGreyButton2Objects1= [];
gdjs.Game_32StartCode.GDSmallGreyButton2Objects2= [];


gdjs.Game_32StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton2"), gdjs.Game_32StartCode.GDSmallGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32StartCode.GDSmallGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32StartCode.GDSmallGreyButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32StartCode.GDSmallGreyButton2Objects1[k] = gdjs.Game_32StartCode.GDSmallGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.Game_32StartCode.GDSmallGreyButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.Game_32StartCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32StartCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32StartCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32StartCode.GDSmallGreyButtonObjects1[k] = gdjs.Game_32StartCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32StartCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start_Manga", false);
}
}

}


};

gdjs.Game_32StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32StartCode.GDBackGround_9595ImageObjects1.length = 0;
gdjs.Game_32StartCode.GDBackGround_9595ImageObjects2.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButton2Objects2.length = 0;

gdjs.Game_32StartCode.eventsList0(runtimeScene);
gdjs.Game_32StartCode.GDBackGround_9595ImageObjects1.length = 0;
gdjs.Game_32StartCode.GDBackGround_9595ImageObjects2.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButton2Objects1.length = 0;
gdjs.Game_32StartCode.GDSmallGreyButton2Objects2.length = 0;


return;

}

gdjs['Game_32StartCode'] = gdjs.Game_32StartCode;
