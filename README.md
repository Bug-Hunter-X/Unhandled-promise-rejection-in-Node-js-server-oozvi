# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js server-side code: unhandled promise rejections.  The server simulates an asynchronous operation that randomly fails. Without proper error handling, this leads to crashes or unexpected behavior.

## Bug Description
The provided `bug.js` file contains a simple HTTP server.  The server randomly returns a 200 (OK) or 500 (Internal Server Error) status code after a 1-second delay.  The problem is that the error condition (500 status) is not properly handled, potentially leading to silent failures or crashes depending on the Node.js version and environment.

## Solution
The `bugSolution.js` file shows how to properly handle this situation using either `try...catch` (if you're working with callbacks) or `async/await` with error handling (for promises).  Proper error handling ensures the server gracefully handles failures and prevents unhandled rejections.