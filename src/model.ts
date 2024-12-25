import { default as update } from "immutability-helper"

export type Lamp = boolean
export namespace Lamp {
  export function toggle(lamp: Lamp): Lamp {
    return !lamp
  }
}

export type Model = {
  lamps: Lamp []
}

export namespace Model {
  export function toggle(model: Model, switchIndex: number): Model {
    const lamps = model.lamps
    switch (switchIndex) {
      case 0:
        return update(model, { lamps: {
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
          [switchIndex + 1]: { $set: Lamp.toggle(lamps[switchIndex + 1]) }
        }})
      case model.lamps.length - 1:
        return update(model, { lamps: {
          [switchIndex - 1]: { $set: Lamp.toggle(lamps[switchIndex - 1]) },
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
        }})
      default:
        return update(model, { lamps: {
          [switchIndex - 1]: { $set: Lamp.toggle(lamps[switchIndex - 1]) },
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
          [switchIndex + 1]: { $set: Lamp.toggle(lamps[switchIndex + 1]) }
        }})
    }
  }
}
