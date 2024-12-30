import { default as update } from "immutability-helper"

export type Lamp = boolean
export namespace Lamp {
  export function toggle(lamp: Lamp): Lamp {
    return !lamp
  }
}

export type PuzzleType = "Linear" | "Circular"

export type Model = {
  type: PuzzleType
  lamps: Lamp []
}

export namespace Model {
  export function create(
    type: PuzzleType,
    lampsCount: number,
  ): Model {
    const lamps = new Array(lampsCount)
    for (let i = 0; i < lamps.length; i++) {
      lamps[i] = false
    }
    return {
      type,
      lamps,
    }
  }

  export function toggle(model: Model, switchIndex: number): Model {
    const lamps = model.lamps
    switch (model.type) {
      case "Linear": {
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
      case "Circular": {
        const lampsCount = lamps.length
        const prev = switchIndex - 1 < 0 ? lampsCount - 1 : switchIndex - 1
        const next = (switchIndex + 1) % lampsCount
        return update(model, { lamps: {
          [prev]: { $set: Lamp.toggle(lamps[prev]) },
          [switchIndex]: { $set: Lamp.toggle(lamps[switchIndex]) },
          [next]: { $set: Lamp.toggle(lamps[next]) }
        }})
      }
    }
  }
}
