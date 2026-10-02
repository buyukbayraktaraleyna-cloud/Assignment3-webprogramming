// main.js

import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

// Trigger asynchronous fetching from mock database
fetchStudents((rawData) => {
  // Convert plain objects into Student class instances
  const students = rawData.map(
    (item) => new Student(item.id, item.name, item.courses)
  );

  // 1. Test Immutability of the id property
  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");

  // Attempt to overwrite read-only id property
  try {
    students[0].id = 999;
  } catch (err) {
    // Silently caught if running under strict mode
  }

  if (students[0].id === 1) {
    console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);
  } else {
    console.log(`Final ID: ${students[0].id} (Failed: ID changed)\n`);
  }

  // 2. Generate and display the Analytics Report
  console.log("--- Analytics Report ---");

  // Calculate average for Course ID 101
  const avgCourse101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avgCourse101}`);

  // Find and display top student based on overall average
  const topStudent = findTopStudent(students);
  console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`);

  // Filter students enrolled in Course ID 102
  const course102Students = filterStudents(students, (student) =>
    student.courses.some((course) => course.courseId === 102)
  );
  const studentNames = course102Students.map((s) => s.name).join(", ");
  console.log(`Students in Course 102: ${studentNames}`);
});