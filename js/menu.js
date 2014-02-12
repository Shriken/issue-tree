TREE.Menu = (function() {
	var radius = 10;

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
		return menu;
	}

	 return {
		makeNode : makeNode,
		removeNode : removeNode,
		getMenu : getMenu,
		radius : radius,
	 };
})();
