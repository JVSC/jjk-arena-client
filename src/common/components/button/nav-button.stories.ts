import { Meta } from "@storybook/vue3";
import NavButton from "./shadow-button.vue";

export default {
  title: "Common/Components/Button/NavButton",
  component: NavButton,
} as Meta<typeof NavButton>;

export const Primary = () => ({
  components: { NavButton },
  template: '<nav-button/>',
});

