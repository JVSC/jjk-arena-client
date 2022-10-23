import { Meta } from "@storybook/vue3";
import AppButton from "./app-button.vue";

export default {
  title: "Common/Components/Button/AppButton",
  component: AppButton,
} as Meta<typeof AppButton>;

export const Primary = () => ({
  components: { AppButton },
  template: '<app-button/>',
});

export const PrimaryButtonGroup = () => ({
    components: { AppButton },
    template: '<div class="flex"><app-button class="mr-4"/><app-button class="mr-4"/><app-button class="mr-4"/></div>',
  });
