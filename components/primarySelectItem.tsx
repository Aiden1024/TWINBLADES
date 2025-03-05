import { extendVariants, SelectItem } from "@heroui/react";

const PrimarySelectItem = extendVariants(SelectItem, {
  defaultVariants: {
    color: "primary",
  },
});

export default PrimarySelectItem;