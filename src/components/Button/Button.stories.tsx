import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color", onClick: { action: "clicked" } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Entrar",
  onClick: () => alert("clicou"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Entrar",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Entrar",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Entrar",
};
