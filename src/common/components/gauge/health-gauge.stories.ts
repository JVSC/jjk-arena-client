import { Meta, Args, Story } from "@storybook/vue3";
import HealthGauge from "./health-gauge.vue";

export default {
  title: "Common/Components/Gauge/HealthGauge",
  component: HealthGauge,
} as Meta<typeof HealthGauge>;

const Template:Story= (args: Args) => ({
  components: { HealthGauge },
  template: "<health-gauge class='h-3 w-20'/>",
  setup() {
    return args;
  },
});

export const Primary = Template.bind({})
Primary.args = {}
