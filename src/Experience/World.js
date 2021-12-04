import * as THREE from 'three'
import Experience from './Experience.js'
import Baked from './Baked.js'


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
