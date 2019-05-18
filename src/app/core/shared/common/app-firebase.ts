import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { map, finalize } from 'rxjs/operators';
import { Display } from './display';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../state-management/root/root-store';
import { UIActionConstant } from '../../state-management/ui/ui-action-constants';

export class AppFireBase {
    constructor(private ngDb: AngularFireDatabase, private path: string, private redux: NgRedux<IAppState>) {
     }

    protected saveData(data, key?) {
      data = Display.jsonSanitize(data);
      delete data.key;
      if (key) {
        return this.ngDb.object(this.path + key).update(data).then(e => true).catch(e => {throw new Error(); });
      }
      return this.ngDb.list(this.path).push(data).then(e => true, e => {throw new Error(); });
    }

    getEntity() {
        return this.ngDb.object(this.path).valueChanges()
        .pipe(map((data) => {
          this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: false} );
          return data;
        }));
    }

    public getAll() {
      return this.ngDb.list(this.path).snapshotChanges()
      .pipe(map(exp => {
        this.redux.dispatch( {type: UIActionConstant.LOADING_RIGHT_CONTENT, loading: false} );

        return exp.map(c => ({ key: c.payload.key, ...c.payload.val()}) );
        // console.log('hello');
        })
      );
    }

    protected deleteData(path: string, key: string) {
      return this.ngDb.object(path + key).remove().then(e => true).catch(e => {throw new Error(); });
    }

    updateAll(data) {
      data = Display.jsonSanitize(data);
      return this.ngDb.object(this.path).update(data).then(e => true).catch(e => {throw new Error(); });
    }
}
