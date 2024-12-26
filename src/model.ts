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
  export function create(lampsCount: number): Model {
    const lamps = new Array(lampsCount)
    for (let i = 0; i < lamps.length; i++) {
      lamps[i] = false
    }
    return {
      lamps
    }
  }

  export function toggle(model: Model, switchIndex: number): Model {
    const lamps = model.lamps
    switch (switchIndex) {
      case 0:
        const next = switchIndex + 1
        return update(model, { lamps: {
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
          [next]: { $set: Lamp.toggle(lamps[next]) }
        }})
      case model.lamps.length - 1:
        const prev = switchIndex - 1
        return update(model, { lamps: {
          [prev]: { $set: Lamp.toggle(lamps[prev]) },
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
        }})
      default: {
        const prev = switchIndex - 1
        const next = switchIndex + 1
        return update(model, { lamps: {
          [prev]: { $set: Lamp.toggle(lamps[prev]) },
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
          [next]: { $set: Lamp.toggle(lamps[next]) }
        }})
      }
    }
  }
}
