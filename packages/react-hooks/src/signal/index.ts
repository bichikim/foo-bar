import {useReducer} from 'react'

const KIND_COUNT = 1_000_000

const updateReducer = (num: number): number => (num + 1) % KIND_COUNT

export const useSignal = () => {
  const [, setSignal] = useReducer(updateReducer, 0)

  return setSignal
}
