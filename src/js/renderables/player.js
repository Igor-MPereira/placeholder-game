import { Body, game, input, Rect, Sprite } from 'melonjs';

class PlayerEntity extends Sprite {
	constructor(x, y, settings) {
		super(x, y, {
			...settings,
			frameheight: 32,
			framewidth: 23,
			image: 'mainPlayer'
		});

		this.body = new Body(this, new Rect(0, 0, 23, 32));

		this.body.setMaxVelocity(5, 5);
		this.body.setFriction(0.3, 0.3);

		game.viewport.follow(this, game.viewport.AXIS.BOTH);

		input.bindKey(input.KEY.LEFT, 'left');
		input.bindKey(input.KEY.RIGHT, 'right');
		input.bindKey(input.KEY.UP, 'up');
		input.bindKey(input.KEY.DOWN, 'down');

		this.addAnimation('walk_down', [0]);
		this.addAnimation('walk_left', [4]);
		this.addAnimation('walk_right', [8]);
		this.addAnimation('walk_up', [12]);

		this.setCurrentAnimation('walk_down');
	}

	update(dt) {
		if (input.isKeyPressed('up')) {
			this.body.force.y = -this.body.maxVel.y;

			if (!this.isCurrentAnimation('walk_up'))
				this.setCurrentAnimation('walk_up');
		} else if (input.isKeyPressed('down')) {
			this.body.force.y = this.body.maxVel.y;

			if (!this.isCurrentAnimation('walk_down'))
				this.setCurrentAnimation('walk_down');
		} else this.body.force.y = 0;

		if (input.isKeyPressed('left')) {
			this.body.force.x = -this.body.maxVel.x;

			if (!this.isCurrentAnimation('walk_left') && this.body.vel.y === 0)
				this.setCurrentAnimation('walk_left');
		} else if (input.isKeyPressed('right')) {
			this.body.force.x = this.body.maxVel.x;

			if (!this.isCurrentAnimation('walk_right') && this.body.vel.y === 0)
				this.setCurrentAnimation('walk_right');
		} else this.body.force.x = 0;

		if (this.body.vel.x !== 0 || this.body.vel.y !== 0) {
			super.update(dt);
			return true;
		}
	}

	/**
	 * colision handler
	 * (called when colliding with other objects)
	 */
	onCollision(response, other) {
		// Make all other objects solid
		return true;
	}
}

export default PlayerEntity;
