import { game, level, Stage } from 'melonjs';
import Fog from '../renderables/fog.js';

class PlayScreen extends Stage {
	/**
	 *  action to perform on state change
	 */
	onResetEvent() {
		game.world.gravity.setZero();

		level.load('map');

		game.world.addChild(new Fog());
	}
}

export default PlayScreen;
