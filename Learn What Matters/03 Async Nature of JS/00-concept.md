## Javascript
- Synchronous
- Single Threaded

## Execution Context
- Execute one line of code at a time
- Each line of code is executed in a separate execution context
- Execution context is created when a script is loaded into the browser
- Execution context is destroyed when the script is finished executing

### Steps:
1. global execution phase
2. memory creation phase
3. execution phase

## Callstack
- Stores the execution context of each function call
- LIFO (Last In First Out) data structure (Memory Heap)
- Each function call is added to the callstack when it is called
- Each function call is removed from the callstack when it is finished executing
---
![alt text](/Learn%20What%20Matters/03%20Async%20Nature%20of%20JS/assets/ss1.png)

###
---
# Asynchronous
## Blocking Code vs Non Blocking Code
- **Blocking Code:** Code that blocks the execution of other code until it is finished executing
    * Read File Sync

- **Non Blocking Code:** Code that does not block the execution of other code until it is finished
    * Read File Async

![alt text](/Learn%20What%20Matters/03%20Async%20Nature%20of%20JS/assets/ss2.png)
----


### Reference:
#### Guru: *Hitesh Choudhary*