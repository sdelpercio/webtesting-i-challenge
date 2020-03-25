module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	return { ...item };
}

function fail(item) {
	return { ...item };
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
