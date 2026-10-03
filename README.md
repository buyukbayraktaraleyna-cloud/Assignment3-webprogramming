# University Course Management System

A JavaScript application modeling a university grading and analytics workflow using asynchronous callbacks, ES6 classes, immutable object property descriptors, and higher-order array manipulations.

## File Organization
- `models.js`: Defines the `Student` class where the `id` field is set as strictly read-only and non-configurable using `Object.defineProperty`.
- `database.js`: Simulates an asynchronous server database call using `setTimeout` with a 2-second latency to deliver raw student data via callback.
- `analytics.js`: Contains helper calculation functions (`calculateClassAverage`, `findTopStudent`, `filterStudents`) implemented with modern array methods (`reduce`, `filter`, `find`).
- `main.js`: Serves as the primary entry point to orchestrate asynchronous data fetching, model instantiation, immutability testing, and report generation.

## Challenges Faced
- **Enforcing Property Immutability:** Implementing `Object.defineProperty` to ensure the student `id` property remains strictly read-only (`writable: false, configurable: false`) without mutating during assignment attempts.
- **Asynchronous Flow Management:** Managing application flow strictly using asynchronous callbacks and `setTimeout` rather than Promises or async/await, ensuring proper order of execution.
- **Dynamic Array Reductions:** Utilizing `Array.prototype.reduce` cleanly to determine top performers across dynamically computed student grade averages.
- **Discrepancy in Prompt Sample Output:** In the assignment description prompt, the mock data assigns Ali grades of 90 and 85 (average: 87.5), while Zeynep receives 70 and 95 (average: 82.5). The mathematical logic in `findTopStudent` accurately identifies Ali as the top student (87.5). The sample output in the prompt displaying Zeynep as the top student appears to be a typo/inconsistency in the assignment specification.