import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private cv_path = 'cv/C.V.pdf';

  constructor(private storage: AngularFireStorage) { }

  getCv() {
    return this.storage.ref(this.cv_path).getDownloadURL();
  }
}
