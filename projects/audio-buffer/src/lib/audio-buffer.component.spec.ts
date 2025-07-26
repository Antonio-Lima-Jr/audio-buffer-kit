import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBufferComponent } from './audio-buffer.component';

describe('AudioBufferComponent', () => {
  let component: AudioBufferComponent;
  let fixture: ComponentFixture<AudioBufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioBufferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
