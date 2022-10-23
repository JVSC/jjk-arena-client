import { Meta, Args, Story } from "@storybook/vue3";
import CharacterHero from "./character-hero.vue";

export default {
  title: "Home/Components/CharacterHero",
  component: CharacterHero,
} as Meta<typeof CharacterHero>;

const Template:Story= (args: Args) => ({
  components: { CharacterHero },
  template: "<character-hero/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({})
Primary.args = {}
