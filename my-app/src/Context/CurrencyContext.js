/**
 * 1. Create context
 * 2. Create provider
 * No need of explicit consumer
 */
import React from "react";

export const CurrencyContext = React.createContext()

// Pass in default data
// const CurrencyContext = React.createContext('NSD')

export const CurrencyProvider = CurrencyContext.Provider