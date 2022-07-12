import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  //  JavaScript function to download excell format file. Passing to the table customer.component.html 
 printReport(): void {
  //  let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
  // let dataType = 'application/vnd.ms-excel.sheet.binary.macroEnabled.12';
  let dataType = 'application/vnd.ms-excel';
   let tableSelect = document.getElementById('allData');
   let tableHtml = tableSelect?.outerHTML.replace(/ /g, '%20');
   let downloadLink = document.createElement('a'); //creates an tag for the href link
   document.body.appendChild(downloadLink);
   downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
   downloadLink.download = 'customers-report.xls';
   downloadLink.click();
   document.body.removeChild(downloadLink);//removes tag
 }



}
