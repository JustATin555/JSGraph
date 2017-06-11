// The graph object
let Graph = function(nodes, edges) {
	// Main storage
	this.connections = {};

	// Setting up the nodes
	for (let i = 0; i < nodes.length; i++) {
		this.connections[nodes[i]] = {};
	}

	// Setting up the edges between the nodes
	for (let i = 0; i < edges.length; i++) {
		this.connections[edges[i][0]][edges[i][1]] = edges[i][2];
		this.connections[edges[i][1]][edges[i][0]] = edges[i][2];
	}
}

// Creates a new node in the graph
Graph.prototype.newNode = function(name) {
	this.connections[name] = {};
}

// Creates a new edge between two nodes
Graph.prototype.newEdge = function(node1, node2, weight) {
		this.connections[node1][node2] = weight;
		this.connections[node2][node1] = weight;
}

// Removes an edge between two nodes
Graph.prototype.removeEdge = function(node1, node2) {
	delete this.connections[node1][node2];
	delete this.connections[node2][node1];
}

// Removes an existing node from within the graph
Graph.prototype.removeNode = function(node) {
	for (let neighbour in this.connections[node]) {
		this.removeEdge(node, neighbour);
	}
	delete this.connections[node]
}

// New graph
let Justin = new Graph(["A", "B", "C"], [["A", "B", 3], ["B", "C", 7]]);
console.log(Justin);