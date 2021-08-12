import {
  Type,
  DBType,
  Field,
  FieldOptions,
  BaseField,
  EnumType,
} from "@snowtop/ent";

// TODO: Not in use currently.
export class Vote extends BaseField implements Field {
  valid(val: any): boolean {
    if (typeof val !== 'string') {
      return false;
    }

    return val.toLowerCase() === "up" || val.toLowerCase() === "down";
  }

  format(val: any): any {
    const type = EnumType({
      name: "VoteType",
      values: ['up', 'down'],
      createEnumType: true, // Uses enum type in Postgres
    });
    return type.format(val);
  }

  type: Type = { dbType: DBType.Enum };
}

export function VoteType(options: FieldOptions): Vote {
  let result = new Vote();
  return Object.assign(result, options);
}