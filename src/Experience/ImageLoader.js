import * as THREE from 'three'
import Experience from './Experience.js'

export default class CoffeeSteam
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.time = this.experience.time

        this.setModel()
    }

    setModel()
    {
      //background
      const texture1 = this.resources.items.background_image
      const geometry1 = new THREE.BoxGeometry(120,30,.1);
      const material1 = new THREE.MeshBasicMaterial({color:0xffffff, map:texture1});
      material1.transparent = true;
      const cube1 = new THREE.Mesh(geometry1,material1);
      cube1.position.z=-50;
      cube1.position.y=4;
      cube1.position.x=30;
      this.scene.add(cube1)

      //Foreground
      const texture2 = this.resources.items.foreground_image
      const geometry2 = new THREE.BoxGeometry(30,8,.1);
      const material2 = new THREE.MeshBasicMaterial({color:0xffffff, map:texture2});
      material2.transparent = true;
      const cube2 = new THREE.Mesh(geometry2,material2);
      cube2.position.z=-20;
      cube2.position.y=3.5;
      cube2.position.x=0;
      this.scene.add(cube2)

      //midground_image
      const texture3 = this.resources.items.midground_image
      const geometry3 = new THREE.BoxGeometry(60,16,.1);
      const material3 = new THREE.MeshBasicMaterial({color:0xffffff, map:texture3});
      material3.transparent = true;
      const cube3 = new THREE.Mesh(geometry3,material3);
      cube3.position.z=-30;
      cube3.position.y=4;
      cube3.position.x=0;
      this.scene.add(cube3)

      //background cOLOR
      const geometry4 = new THREE.BoxGeometry(120,30,.1);
      const material4 = new THREE.MeshBasicMaterial({color:0xffffff});
      const cube4 = new THREE.Mesh(geometry4,material4);
      cube4.position.z=-100;
      cube4.position.y=10;
      cube4.position.x=-10;
      this.scene.add(cube4)
    }
  }
