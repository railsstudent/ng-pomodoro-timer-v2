import { STATUS } from '../status.type'

export const BUTTON_STATE_MAP: Record<STATUS, STATUS[]> = {
  RUNNING: ['STOP', 'PAUSE'],
  PAUSE: ['RUNNING', 'STOP'],
  STOP: ['RUNNING'],
}
