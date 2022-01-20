import DynamicComponent from "./DynamicComponent";

export default {
    title: 'MyComponents/DynamicComponent',
    component: DynamicComponent,
    argTypes: {
        page: {
            type: { name: 'string', required: false },
            control: { type: 'select' },
            options: ["Home", "Posts", "Archive"]
        }
    }
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DynamicComponent },
    template: '<DynamicComponent @onClick="onClick" v-bind="$props" />'
});

export const DemoFromObj = Template.bind({});
