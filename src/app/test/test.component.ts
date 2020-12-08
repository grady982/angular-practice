import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrdersService } from '../core/orders.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  markdownString = `
## Test Title

I just love **bold text**.
\`code\`

\>  ### Test Blockquotes
\>
\> - test sub content
\> - test sub content
\> content

\`\`\`js
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});
\`\`\`


## TEST IMAGE
![Tux, the Linux mascot](/assets/img/lofibg.jpg)
  `;

  noteList: any[];
  constructor(
    private orderSrv: OrdersService,
    private detector: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  async addNewNote() {
    await this.orderSrv.createNote({
      title: 'TEST_1',
      md: this.markdownString,
      create_time: '2020/12/08',
      category: 'angular'
    });
  }

  async getNotes() {
    this.orderSrv.getNotes().subscribe(collection => {
      this.noteList = collection.docs;
      this.detector.detectChanges();
    });
    // this.orderSrv.getNotes().subscribe(doc => {
    //   if (doc.exists) {
    //     console.log('Document data:', doc.data());
    //   } else {
    //     console.log('No such document!');

    //   }
    // });
  }

}
