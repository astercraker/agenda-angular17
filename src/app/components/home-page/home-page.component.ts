import { Component, OnInit } from '@angular/core';
import { ScheduleModule, DayService, EventSettingsModel ,WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { resourceData } from './datasource';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ScheduleModule, NzSelectModule, NzDatePickerModule,FormsModule, NzInputModule, NzButtonModule, NzIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class HomePageComponent implements OnInit{
  public selectedDate: Date = new Date();
  cities: City[] | undefined;
  nameCLient: String | undefined;

  selectedCity: City | undefined;

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

  onChange(result: any): void {
    console.log('onChange: ', result.target.value);
  }
  
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2023, 12, 9, 10, 0),
    EndTime: new Date(2023, 12, 9, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  public views: Array<string> = ['TimelineYear'];
  public allowMultipleOwner: Boolean = true;
  public ownerDataSource: Object[] = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
];
}
