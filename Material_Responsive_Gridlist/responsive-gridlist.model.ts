import { MatBreakpoints } from "@app/model/breakpoints.model";

export interface DynamicBreakpoint {
  breakpoint: string;
  columns: number;
}

export const DEFAULT_DYNAMIC_GRIDLIST: DynamicBreakpoint[] = [{breakpoint: MatBreakpoints.XS, columns: 1}, {breakpoint: MatBreakpoints.SM, columns: 2}, {breakpoint: MatBreakpoints.MD, columns: 2}, {breakpoint: MatBreakpoints.GT_MD, columns: 3}];
export const TWO_COLUMN_DYNAMIC_GRIDLIST: DynamicBreakpoint[] = [{breakpoint: MatBreakpoints.XS, columns: 1}, {breakpoint: MatBreakpoints.GT_XS, columns: 2}];