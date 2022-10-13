import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private api:ApiService) { 

    this.fetchdata()
  }

  fetchdata=()=>{
    this.api.view().subscribe(
    
      (data)=>this.Data=data
    )
  }



  Data:any=[]
  ngOnInit(): void {
  }

}
