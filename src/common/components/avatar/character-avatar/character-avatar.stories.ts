import { Meta, Args, Story } from "@storybook/vue3";
import CharacterAvatar from "./character-avatar.vue";

export default {
  title: "Common/Components/Avatar/CharacterAvatar",
  component: CharacterAvatar,
} as Meta<typeof CharacterAvatar>;

const Template:Story= (args: Args) => ({
  components: { CharacterAvatar },
  template: "<character-avatar/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({})
Primary.args = {}
