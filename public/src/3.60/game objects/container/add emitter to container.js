class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        //  Our container
        const container = this.add.container(400, 300);

        //  Our emitter
        const particles = this.add.particles('lemming');

        const emitter = particles.createEmitter({
            x: 0,
            y: 0,
            lifespan: 2000,
            speed: { min: 200, max: 400 },
            angle: 330,
            gravityY: 300
        });

        container.add(particles);

        //  Rotate the container
        this.tweens.add({
            targets: container,
            angle: 360,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
