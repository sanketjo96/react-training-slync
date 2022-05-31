/**
 * 1. Create context
 * 2. Create provider
 * 3. Create consumer
 */
 import React from "react";

 const TheamContext = React.createContext()
 
 export const TheamProvider = TheamContext.Provider
 export const TheamConsumer = TheamContext.Consumer