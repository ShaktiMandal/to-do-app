import { TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './main/add/add.component';
import { EditComponent } from './main/edit/edit.component';
import { MainComponent } from './main/main.component';
import { TaskitemComponent } from './main/taskitems/taskitem/taskitem.component';
import { TaskitemsComponent } from './main/taskitems/taskitems.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        EditComponent,
        AddComponent,
        TaskitemsComponent,
        TaskitemComponent
      ],
      imports : [RouterTestingModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TODO-APP'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TODO-APP');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TODO-APP app is running!');
  });
});
