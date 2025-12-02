# ♞ Knight’s Travails

A project for The Odin Project — Graphs, BFS & Pathfinding
This assignment implements the classic Knight’s Travails problem using Breadth-First Search (BFS).

The goal is to calculate the shortest possible path a knight can take on a standard 8×8 chessboard between any two squares.

A knight moves in L-shaped jumps, and from any position can move to as many as eight new squares.

This transforms the chessboard into a graph where:
- Each square is a vertex
- Each valid knight move is an edge
- The problem becomes a shortest-path search on an unweighted graph
