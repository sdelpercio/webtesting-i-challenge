module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	if (item.enhancement >= 20) {
		return { ...item };
	} else {
		item.enhancement += 1;
		return { ...item };
	}
}

function fail(item) {
	if (item.enhancement < 15) {
		item.durability -= 5;
		return { ...item };
	} else if (item.enhancement === 15 || item.enhancement === 16) {
		item.durability -= 10;
		return { ...item };
	} else if (item.enhancement > 16) {
		item.durability -= 10;
		item.enhancement -= 1;
		return { ...item };
	}
}

function repair(item) {
	if (item) {
		item.durability = 100;

		return { ...item };
	} else {
		throw new Error('please add your item to repair');
	}
}

function get(item) {
	return { ...item };
}
