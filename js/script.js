var TREE = {};
TREE.setup = function() {
	TREE.canvas = document.getElementById("canvas");
	TREE.ctx = canvas.getContext("2d");
	var height = canvas.height,
		width = canvas.width;

	TREE.rootNode = TREE.Node.newNode(width/2, height/2, 20);
	TREE.rootNode.children.push(TREE.Node.newNode(width/2 + 40, height/2 + 40, 10));
	TREE.rootNode.children.push(TREE.Node.newNode(width/2 - 40, height/2 + 40, 10));
	TREE.rootNode.children.push(TREE.Node.newNode(width/2 + 40, height/2 - 40, 10));
	TREE.rootNode.children.push(TREE.Node.newNode(width/2 - 40, height/2 - 40, 10));
	for (var i = 0; i < TREE.rootNode.children.length; i++) {
		var child = TREE.rootNode.children[i];
		var x = (child.x - width/2) * 1.5 + width/2;
		var y = (child.y - height/2) * 1.5 + height/2;
		var r = child.radius / 2;
		child.children.push(TREE.Node.newNode(x, y, r));
	}
}

TREE.run = function() {
	TREE.Renderer.render();

}

// With thanks to Wolfenstein3D-browser
TREE.setConsts = function(C) {

    for (var a in C) {
        if (C.hasOwnProperty(a) && !(a in TREE)) {
            TREE[a] = C[a];
        }
    }
}

//If v is undefined, return d, else return v
TREE.defaultTo = function(v, d) {

    return typeof v != "undefined" ? v : d;
}


window.onload = function() {
	TREE.setup();
	TREE.run();
};
