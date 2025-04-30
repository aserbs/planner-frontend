import { IBase } from "./root.types";

export interface IPomodoroRoundResponse extends IBase {
    isCompleted?: boolean
    totalSeconds: number
}

export interface IPomodoroSessionResponce extends IBase {
    isCompleted?: boolean
    rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionState = Partial<
    Omit<IPomodoroSessionResponce, 'id' | 'createdAt' | 'updatedAt'>
>
export type TypePomodoroRoundState = Partial<
    Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>