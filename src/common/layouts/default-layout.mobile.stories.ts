import { Meta, Args, Story } from "@storybook/vue3";
import MobileLayout from "./default-layout.mobile.vue";

export default {
  title: "Common/Layouts/Mobile/DefaultLayout",
  component: MobileLayout,
} as Meta<typeof MobileLayout>;

const Template: Story = (args: Args) => ({
  components: { MobileLayout },
  template: "<mobile-layout/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({});
Primary.args = {};
