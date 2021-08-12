import { ID, Ent } from "@snowtop/ent";
import { Builder } from "@snowtop/ent/action";

export function isBuilder<T extends Ent>(thing: ID | Builder<T>): thing is Builder<T> {
  return (thing as Builder<T>).build !== undefined;
}
