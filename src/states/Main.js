import Platform from 'objects/Platform'
import Player from 'objects/Player'

class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		this.game.stage.backgroundColor = '#111111'

		this.step = -1

		this.aLabel = this.add.text(5, 555, 'A', )
		this.aLabel.addColor("#eee", 0) //red

		this.bLabel = this.add.text(775, 60, 'B', )
		this.bLabel.addColor("#eee", 0) //red
		this.timeLabel = this.add.text(this.game.world.width/2 -60, 10, '', )
		this.timeLabel.addColor("#eee", 0) //red
		this.speed = 0

        this.gameover = false

        this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R)
    	this.rKey.onDown.add(this.restart, this)
    	//this.map = new Map(this.game)

    	this.collisionGroup = this.game.add.group()

    	this.collisionGroup.enableBody = true
    	this.collisionGroup.physicsBodyType = Phaser.Physics.ARCADE

    	this.player = new Player(this.game, 30, 550)
    	this.cursors = this.game.input.keyboard.createCursorKeys()

    	this.level = 1
    	let plat = new Platform(this.game, this.collisionGroup, 200, 590, 0, 0, 600)

	}

	restart() {
		this.game.state.restart()
	}

	endgame() {
		this.gameover = true
	}
	killparticle(part, wall) {
		part.kill()
	}
	update() {
		this.step += 1

		if (this.step % ((this.level * 10) + 100) == 0) {
			let plat = new Platform(this.game, this.collisionGroup, -200, 500, 1, this.level, 9)
			let plat2= new Platform(this.game, this.collisionGroup, 900, 400, -1, this.level, 8)
			let plat3 = new Platform(this.game, this.collisionGroup, -150, 300, 1, this.level, 7)
			let plat4= new Platform(this.game, this.collisionGroup, 990, 200, -1, this.level, 6)
			let plat5 = new Platform(this.game, this.collisionGroup, -130, 100, 1, this.level, 5)
			
		}


		this.hitPlatform = this.game.physics.arcade.collide(this.player.sprite, this.collisionGroup)
		if (this.gameover) {
			return
		}

		this.player.update(this.cursors, this.hitPlatform)
		
//		this.timeUsed.setTime(this.game.time.totalElapsedSeconds());
		this.timeLabel.text = "Level: " + this.level

		if (this.player.sprite.x > 770 && this.player.sprite.y < 80) {
			this.level+=1 
			this.player.sprite.x = 30
			this.player.sprite.y = 550
		}
	}

	
	render() {
//		this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00")
//		this.game.debug.body(this.player.sprite)
	}
}

export default Main