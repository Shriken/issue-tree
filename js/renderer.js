TREE.Render = (function() {

	var render = function() {
		var canvas = TREE.canvas,
	    	ctx = TREE.ctx,
	    	nodes = TREE.nodes;
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0,0, canvas.width, canvas.height);
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
		ctx.arc(node.x - windowX, node.y - windowY, node.radius, 0, 2*Math.PI);
		ctx.fill();
	};

	var drawMenu = function(menu, mother) {
		var ctx = TREE.ctx,
			windowX = TREE.Render.windowX,
			windowY = TREE.Render.windowY;

		for (var i = 0; i < menu.length; i++) {
			
		}
	};

	return {
		render : render,
		drawMenu : drawMenu,
	};
})();
