import {
  commentses,
  comments,
  createComments,
  updateComments,
  deleteComments,
} from './commentses'
import type { StandardScenario } from './commentses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('commentses', () => {
  scenario('returns all commentses', async (scenario: StandardScenario) => {
    const result = await commentses()

    expect(result.length).toEqual(Object.keys(scenario.comments).length)
  })

  scenario('returns a single comments', async (scenario: StandardScenario) => {
    const result = await comments({ id: scenario.comments.one.id })

    expect(result).toEqual(scenario.comments.one)
  })

  scenario('creates a comments', async (scenario: StandardScenario) => {
    const result = await createComments({
      input: {
        author: 'String',
        comment: 'String',
        postId: scenario.comments.two.postId,
      },
    })

    expect(result.author).toEqual('String')
    expect(result.comment).toEqual('String')
    expect(result.postId).toEqual(scenario.comments.two.postId)
  })

  scenario('updates a comments', async (scenario: StandardScenario) => {
    const original = await comments({ id: scenario.comments.one.id })
    const result = await updateComments({
      id: original.id,
      input: { author: 'String2' },
    })

    expect(result.author).toEqual('String2')
  })

  scenario('deletes a comments', async (scenario: StandardScenario) => {
    const original = await deleteComments({ id: scenario.comments.one.id })
    const result = await comments({ id: original.id })

    expect(result).toEqual(null)
  })
})
