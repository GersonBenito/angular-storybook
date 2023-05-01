import { Meta, StoryObj } from "@storybook/angular";
import { CardComponent } from "src/app/components/card/card.component";

const template: Meta<CardComponent> = {
    title: 'Components/Card',
    tags: ['autodocs'],
    component: CardComponent,
    render: (args: CardComponent) => ({props: args}),
    args: {}
};

export default template;
type Story = StoryObj<CardComponent>;

export const cardRegular: Story = {
    args: {
        
    }
}