TREE.Renderer = (function() {
	var render = function() {
		var canvas = TREE.canvas,
	    	ctx = TREE.ctx,
	    	nodes = TREE.nodes;
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(0,0, canvas.width, canvas.height);
		ctx.clearRect(1,1, canvas.width-2, canvas.height-2);

		drawNode(TREE.rootNode);
	};

	var drawNode = function(node) {
		var ctx = TREE.ctx;

		ctx.arc(node.x, node.y, node.radius, 0, 2*Math.PI);
		ctx.fill();
		for (var i = 0; i < node.children.length; i++) {
			ctx.beginPath();
			ctx.moveTo(node.x, node.y);
			ctx.lineTo(node.children[i].x, node.children[i].y);
			ctx.stroke();
			ctx.closePath();
			drawNode(node.children[i]);
		}
	}

	return {
		render : render,
	};
})();
