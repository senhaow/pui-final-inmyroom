import * as THREE from 'three'

import Experience from './Experience.js'
import vertexShader from './shaders/baked/vertex.glsl'
import fragmentShader from './shaders/baked/fragment.glsl'

export default class CoffeeSteam
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.time = this.experience.time

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'baked',
                expanded: true
            })
        }

        this.setModel()
    }

    setModel()
    {
      this.model = {}

      this.model.mesh = this.resources.items.roomModel.scene

      this.model.dayTexture = this.resources.items.bakedDayTexture
      this.model.dayTexture.encoding = THREE.sRGBEncoding
      this.model.dayTexture.flipY = false

      this.model.nightTexture = this.resources.items.bakedNightTexture
      this.model.nightTexture.encoding = THREE.sRGBEncoding
      this.model.nightTexture.flipY = false

      console.log(this.model.texture)

      this.model.material = new THREE.ShaderMaterial({
        uniforms:
        {
          uDayTexture: {value: this.model.dayTexture},
          uNightTexture: {value: this.model.nightTexture},

          uMix: { value: 0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })

      this.model.mesh.traverse((_child) =>
      {
        if(_child instanceof THREE.Mesh)
        {
          _child.material = this.model.material
        }
      })

      this.scene.add(this.model.mesh)

      if(this.debug)
      {
        this.debugFolder
                .addInput(
                    this.model.material.uniforms.uMix,
                    'value',
                    { label: 'Day_vs_Night', min: 0, max: 1 }
                )
      }

    }
}
