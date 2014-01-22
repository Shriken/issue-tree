TREE.nodes = [];

TREE.Node = (function() {
	var newNode = function(x, y, radius) {
		return {
			x : x,
			y : y,
			radius : radius,
			children : [],
		}
	};

	return {
		newNode : newNode,
	};
})();
