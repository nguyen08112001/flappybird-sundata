import TextureKeys from '../consts/TextureKeys';
import AnimationKeys from '../consts/AnimationKeys';
import Phaser from "phaser"

export default class BirdBullet extends Phaser.GameObjects.Container {
    private bullet!: Phaser.GameObjects.Sprite
    body! : Phaser.Physics.Arcade.Body

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)
        
        this.bullet = scene.add.sprite(0, 0, TextureKeys.BirdBullet)
            .setOrigin(0.5, 0)
            .setScale(0.05)
        this.add(this.bullet)

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.bullet.displayWidth*0.7, this.bullet.displayHeight*0.7)
        this.body.setOffset(this.bullet.displayWidth-75, -this.bullet.displayHeight+20)
        this.body.setAllowGravity(false)
        this.body.setAccelerationY(0)
        this.body.setGravityY(0)
        this.body.setCollideWorldBounds(true)

        this.body.setVelocityX(1000)
        // this.body.setAccelerationX(1000)
    }


    preUpdate (time: any, delta: any)
    {
    }


    fire (x: number, y: number)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

    }


    reset() {
        this.body.setVelocityX(1000)
        this.setVisible(true)
        this.body.checkCollision.none = false
        this.setActive(true)
    }
} 