TREE.setConsts({
	clickedNode : null,
});

TREE.Input = (function() {
	var onClick = function(event) {
		var x = event.offsetX + TREE.windowX,
			y = event.offsetY + TREE.windowY,
			clickedNode = checkNode(TREE.rootNode, x, y);
		console.log(x, y);

		if (clickedNode) {
			TREE.clickedNode = clickedNode;
		} else {
			TREE.clickedNode = null;
		}
	};

	var checkNode = function(node, x, y) {
		var nodeDist = TREE.Node.nodeDist;
		if (nodeDist(node, x, y) < node.radius) {
			return node;
		}
		for (var i = 0; i < node.children.length; i++) {
			var result = checkNode(node.children[i], x, y);
			if (result) {
				return result;
			}
		}
		return null;
	};

	return {
		onClick : onClick,
		checkNode : checkNode,
	}
})();
