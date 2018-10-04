function nodeInspector(node, currentDepth = 0, maxDepth = 0, maxSiblings = 0) {
	const childNodeList = node.childNodes;
	let nodeCount = 0;
	let siblingsCount = 0;
	currentDepth++;
	let isLeafNode = true;
	childNodeList.forEach(node => {
		if (node.nodeType === 1) {
			isLeafNode = false;
			siblingsCount++;
			const results = nodeInspector(node, currentDepth, maxDepth, maxSiblings);
			nodeCount += 1 + results.nodeCount;
			maxDepth = Math.max(currentDepth, results.maxDepth);
			maxSiblings = Math.max(siblingsCount, results.maxSiblings);
		}
	});

	if (isLeafNode) {
		currentDepth--;
	}
	return { nodeCount, maxDepth, maxSiblings };
}

function formatOutput(obj) {
	var sz = '';
	Object.entries(obj).forEach((pair) => {
		sz += `${pair[0]  }: ${  pair[1]  }\n`;
	});
	sz +=
		'\n\nGoogle recommendation: https://developers.google.com/web/tools/lighthouse/audits/dom-size';
	return sz;
}

function outputResults(sz) {
	alert(sz);
}

outputResults(formatOutput(nodeInspector(document)));
