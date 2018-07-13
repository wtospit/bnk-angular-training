import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bnk-girl-editor',
  templateUrl: './bnk-girl-editor.component.html',
  styleUrls: ['./bnk-girl-editor.component.css']
})
export class BnkGirlEditorComponent implements OnInit {
  private id: string;

  editorForm: FormGroup;

  constructor(private fb: FormBuilder, private bnk: BnkService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editorForm = this.fb.group({
      _id: '',
      name: ['', Validators.required],
      imgUrl: ['', Validators.required],
      instagramId: ['', Validators.required]
    });

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id !== '') {
      this.bnk.getInfo(this.id).subscribe(data => this.editorForm.setValue(data));
    }
  }

  save() {
    if (this.editorForm.valid) {
      this.bnk.saveInfo(this.editorForm.value).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}
