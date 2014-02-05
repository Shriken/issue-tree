TREE.Menu = (function() {
	// menu options
	var makeNode = {
		action : function(menu, node) {
			var newNode = TREE.Node.newNode();
			TREE.Node.addNode(node, newNode);
			closeMenu(menu);
		},
	};

	var removeNode = {
		action : function(menu, node) {
			TREE.Node.rmvNode(node);
			closeMenu(menu);
		},
	};

	var getMenu = function(node) {
		var rootNode = TREE.rootNode;
		var menu = [makeNode];
		if (node !== rootNode) {
			menu.push(rmvNode);
		}
		return node;
	}
})();
