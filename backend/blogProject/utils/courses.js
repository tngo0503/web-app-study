const courses = [];


function createNote(title, content) {
  let formattedDate = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'medium',  // "2:13:48 AM"
    dateStyle: 'full'     // "Tuesday, September 1, 2026"
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



export {courses}; 