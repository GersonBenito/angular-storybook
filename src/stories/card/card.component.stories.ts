import { CommonModule } from "@angular/common";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { ButtonComponent } from "src/app/components/button/button.component";
import { CardComponent } from "src/app/components/card/card.component";

const template: Meta<CardComponent> = {
    title: 'Components/Card',
    tags: ['autodocs'],
    component: CardComponent,
    render: (args: CardComponent) => ({props: args}),
    decorators: [
        moduleMetadata({
            declarations: [ButtonComponent],
            imports: [CommonModule]
        })
    ],
    args: {}
};

export default template;
type Story = StoryObj<CardComponent>;

export const cardImage: Story = {
    args: {
        title: 'Card title',
        description: 'card description',
        height: '',
        width: '30rem',
        image: 'https://wwwhatsnew.com/wp-content/uploads/2022/10/Estos-son-los-10-mejores-sistemas-para-pasar-de-texto-a-imagen.jpg',
        showButton: true,
        type: 'card-image'
    }
}

export const cardRegular: Story = {
    args: {
        title: 'Card title',
        description: 'card description',
        height: '',
        width: '30rem',
        showButton: true,
        type: 'regular'
    }
}