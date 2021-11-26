//This file is automatically rebuilt by the Cesium build process.
export default "// This stage is only applied for Feature ID vertex attributes.\n\
// If Feature ID textures are present, those are used in the fragment shader.\n\
void featureStage()\n\
{\n\
    float featureId = FEATURE_ID_ATTRIBUTE;\n\
    if (featureId < model_featuresLength)\n\
    {\n\
        v_activeFeatureId = featureId;\n\
        v_activeFeatureSt = computeSt(featureId);\n\
    }\n\
    // Floating point comparisons can be unreliable in GLSL, so we\n\
    // increment the v_activeFeatureId to make sure it's always greater\n\
    // then the model_featuresLength - a condition we check for in the\n\
    // pick ID, to avoid sampling the pick texture if the feature ID is\n\
    // greater than the number of features.\n\
    else\n\
    {\n\
        v_activeFeatureId = model_featuresLength + 1.0;\n\
    }\n\
}\n\
";
