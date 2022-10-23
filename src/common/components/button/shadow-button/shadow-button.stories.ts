import { Meta } from "@storybook/vue3";
import ShadowButton from "./shadow-button.vue";

export default {
  title: "Common/Components/Button/ShadowButton",
  component: ShadowButton,
} as Meta<typeof ShadowButton>;

export const Primary = () => ({
  components: { ShadowButton },
  template: '<shadow-button/>',
});

export const PrimaryButtonGroup = () => ({
    components: { ShadowButton },
    template: '<div class="flex"><shadow-button class="mr-4"/><shadow-button class="mr-4"/><shadow-button class="mr-4"/></div>',
  });
