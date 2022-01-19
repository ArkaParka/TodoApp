import TodoItem from './TodoItem.vue';

export default {
    title: 'MyComponents/TodoItem',
    component: TodoItem,
    argTypes: {
        index: {
            control: {
                type: 'number',
            },
        },
        todo: {
            id: 1,
            title: 'todo item',
            completed: false
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TodoItem },
    template: '<todo-item @onClick="onClick" v-bind="$props" />'
})

export const DoneTodoItem = Template.bind({});
DoneTodoItem.args = {
    index: 0,
    todo: {
        id: 1,
        title: 'todo item',
        completed: true
    },
};

export const NotDoneTodoItem = Template.bind({});
NotDoneTodoItem.args = {
    index: 0,
    todo: {
        id: 1,
        title: 'todo item',
        completed: false
    },
};
