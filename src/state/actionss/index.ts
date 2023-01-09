import { ActionType } from "../action-types";

interface IDepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface IWithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface IBankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = IDepositAction | IWithdrawAction | IBankruptAction;
