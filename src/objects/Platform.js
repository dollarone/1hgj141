class Platform {

	constructor(game, group, x, y, direction, speed, length){
	       this.game = game
	       this.sprite = group.create(x,y, 'tiles')
	       this.sprite.anchor.setTo(0.5, 0.5)
               this.sprite.scale.setTo(length, 1)
               this.direction = direction
	       


               this.sprite.body.velocity.x =(20 + (speed * 40 * this.game.rnd.integerInRange(1, 5))) * direction
        
               this.sprite.body.collideWorldBounds = false
               this.speed = speed
               this.sprite.body.immovable = true
               this.sprite.body.mass = 1000
                this.sprite.body.allowGravity = false
	}


}


export default Platform