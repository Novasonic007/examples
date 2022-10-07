var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;
var text;
var timedEvent;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    console.log('create');

    image = this.add.image(400, 300, 'einstein');

    text = this.add.text(32, 32);

    timedEvent = this.time.addEvent({ delay: 500, callback: onEvent, callbackScope: this, loop: true });
}

function update ()
{
    text.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4));
}

function onEvent ()
{
    image.rotation += 0.04;
}
