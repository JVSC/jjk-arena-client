import { Meta, Args, Story } from "@storybook/vue3";
import SkillAvatar from "./skill-avatar.vue";

export default {
  title: "Common/Components/Avatar/SkillAvatar",
  component: SkillAvatar,
} as Meta<typeof SkillAvatar>;

const Template:Story= (args: Args) => ({
  components: { SkillAvatar },
  template: "<skill-avatar/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({})
Primary.args = {}
