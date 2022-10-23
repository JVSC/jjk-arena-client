import { Meta, Args, Story } from "@storybook/vue3";
import DesktopLayout from "./default-layout.desktop.vue";

export default {
  title: "Common/Layouts/Desktop/DefaultLayout",
  component: DesktopLayout,
} as Meta<typeof DesktopLayout>;

const Template: Story = (args: Args) => ({
  components: { DesktopLayout },
  template: "<desktop-layout/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({});
Primary.args = {};
