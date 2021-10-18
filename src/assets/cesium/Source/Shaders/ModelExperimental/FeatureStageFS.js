//This file is automatically rebuilt by the Cesium build process.
export default "float featureId;\n\
vec2 featureSt;\n\
\n\
void featureStage()\n\
{\n\
    #ifdef FEATURE_ID_TEXTURE\n\
    featureId = floor(texture2D(FEATURE_ID_TEXTURE, FEATURE_ID_TEXCOORD).FEATURE_ID_CHANNEL * 255.0 + 0.5);\n\
    if (featureId < model_featuresLength)\n\
    {\n\
        featureSt = computeSt(featureId);\n\
    }\n\
    // Floating point comparisons can be unreliable in GLSL, so we\n\
    // increment the v_activeFeatureId to make sure it's always greater\n\
    // then the model_featuresLength - a condition we check for in the\n\
    // pick ID, to avoid sampling the pick texture if the feature ID is\n\
    // greater than the number of features.\n\
    else\n\
    {\n\
        featureId = model_featuresLength + 1.0;\n\
    }\n\
    #else\n\
    featureId = v_activeFeatureId;\n\
    featureSt = v_activeFeatureSt;\n\
    #endif\n\
}\n\
";
