const enhancer = require('./enhancer.js');

it('should run the test', () => {
	expect(true).toBe(true);
});

describe('enhancer', () => {
	describe('repair function', () => {
		it('should repair an items durability to 100 if durability is less than 100', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 12
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 100,
				enhancement: 12
			};
			expect(enhancer.repair(item)).toStrictEqual(itemOutput);
		});
	});
	describe('enhance fail function', () => {
		it('should reduce durability by 5 if enhancement is < 15', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 12
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 45,
				enhancement: 12
			};
			expect(enhancer.fail(item)).toStrictEqual(itemOutput);
		});
		it('should reduce durability by 10, and not reduce enhancement level if item enhancement is 15 or 16', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 16
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 40,
				enhancement: 16
			};
			expect(enhancer.fail(item)).toStrictEqual(itemOutput);
		});
		it('should reduce durability by 10 and reduce enhancement level by 1 if item enhancement > 16', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 18
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 40,
				enhancement: 17
			};
			expect(enhancer.fail(item)).toStrictEqual(itemOutput);
		});
	});
	describe('enhance succeed function', () => {
		it('should increase the enhancement level by 1 if level < 20', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 12
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 13
			};
			expect(enhancer.succeed(item)).toStrictEqual(itemOutput);
		});
		it('should not increase enhancement level if level >= 20', () => {
			const item = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 20
			};
			const itemOutput = {
				name: 'Mjolnir',
				durability: 50,
				enhancement: 20
			};
			expect(enhancer.succeed(item)).toStrictEqual(itemOutput);
		});
	});
});
