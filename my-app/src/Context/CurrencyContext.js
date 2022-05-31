/**
 * 1. Create context
 * 2. Create provider
 * 3. Create consumer
 */
import React from "react";

const CurrencyContext = React.createContext()

// Pass in default data
// const CurrencyContext = React.createContext('NSD')

export const CurrencyProvider = CurrencyContext.Provider
export const CurrencyConsumer = CurrencyContext.Consumer