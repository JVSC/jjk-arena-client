import { Meta, Args, Story } from "@storybook/vue3";
import DefaultNavigation from "./default-navigation.desktop.vue";

export default {
  title: "Common/Components/Navigation/Desktop/DefaultNavigation",
  component: DefaultNavigation,
} as Meta<typeof DefaultNavigation>;

const Template: Story = (args: Args) => ({
  components: { DefaultNavigation },
  template: "<default-navigation/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({});
Primary.args = {};
