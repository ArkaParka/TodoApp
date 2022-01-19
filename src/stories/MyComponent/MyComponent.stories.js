import MyComponent from './MyComponent.vue';

export default {
    title: 'MyComponents/MyButton',
    component: MyComponent,
    argTypes: {
        title: {
            type: { name: 'string', required: false },
            control: {
                type: 'text',
                required: true,
            },
            defaultValue: 'Hello',
        },
    },
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyComponent },
    template: '<my-component @onClick="onClick" v-bind="$props" />',
});

export const Button = Template.bind({});
Button.args = {

};
