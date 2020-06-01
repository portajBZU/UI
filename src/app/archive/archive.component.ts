import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Archives} from "../../interface/archives";
import {OperationsService} from "../../services/operations.service";
import {SaveAS} from "file-saver"
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  public reports = [
    {name: 'Portaj', year: '2020', areaKey: 'Web Design'},
    {name: 'Project Name', year: '2020', areaKey: 'Web Design'},
    {name: 'Project Name', year: '2018', areaKey: 'Machine Learning'},
    {name: 'Project Name', year: '2016', areaKey: 'AI'},
    {name: 'Project Name', year: '2019', areaKey: 'Web Design'},
    {name: 'Project Name', year: '2020', areaKey: 'Database'},
    {name: 'Project Name', year: '2019', areaKey: 'Mobile'},
    {name: 'Project Name', year: '2018', areaKey: 'Mobile'},
    {name: 'Project Name', year: '2020', areaKey: 'AI'},

  ];
  selectedCategorie;
  selectedReports = [];
  public categories = [
    {id: 1, name: 'All', count: this.countCategory('All')},
    {id: 2, name: 'Web Design', count: this.countCategory('Web Design')},
    {id: 3, name: 'Machine Learning', count: this.countCategory('Machine Learning')},
    {id: 4, name: 'Database', count: this.countCategory('Database')},
    {id: 5, name: 'Mobile', count: this.countCategory('Mobile')},
    {id: 6, name: 'AI', count: this.countCategory('AI')},
  ];

  public key;
  simpleForm: FormGroup;
  constructor(public http: HttpClient, private downloadService: OperationsService ,
              public fb: FormBuilder, private searchService: SearchService) {
    this.getArchive()
    this.simpleForm = fb.group({
      search: ['', Validators.required],
    });
  }

  public report: Archives[] = [];

  ngOnInit() {
    this.selectedReports = this.reports;
  }

  getArchive() {
    return this.http.get<Archives>('http://localhost:3500/uploadArchive/get').subscribe(data => {
      this.report = this.report.concat(data);
      console.log(this.report);
    });
  }

  countCategory(category: string) {
    let info = [];
    if (category === 'All') {
      return this.reports.length;
    } else {
      info = this.reports.filter(x => x.areaKey == category);
      return info.length;
    }
  }

  filterCategories(id: number) {
    if (id == 1) {
      this.selectedReports = this.reports;
      return;
    }
    const initialList = this.reports;
    this.selectedCategorie = this.categories.filter(x => x.id === id);
    this.selectedReports = initialList.filter(x => x.areaKey === this.selectedCategorie[0].name);

  }
  download(id: string){
    console.log(id)
   // this.downloadService.download('archives', id);
    this.downloadFile('archives', id)
  }
  downloadFile(type: string, id: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    this.http.get(`http://localhost:3500/download/${type}/${id}`, { headers: headers, responseType: 'blob' as 'json'}).subscribe(res => {
      console.log(res)
      window.open(window.URL.createObjectURL(res));

    });


  }
  search() {
    this.key= this.simpleForm.value.search;
    let reports = this.searchService.search(this.key)
    console.log(reports)

    //   return this.http.get('http://localhost:3500/search/'+ this.key).subscribe(res =>
    //console.log(res));
  }


}
