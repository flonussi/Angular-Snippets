export class MatBreakpoints {
  static readonly GT_XS = '(min-width: 600px)';
  static readonly GT_SM = '(min-width: 960px)';
  static readonly GT_MD = '(min-width: 1280px)';
  static readonly GT_LG = '(min-width: 1920px)';

  static readonly LT_SM = '(max-width: 599px)';
  static readonly LT_MD = '(max-width: 959px)';
  static readonly LT_LG = '(max-width: 1279px)';
  static readonly LT_XL = '(max-width: 1919px)';

  static readonly XS = '(max-width: 599px)';
  static readonly SM = '(min-width: 600px) and (max-width: 959px)';
  static readonly MD = '(min-width: 960px) and (max-width: 1279px)';
  static readonly LG = '(min-width: 1280px) and (max-width: 1919px)';
  static readonly XL = '(min-width: 1920px) and (max-width: 5000px)';  
}
