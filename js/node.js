TREE.nodes = [];

TREE.Node = (function() {
	var newNode = function(x, y, radius) {
		return {
			x : x,
			y : y,
			radius : radius,
			children : [],
			parentNode : null,
		}
	};

	var addNode = function(parentNode, childNode) {
		parentNode.children.push(childNode);
		childNode.parentNode = parentNode;
	};

	var rmvNode = function(node) {
		var kids = node.parentNode.children;
		kids.splice(kids.indexOf(node), 1);
	}

	return {
		newNode : newNode,
		addNode : addNode,
		rmvNode : rmvNode,
	};
})();
