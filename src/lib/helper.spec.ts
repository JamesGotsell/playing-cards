import { createDeck } from "./helper"
import { cardData } from "./mocks"

describe("createDeck", () => {
    it("create 52 card", () => {
        const result = createDeck()
        expect(result).toEqual(cardData)
    } )
})