//https://leetcode.com/problems/clone-graph/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let visited = {};

  let dfs = (node) => {
    if (!node) {
      return node;
    }

    if (visited[node.val]) {
        return visited[node.val];
    }

    let copy = new Node(node.val);

    visited[node.val] = copy;

    node.neighbors.forEach((n) => {
      copy.neighbors.push(dfs(n));
    });

    return copy;
  };

  return dfs(node);
};

//DFS
var cloneGraph = function (node, map = new Map()) {
  if (!node) return null;
  if (map.has(node)) return map.get(node);
  const n = new Node(node.val);
  map.set(node, n);
  for (let k of node.neighbors) {
    n.neighbors.push(cloneGraph(k, map));
  }
  return n;
};

//BFS
var cloneGraph = function (node, map = new Map()) {
  if (!node) return null;
  map.set(node, new Node(node.val));
  const queue = [node];
  while (queue.length) {
    const n = queue.shift();
    for (let k of n.neighbors) {
      if (!map.has(k)) {
        map.set(k, new Node(k.val));
        queue.push(k);
      }
      map.get(n).neighbors.push(map.get(k));
    }
  }
  return map.get(node);
};
