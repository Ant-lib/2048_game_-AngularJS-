describe('Game module', function() {
	describe('GameManager', function() {
		// inject module
		beforeEach(module('Game'));

		// tests below
		var GameManager;
		beforeEach(inject(function(GameManager) {
			gameManager = GameManager;
		}));

		var _gridService;
		beforeEach(module(function($provide) {
			_gridService = {
				anyCellsAvailable: angular.noop,
				tileMathesAvailable: angular.noop
			};

			$provide.value('GridService', _gridService);
		}));

		describe('.movesAvailable', function() {
			it('should report true if there are cells available', function() {
				spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
				expect(gameManager.movesAvailable()).toBeTruthy();
			});
			it('should report true if there are matches available', function() {
			  spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
			  spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
			  expect(gameManager.movesAvailable()).toBeTruthy();
			});
			it('should report false if there are no cells nor matches available', function() {
			  spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
			  spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
			  expect(gameManager.movesAvailable()).toBeFalsy();
			});
		});

	});
});