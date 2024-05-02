import {EventListener} from "../types";

export const addEventListeners = (element: HTMLElement, listeners: EventListener[]) => {
    listeners.forEach((listener) => {
        element.addEventListener(listener.event, listener.handler)
    })
}

export const removeEventListeners = (element: HTMLElement, listeners: EventListener[]) => {
    listeners.forEach((listener) => {
        element.removeEventListener(listener.event, listener.handler)
    })
}