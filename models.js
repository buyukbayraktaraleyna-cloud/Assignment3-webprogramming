// models.js

export class Student {
  /**
   * Represents a student in the university system.
   * @param {number} id - Unique identifier for the student.
   * @param {string} name - Student's full name.
   * @param {Array<{courseId: number, grade: number}>} courses - List of enrolled courses.
   */
  constructor(id, name, courses = []) {
    // Define immutable 'id' property (read-only and non-configurable)
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = courses;
  }

  /**
   * Adds a new course record to the student's courses list.
   * @param {number} courseId - ID of the course.
   * @param {number} grade - Grade achieved in the course.
   */
  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  /**
   * Computes and returns the overall average grade across all courses.
   * @returns {number} Average grade or 0 if no courses exist.
   */
  getAverage() {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, item) => sum + item.grade, 0);
    return total / this.courses.length;
  }
}