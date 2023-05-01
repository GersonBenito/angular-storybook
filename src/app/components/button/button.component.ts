import { Component, EventEmitter, Input, Output } from '@angular/core';

// agregar clases dinamicas
// const getStyles = (...args: string[]) => ['button', ...args].filter(Boolean);

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})


export class ButtonComponent {

  @Input() public label: string = 'Button';
  @Input() public type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() public size: 'small' | 'medium' | 'large' = 'small';
  @Input() public typeButton: 'submit' | 'button' = 'button';
  @Output() public onClick = new EventEmitter<Event>();
  // @Output() public onAction: EventEmitter<any> = new EventEmitter();

  // agregar clases dinamicas
  public get classes(): string[] {
    // return getStyles(this.type);
    return ['button', this.type, this.size];
  }

  actionButton(){
    this.onClick.emit();
  }

}


