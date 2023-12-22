import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAtributosComponent } from './usuario-atributos.component';

describe('UsuarioAtributosComponent', () => {
  let component: UsuarioAtributosComponent;
  let fixture: ComponentFixture<UsuarioAtributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioAtributosComponent]
    });
    fixture = TestBed.createComponent(UsuarioAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
