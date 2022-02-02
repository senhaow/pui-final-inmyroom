import * as THREE from 'three'
import Experience from './Experience.js'
import Baked from './Baked.js'
import ImageLoader from './ImageLoader.js'


export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                // this.setDummy()
                this.setBaked()
                this.setImages()
            }
        })
    }

    // setDummy()
    // {
    //     this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
    //
    //     const cube = new THREE.Mesh(
    //         new THREE.BoxGeometry(1, 1, 1),
    //         new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
    //     )
    //     this.scene.add(cube)
    // }

    setBaked()
    {
        this.baked = new Baked()
    }

    setImages(){
      this.images = new ImageLoader()
    }


    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}
