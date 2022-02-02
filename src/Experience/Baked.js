import * as THREE from 'three'
import Experience from './Experience.js'
import vertexShader from './shaders/baked/vertex.glsl'
import fragmentShader_1 from './shaders/baked/bake1.glsl'
import fragmentShader_2 from './shaders/baked/bake2.glsl'
import fragmentShader_3 from './shaders/baked/bake3.glsl'

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
      //Original model
      this.model = {}

      //Loading Meshes
      this.model.mesh1 = this.resources.items.baked1_model.scene
      this.model.mesh2 = this.resources.items.baked2_model.scene


      //Loading Bake1 Texture *****************************
      this.model.baked1_day = this.resources.items.baked1_texture
      this.model.baked1_day.encoding = THREE.sRGBEncoding
      this.model.baked1_day.flipY = false

      this.model.baked1_night = this.resources.items.baked1_texture_night
      this.model.baked1_night.encoding = THREE.sRGBEncoding
      this.model.baked1_night.flipY = false

      //Loading Bake2 Texture *****************************
      this.model.baked2_day = this.resources.items.baked2_texture
      this.model.baked2_day.encoding = THREE.sRGBEncoding
      this.model.baked2_day.flipY = false

      this.model.baked2_night = this.resources.items.baked2_texture_night
      this.model.baked2_night.encoding = THREE.sRGBEncoding
      this.model.baked2_night.flipY = false



      this.model.material_1 = new THREE.ShaderMaterial({
        uniforms:
        {
          uDayTexture_1: {value: this.model.baked1_day},
          uNightTexture_1: {value: this.model.baked1_night},

          uMix: { value: 0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader_1
      })

      this.model.material_2 = new THREE.ShaderMaterial({
        uniforms:
        {
          uDayTexture_2: {value: this.model.baked2_day},
          uNightTexture_2: {value: this.model.baked2_night},

          uMix: { value: 0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader_2
      })


      this.model.mesh1.traverse((_child) =>
      {
        if(_child instanceof THREE.Mesh)
        {
          _child.material = this.model.material_1
        }
      })

      this.model.mesh2.traverse((_child) =>
      {
        if(_child instanceof THREE.Mesh)
        {
          _child.material = this.model.material_2
        }
      })

      this.scene.add(this.model.mesh1)
      this.scene.add(this.model.mesh2)


      if(this.debug)
      {

        this.debugFolder
                .addInput(
                    this.model.material_1.uniforms.uMix,
                    'value',
                    { label: 'Day_vs_Night', min: 0, max: 1 }
                )
      }

    }
}
