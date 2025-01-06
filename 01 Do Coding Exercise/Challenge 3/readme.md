# Assignments
Test your skills with these loop and conditional challenges:

### Find the Leader

**Task:** Write a program to find the team leader from an array of team members. The leader is identified by having the `isLeader` property set to true.

**Input:** 
- `team` (an array of objects where each object has `name` (a string) and `isLeader` (a boolean))

**Output:** The name of the team leader, or "Leader not found" if no leader exists.

**Example:**

- Input: `team = [{name: "Alice", isLeader: false}, {name: "Bob", isLeader: true}, {name: "Charlie", isLeader: false}]`
- Output: "Bob"

- Input: `team = [{name: "Alice", isLeader: false}, {name: "Charlie", isLeader: false}]`
- Output: "Leader not found"

### Find the Oldest

**Task:** Write a program to find the oldest person from an array of people. The oldest person is identified by having the highest `age` property.

**Input:** 
- `people` (an array of objects where each object has `name` (a string) and `age` (an integer))

**Output:** The name of the oldest person.

**Example:**

- Input: `people = [{name: "Alice", age: 30}, {name: "Bob", age: 40}, {name: "Charlie", age: 35}]`
- Output: "Bob"

- Input: `people = [{name: "Alice", age: 30}, {name: "Charlie", age: 28}]`
- Output: "Alice"

### Find the Most Expensive Item

**Task:** Write a program to find the most expensive item from an array of items. The most expensive item is identified by having the highest `price` property.

**Input:** 
- `items` (an array of objects where each object has an `item` (a string) and `price` (a decimal number))

**Output:** The name of the most expensive item.

**Example:**

- Input: `items = [{item: "Laptop", price: 999.99}, {item: "Phone", price: 699.99}, {item: "Tablet", price: 399.99}]`
- Output: "Laptop"

- Input: `items = [{item: "Phone", price: 699.99}, {item: "Tablet", price: 399.99}]`
- Output: "Phone"
