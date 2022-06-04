import { createContext } from 'react'

const TheamContext = createContext('Dark');

export const TheamProvider = TheamContext.Provider;
export const TheamConsumer = TheamContext.Consumer;