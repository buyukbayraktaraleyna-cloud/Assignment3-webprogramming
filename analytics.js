// analytics.js

/**
 * Calculates the average grade of all students enrolled in a specific course.
 * @param {Array<Student>} students - Array of Student class instances.
 * @param {number} courseId - The course identifier to calculate average for.
 * @returns {number} Average score rounded to two decimal places, or 0 if none found.
 */
export function calculateClassAverage(students, courseId) {
  const grades = [];

  students.forEach((student) => {
    const courseRecord = student.courses.find((c) => c.courseId === courseId);
    if (courseRecord) {
      grades.push(courseRecord.grade);
    }
  });

  if (grades.length === 0) return 0;
  const total = grades.reduce((acc, curr) => acc + curr, 0);
  return Number((total / grades.length).toFixed(2));
}

/**
 * Identifies the student with the highest overall grade average using Array.prototype.reduce.
 * @param {Array<Student>} students - Array of Student class instances.
 * @returns {Student|null} The top performing student instance.
 */
export function findTopStudent(students) {
  if (students.length === 0) return null;

  return students.reduce((topStudent, currentStudent) => {
    return currentStudent.getAverage() > topStudent.getAverage() ? currentStudent : topStudent;
  });
}

/**
 * Higher-order generic function that filters students based on a custom criteria callback.
 * @param {Array<Student>} students - Array of Student class instances.
 * @param {Function} criteriaFn - Predicate callback that accepts a student and returns boolean.
 * @returns {Array<Student>} Filtered list of students matching the condition.
 */
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}