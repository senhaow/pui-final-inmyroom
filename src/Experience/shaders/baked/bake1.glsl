uniform sampler2D uDayTexture_1;
uniform sampler2D uNightTexture_1;
uniform float uMix;

varying vec2 vUv;
#pragma glslify: blend = require(glsl-blend/lighten)

void main()
{
    vec3 dayColor = texture2D(uDayTexture_1, vUv).rgb;
    vec3 nightColor = texture2D(uNightTexture_1, vUv).rgb;
    vec3 bakedColor = mix(dayColor,nightColor,uMix);


    gl_FragColor = vec4(bakedColor,1.0);

}
