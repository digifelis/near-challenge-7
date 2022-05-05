import { storage } from "near-sdk-as"

export function getMessages(): string {
  return storage.getString("message")!
}

// write the given value at the given key to account (contract) storage
export function addMessage(message: string): string {
  storage.set("message", message)
  return "data saved";
}