# ♞ Knight’s Travails

A project for The Odin Project — Graphs, BFS & Pathfinding
This assignment implements the classic Knight’s Travails problem using Breadth-First Search (BFS).

The goal is to calculate the shortest possible path a knight can take on a standard 8×8 chessboard between any two squares.

A knight moves in L-shaped jumps, and from any position can move to as many as eight new squares.

This transforms the chessboard into a graph where:
- Each square is a vertex
- Each valid knight move is an edge
- The problem becomes a shortest-path search on an unweighted graph

## 🧠 Project Goals
In completing this assignment, you practice:
- Representing a chessboard as a graph
- Applying BFS to find shortest paths
- Using queues, visited sets, and parent mapping
- Reconstructing paths using stored parent references
- Breaking down a real-world problem into algorithms and data structures

## 🚀 Features
- Calculates the shortest sequence of moves a knight needs to reach a target square.
- Validates moves to ensure they stay within the 8×8 grid.
- Uses Breadth-First Search (BFS) to guarantee the shortest path.
- Returns the exact squares visited, in order.
- Allows flexible starting and ending coordinates like [0, 0].

## 🛠️ Possible Future Improvements
- Visual ASCII chessboard output
- GUI or web version
- Allow custom board sizes
- Detect unreachable nodes on non-standard boards

## 📚 What I Learned about this topic
- How BFS guarantees the shortest path in unweighted graphs
- How to treat game boards as implicit graphs
- Importance of visited sets to avoid loops
- Path reconstruction using parent pointers
- Translating real-world movement rules into algorithms

