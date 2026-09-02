const courses = [];

function isCourseExist(courseName) {
  return courses.some(eachCourse => eachCourse.course === courseName);
}

function pushCourse(courseName) {
  if(isCourseExist(courseName)){
    return false;
  }
  const newCourse = {
    courseName: courseName,
    notes: []
  };
  courses.push(newCourse);
  return true;
}

function pushNote(courseName, title, content){
  if(!isCourseExist(courseName))return false;
  const newNote = createNote(title, content);
  courses.find(course => {
    if(course.courseName === courseName){
      course.notes.push(newNote)
    }
  })
  return true;
}

function createNote(title, content) {
  let formattedDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'medium', // "2:13:48 AM"
    dateStyle: 'full' // "Tuesday, September 1, 2026"
  })
  return {
    title,
    createOn: formattedDate,
    content,
    describe() {
      return `\tTitle: ${title}\n\tCreate on: ${this.createOn}\n\tNote:\n\n${content}`;
    }
  }
};

const test = createNote('Intro to database', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"');
console.log(test.describe());



console.log(isCourseExist())
