import { createContext } from 'react'

export const DataContext = createContext({
  title: '',
  video: {},
  contents: [],
})

export const DataConsumer = DataContext.Consumer
export const DataProvider = DataContext.Provider
