const assert = require('assert');
const distancePoints = require('./calculateDistancePoints');
const colors = require('colors');

describe('Distance Points'.yellow, () => {

	describe('HILL NORMAL'.blue, () => {
		
		it('should return a number when jump equals than K point.'.green, () => {
			const actual = distancePoints(98, 'normal', 98);
			
			const expected = 60;
			
			assert.equal(actual, expected);
		});

		it('should return a number when jump shorter than K point.'.green, () => {
			const actual = distancePoints(85, 'normal', 98);

			const expected = 34;

			assert.equal(actual, expected);
		});

		it ('should return a number when jump longer than K point.'.green, () => {
			const actual = distancePoints(108.5, 'normal', 98);

			const expected = 81;

			assert.equal(actual, expected);
		});

	});

	describe('HILL BIG'.blue, () => {
		
		it('should return a number when jump equals than K point.'.green, () => {
			const actual = distancePoints(120, 'big', 120);

			const expected = 60;

			assert.equal(actual, expected);
		});

		it('should return a number when jump shorter than K point.'.green, () => {
			const actual = distancePoints(108, 'big', 120);

			const expected = 38.4;

			assert.equal(actual, expected);
		});

		it('should return a number when jump longer than K point.'.green, () => {
			const actual = distancePoints(141.5, 'big', 120);

			const expected = 98.7;

			assert.equal(actual, expected);
		});
	});

	describe('HILL MAMMOTH'.blue, () => {

		it('should return a number when jump equals than K point.'.green, () => {
			const actual = distancePoints(200, 'mammoth', 200);

			const expected = 120;

			assert.equal(actual, expected);
		});

		it('should return a number when jump shorter than K point.'.green, () => {
			const actual = distancePoints(181.5, 'mammoth', 200);

			const expected = 97.8;

			assert.equal(actual, expected);
		});

		it('should return a number when jump longer than K point.'.green, () => {
			const actual = distancePoints(249, 'mammoth', 200);

			const expected = 178.8;

			assert.equal(actual, expected);
		});
	});

	describe('ALL HILLS'.blue, () => {
		it('should return a string when jump 0m.'.green, () => {
			const actual = distancePoints(0);

			const expected = 'DSQ';

			assert.equal(actual, expected);
		});
	});
});