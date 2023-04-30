import { Meta, StoryFn } from "@storybook/angular";
import { ButtonComponent } from "src/app/components/button/button.component";

export default {
   title: 'Components/button',
   component: ButtonComponent,
   args: {
    label: 'Primary',
    type: 'primary'
   }
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
    props: args
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    type: 'tertiary'
}

export const Small = Template.bind({});
Small.args = {
    label: 'Button',
    size: 'small'
}

export const Medium = Template.bind({});
Medium.args = {
    label: 'Button',
    size: 'medium'
}

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'large'
}