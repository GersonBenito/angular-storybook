import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public title: string = 'title card';
  @Input() public description: string = '';
  @Input() public image: string = '';
  @Input() public showButton: boolean = true;
  @Input() public type: 'regular' | 'card-image' = 'regular';
  @Input() public responsive: boolean = false;
  @Input() public height: string = '';
  @Input() public width: string = '30rem';
  @Input() public action: any;

  public get classes(): string[]{
    return ['card', this.type, this.responsive ? 'responsive' : ''];
  }

  // action(){
  //   console.log('click');
    
  // }

}
