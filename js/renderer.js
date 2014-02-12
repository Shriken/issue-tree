TREE.Render = (function() {

	var render = function() {
		var canvas = TREE.canvas,
	    	ctx = TREE.ctx,
	    	nodes = TREE.nodes;
		ctx.fillStyle = "rgb(0,0,0)";

		// render border
		ctx.fillRect(0, 0, canvas.width, 1);
		ctx.fillRect(0, 0, 1, canvas.height);
		ctx.fillRect(0, canvas.height-1, canvas.width, 1);
		ctx.fillRect(canvas.width-1, 0, 1, canvas.height);

		// clear active screen
		ctx.clearRect(1,1, canvas.width-2, canvas.height-2);

		drawTreeNode(TREE.rootNode);

		if (TREE.clickedNode) {
			drawActiveNode(TREE.clickedNode);
		}
	};

	var drawTreeNode = function(node) {
		var ctx = TREE.ctx,
			windowX = TREE.windowX,
			windowY = TREE.windowY;

		ctx.fillStyle = "rgb(0,0,0)";
		ctx.beginPath();
		ctx.arc(node.x - windowX, node.y - windowY, node.radius, 0, 2*Math.PI);
		ctx.fill();
		for (var i = 0; i < node.children.length; i++) {
			ctx.beginPath();
			ctx.moveTo(node.x - windowX, node.y - windowY);
			ctx.lineTo(node.children[i].x - windowX, node.children[i].y - windowY);
			ctx.stroke();
			ctx.closePath();
			drawNode(node.children[i]);
		}
	};

	var drawActiveNode = function(node) {
		var ctx = TREE.ctx,
			windowX = TREE.windowX,
			windowY = TREE.windowY;

		ctx.fillStyle = "rgb(0,0,255)";
		ctx.beginPath();
		ctx.arc(node.x - windowX, node.y - windowY, node.radius, 0, 2*Math.PI);
		ctx.fill();

		drawMenu(node);
	};

	var drawMenu = function(node) {
		var ctx = TREE.ctx,
			windowX = TREE.windowX,
			windowY = TREE.windowY,
			menu = TREE.Menu.getMenu(node),
			r = node.radius + TREE.Menu.radius + 10;

		for (var i = 0; i < menu.length; i++) {
			var theta = Math.PI*(0.5 - i*1/6);
			drawMenuNode(menu[i], node.x + r * Math.cos(theta) - windowX,
							      node.y + r * Math.sin(theta) - windowY);
		}
	};

	var drawMenuNode = function(node, x, y) {
		// TODO render icon for the nodes
		var ctx = TREE.ctx;

		ctx.fillStyle = "rgb(0,255,0)";
		ctx.beginPath();
		ctx.arc(x, y, TREE.Menu.radius, 0, 2*Math.PI);
		ctx.fill();
	};

	return {
		render : render,
		drawMenu : drawMenu,
	};
})();
