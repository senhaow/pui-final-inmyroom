uniform sampler2D uDayTexture_3;
uniform sampler2D uNightTexture_3;
uniform float uMix;

varying vec2 vUv;
#pragma glslify: blend = require(glsl-blend/lighten)


void main()
{
    vec3 dayColor = texture2D(uDayTexture_3, vUv).rgb;
    vec3 nightColor = texture2D(uNightTexture_3, vUv).rgb;
    vec3 bakedColor = mix(dayColor,nightColor,uMix);


    gl_FragColor = vec4(bakedColor,1.0);

}
