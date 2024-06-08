# My LeetCode Problem Collection

English | [中文](README.zh.md)

## FAQ

### Why use Vite?

Because it’s convenient for setting breakpoints. As a front-end developer, I am more familiar with browser breakpoints than VSCode's debugging tools. Additionally, it saves the trouble of configuring files like `tsconfig.json` and `task.json`.

### How do I write problems?

When working on a problem, simply `import` the corresponding problem in the `main` file. This will allow the problem code to run.  
Before running the code, make sure to execute `npm run dev`. If any dependencies are missing, run `npm i` to install them. No further explanation needed.

### Why did I encapsulate class data structures?

While solving problems, I noticed that some patterns and structures are common across different problems. To avoid redundant code and repeated manual input, I decided to encapsulate these common structures into classes.

### Are the solutions optimized for performance?

I do not focus on performance optimization. My primary goal is to solve the problem correctly according to the requirements. Performance optimizations can make the code less readable, and I prefer clean and readable code. Thus, I aim to solve the problems and pass LeetCode's test cases without prioritizing performance.  
Of course the most important reason is time limitation.

### What does it mean if some problems have multiple commented-out test cases, while others do not?

Typically, the first test case is copied from the problem statement. If there are additional test cases, it usually means that these are the ones where my initial solution failed. You can think of these as my "mistake cases".
