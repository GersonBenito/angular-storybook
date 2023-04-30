import { Component, Input } from '@angular/core';

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

  // agregar clases dinamicas
  public get classes(): string[] {
    // return getStyles(this.type);
    return ['button', this.type, this.size]
  }

}


