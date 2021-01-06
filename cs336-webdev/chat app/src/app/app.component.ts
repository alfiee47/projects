
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



interface ChatRecord {
  color: string;
  message: string;
  timestamp;
  user: string;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  user: string;
  color: string;
  message: string;
  chatlist: ChatRecord[];
  chat: AngularFirestoreCollection;




constructor(public db: AngularFirestore){
  db.collection<ChatRecord>('chat', eachDoc => eachDoc.orderBy('timestamp')).valueChanges().subscribe(
   documentRefs => {
   this.chatlist = documentRefs;
   }
 );
  this.chat = db.collection('chat');
  this.getlocalstorage();
}


// creates a new id and stores message to database
  submit(): void{
    if (this.message.length > 0) {
      const id = this.db.createId();
      this.chat.doc(id).set({
        timestamp: new Date(),
        message: this.message,
        color: this.color,
        user: this.user
      });
   }
  }

// sets local story variable
  setlocalstorage(): void {
    localStorage.setItem('name', this.user);
    localStorage.setItem('color', this.color);
  }

  // gets local storage variables
  getlocalstorage(): void{
    this.user =  localStorage.getItem('name');
    this.color = localStorage.getItem('color');
  }
}



