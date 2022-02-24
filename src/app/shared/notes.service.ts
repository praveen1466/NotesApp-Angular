import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();
  notesCounts: number;

  constructor() { }

  getAll(){
    return this.notes;
  }

  add(note: Note){
    let newLength = this.notes.push(note);
    let index = newLength - 1;
    this.notesCounts = this.notes.length;
    return index;
  }

  get(id: number){
    return this.notes[id];
  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  update(id: number, title: string, body: string){
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }
}
