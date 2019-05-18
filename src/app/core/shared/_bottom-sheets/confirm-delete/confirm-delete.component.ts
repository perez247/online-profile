import { Component, OnInit, Inject } from '@angular/core';
import { DeleteService } from '../../_services/delete.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { ToasterService } from '../../_services/toaster.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  details: { name: string, path: string,  key: string };

  constructor(
    private deleteService: DeleteService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomRef: MatBottomSheetRef<ConfirmDeleteComponent>,
    private toaster: ToasterService
    ) { }

  ngOnInit() {
    this.details = this.data as { name: string, path: string, key: string };
  }

  close(event: any) {
    event.preventDefault();
    this.bottomRef.dismiss();
  }

  delete(event: any) {
    event.preventDefault();
    this.deleteService.delete(this.details.path, this.details.key)
    .then(r => this.toaster.success('Deleted successfully'))
    .catch(r => this.toaster.error('Failed to delete'));
  }

}
