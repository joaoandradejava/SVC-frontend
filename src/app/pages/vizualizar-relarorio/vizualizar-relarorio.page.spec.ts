import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VizualizarRelarorioPage } from './vizualizar-relarorio.page';

describe('VizualizarRelarorioPage', () => {
  let component: VizualizarRelarorioPage;
  let fixture: ComponentFixture<VizualizarRelarorioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VizualizarRelarorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VizualizarRelarorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
