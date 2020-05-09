import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
public reports = [
  {name: 'Portaj',  year: '2020', areaKey: 'Web Design'},
  {name: 'Project Name',  year: '2020', areaKey: 'Web Design'},
  {name: 'Project Name',  year: '2018', areaKey: 'Machine Learning'},
  {name: 'Project Name',  year: '2016', areaKey: 'AI'},
  {name: 'Project Name',  year: '2019', areaKey: 'Web Design'},
  {name: 'Project Name',  year: '2020', areaKey: 'Database'},
  {name: 'Project Name',  year: '2019', areaKey: 'Mobile'},
  {name: 'Project Name',  year: '2018', areaKey: 'Mobile'},
  {name: 'Project Name',  year: '2020', areaKey: 'AI'},

];
selectedCategorie;
public key;
selectedReports = [];
public categories = [
  {id: 1 , name: 'All', count: this.countCategory('All')},
  {id: 2 , name: 'Web Design', count: this.countCategory('Web Design')},
  {id: 3 , name: 'Machine Learning', count: this.countCategory('Machine Learning')},
  {id: 4 , name: 'Database', count: this.countCategory('Database')},
  {id: 5 , name: 'Mobile', count: this.countCategory('Mobile')},
  {id: 6 , name: 'AI', count: this.countCategory('AI')},
];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.selectedReports = this.reports;
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
    this.selectedCategorie = this.categories.filter(x => x.id  === id);
    this.selectedReports = initialList.filter(x => x.areaKey === this.selectedCategorie[0].name);

  }
}
