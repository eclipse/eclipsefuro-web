/**
 * Use this to enable FBP to your lit element written in typescript.
 */
import { LitElement } from "lit";
import { LitFBPAC } from "./LitFBPAC";
type Constructor<T = {}> = new (...args: any[]) => T;
export declare const LitFBP: <T extends Constructor<LitElement>>(superClass: T) => Constructor<LitFBPAC> & T;
export {};
