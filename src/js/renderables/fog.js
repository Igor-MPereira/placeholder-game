import {
	CanvasRenderer,
	Color,
	Ellipse,
	game,
	Renderable,
	Sprite,
	Vector2d
} from 'melonjs';

export default class Fog extends Sprite {
	constructor() {
		super(0, 0, {
			image: 'Fog'
		});
	}

	/**
	 *
	 * @param {CanvasRenderer} renderer
	 */
	draw(renderer) {
		renderer.save();
		renderer.setColor(new Color(0, 0, 0, 1));
		console.log(game.viewport);
		// renderer.fillRect(0, 0, 1958, 1220);
		renderer.restore();
	}
}
