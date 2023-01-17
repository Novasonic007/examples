const T = Math.tan;
const C = Math.cos;
const S = Math.sin;

class Example extends Phaser.Scene
{
    frame = 0;
    time = 0;
    x;
    c;

    create ()
    {
        const canvasTexture = this.textures.createCanvas('dwitter', 1920, 1080);

        this.c = canvasTexture.getSourceImage();
        this.x = this.c.getContext('2d');

        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.5);
    }

    update ()
    {
        this.time = this.frame / 60;

        if (this.time * 60 | this.frame - 1 === 0)
        {
            this.time += 0.000001;
        }

        this.frame++;

        this.u(this.time);
    }

    R (r, g, b, a)
    {
        a = a === undefined ? 1 : a;

        return `rgba(${r|0},${g|0},${b|0},${a})`;
    }

    u (t)
    {
        let c = this.c;
        let x = this.x;
        let s;
        let i;

        s = 10; x.drawImage(c,s,0); for (i = 0; i <= c.height; i += s) { x.fillRect(0,i,s,s,x.fillStyle = `hsl(${i / c.height * C(t * i * 3) * 255},100%,50%)`); }
    }
}

const config = {
    width: 960,
    height: 540,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    backgroundColor: '#ffffff',
    scene: Example
};

const game = new Phaser.Game(config);
