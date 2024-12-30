import { describe, expect, it } from "vitest"

import { Model } from "./model"

describe("linear toggle", () => {
  it("1 1 0", () => {
    const puzzle = Model.create("Linear", 3)
    expect(Model.toggle(puzzle, 0).lamps)
      .toStrictEqual([true, true, false])
  })
  it("1 1 1", () => {
    const puzzle = Model.create("Linear", 3)
    expect(Model.toggle(puzzle, 1).lamps)
      .toStrictEqual([true, true, true])
  })
  it("1 1 1 0", () => {
    const puzzle = Model.create("Linear", 4)
    expect(Model.toggle(puzzle, 1).lamps)
      .toStrictEqual([true, true, true, false])
  })
  it("0 1 1 1", () => {
    const puzzle = Model.create("Linear", 4)
    expect(Model.toggle(puzzle, 2).lamps)
      .toStrictEqual([false, true, true, true])
  })
  it("0 1 1", () => {
    const puzzle = Model.create("Linear", 3)
    expect(Model.toggle(puzzle, 2).lamps)
      .toStrictEqual([false, true, true])
  })
})

describe("circular toggle", () => {
  it("⇆ 0 0 -> 1 1 1", () => {
    const puzzle = Model.create("Circular", 3)
    expect(Model.toggle(puzzle, 0).lamps)
      .toStrictEqual([true, true, true])
  })
  it("0 ⇆ 0 -> 1 1 1", () => {
    const puzzle = Model.create("Circular", 3)
    expect(Model.toggle(puzzle, 1).lamps)
      .toStrictEqual([true, true, true])
  })
  it("0 ⇆ 0 0 -> 1 1 1 0", () => {
    const puzzle = Model.create("Circular", 4)
    expect(Model.toggle(puzzle, 1).lamps)
      .toStrictEqual([true, true, true, false])
  })
  it("0 0 ⇆ 0 -> 0 1 1 1", () => {
    const puzzle = Model.create("Circular", 4)
    expect(Model.toggle(puzzle, 2).lamps)
      .toStrictEqual([false, true, true, true])
  })
  it("0 0 ⇆ -> 1 1 1", () => {
    const puzzle = Model.create("Circular", 3)
    expect(Model.toggle(puzzle, 2).lamps)
      .toStrictEqual([true, true, true])
  })
})
