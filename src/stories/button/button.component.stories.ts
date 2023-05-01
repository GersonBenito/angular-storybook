import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "src/app/components/button/button.component";

const template: Meta<ButtonComponent> = {
   title: 'Components/button',
   tags: ['autodocs'],
   component: ButtonComponent,
   render: (args: ButtonComponent) => ({props: args}),
   args: {}
};

export default template;
type Story = StoryObj<ButtonComponent>; 

export const Primary: Story = {
    args: {
        label: 'Primary',
        type: 'primary'
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary',
        type: 'secondary'
    }
}

export const Tertiary: Story = {
    args: {
        label: 'Tertiary',
        type: 'tertiary'
    }
}

export const Small: Story = {
    args: {
        label: 'Button',
        size: 'small'
    }
}

export const Medium: Story = {
    args: {
        label: 'Button',
        size: 'medium'
    }
}

export const Large: Story = {
    args: {
        label: 'Button',
        size: 'large'
    }
}