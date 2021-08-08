import { Ent } from "@snowtop/ent";
import { Builder } from "@snowtop/ent/action";

const FakeLogger = {
  log: (msg: String) => console.log(msg),
}

export class EntCreationObserver<T extends Ent> {
  async observe(builder: Builder<T>) {
    if (!builder.editedEnt) {
      return;
    }
    let ent = await builder.editedEnt();
    if (ent) {
      FakeLogger.log(`ent ${builder.ent.name} created with id ${ent.id}`);
    }
  }
}