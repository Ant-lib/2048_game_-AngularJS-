angular
	.module('Grid', [])
	.factory('TileModel', function() {
		var Tile = function(pos, val) {
			this.x = pos.x;
			this.y = pos.y;
			this.value = val || 2;
		}

		return Tile;
	})
	.service('GridService', function() {
		this.grid = [];
		this.tiles = [];
		this.size = 4;
	});