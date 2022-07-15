import TextureKeys from "../consts/TextureKeys";
import BirdBullet from "./BirdBullet";

export default class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene: Phaser.Scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 5,
            key: TextureKeys.BirdBullet,
            active: false,
            visible: false,
            classType: BirdBullet
        });
    }

    fireBullet (x: number, y: number)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}
