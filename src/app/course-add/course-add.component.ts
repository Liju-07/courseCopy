import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  constructor() { }

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

read=()=>{
  let data={
 " courseTitle":this.courseTitle,
  "courseDescription":this.courseDescription,
 " courseDuration":this.courseDuration,
  "courseDate":this.courseDate,
 " courseVenue":this.courseVenue,
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
