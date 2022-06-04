import React from "react"

const CurrencyContext = React.createContext('INR')

export const CurrencyProvider = CurrencyContext.Provider;
export const CurrencyConsumer = CurrencyContext.Consumer;
