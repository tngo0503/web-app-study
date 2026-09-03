const courses = [];

function isCourseExist(courseName) {
  return courses.some(eachCourse => eachCourse.courseName === courseName);
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
  courses.find(eachCourse => {
    if(eachCourse.courseName === courseName){
      eachCourse.notes.push(newNote);
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
      return `\tTitle: ${title}\n\tCreate on: ${this.createOn}\n\tNote:\n\n${content}\n`;
    }
  }
};

function getCourse(courseName){
    return courses.find(eachCourse => eachCourse.courseName === courseName);
}

function printNotes(courseName){
    try {
        const course = getCourse(courseName);
        if(course){
            for(let i = 0; i < course.notes.length; ++i){
                console.log(course.notes[i].describe());
            }
        }
        else throw error;
    } catch (error) {
        console.log("Course name does not exist\nprintNote() function in test.js file");
    }
}

// const test = createNote('Intro to database', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"');
// console.log(test.describe());

pushCourse('CS101');
pushNote('CS101', 'Intro to database', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"')

pushCourse('CS100');
pushNote('CS100', 'Intro to database', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"')
pushNote('CS100', 'Intro to programming', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"')
pushNote('CS100', 'Intro to search engine', 'const {name} = courses where {} is destructuring which is a fancy way of just slicing the property "name" of the object "courses"')



printNotes('CS103');

