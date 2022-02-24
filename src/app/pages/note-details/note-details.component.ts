import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note = new Note;
  noteId: number;
  new: boolean;

  constructor(private router: Router, private noteService: NotesService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if(params.id){
        this.note = this.noteService.get(params.id);
        this.new = false;
      } else {
        this.new = true;
      }

    })
  }

  onSumbit(form: NgForm){
    if(this.new){
      console.log(form);
      this.noteService.add(form.value);
      this.router.navigateByUrl('/');
    } else {
      this.noteService.update(this.noteId, form.value.title, form.value.body);
    }
  }

  cancel(){
    this.router.navigateByUrl('/')
  }
}
