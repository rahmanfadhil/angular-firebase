import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

// interface Posts {
//   title: string;
//   content: string;
// }

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @ViewChild('titleInput') title: ElementRef
  @ViewChild('contentInput') content: ElementRef
  posts: Observable<any>
  precentage: Observable<number>

  constructor(private afFirestore: AngularFirestore, private afStorage: AngularFireStorage) { }

  addPost() {
    const title = this.title.nativeElement.value
    const content = this.content.nativeElement.value
    console.log(title, content)
    this.afFirestore.collection('posts').add({ title, content  })
  }

  onDelete(index: number) {
    this.afFirestore.doc('posts/'+index).delete()
      .then(() => console.log('Success delete data'))
      .catch(err => console.log(err))
  }

  uploadFile(event) {
    const upload = this.afStorage.upload('photos', event.target.files[0])
    this.precentage = upload.percentageChanges()
  }

  ngOnInit() {
    this.posts = this.afFirestore.collection('posts').snapshotChanges().pipe(
      map(actions => actions.map((a) => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id
        return { id, ...data }
      }))
    )
    console.log(this.posts)
  }
}
