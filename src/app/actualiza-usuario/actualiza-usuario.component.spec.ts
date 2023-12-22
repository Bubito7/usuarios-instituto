import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaUsuarioComponent } from './actualiza-usuario.component';

describe('ActualizaUsuarioComponent', () => {
  let component: ActualizaUsuarioComponent;
  let fixture: ComponentFixture<ActualizaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizaUsuarioComponent]
    });
    fixture = TestBed.createComponent(ActualizaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
