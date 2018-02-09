/**
 * @file DOMに対する汎用的な処理要求に応じる関数を提供するモジュール
 */

/**
 * クラス追加
 * @param el
 * @param className
 */
export const addClass = (el, className) => {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
};

/**
 * クラス削除
 * @param el
 * @param className
 */
export const removeClass = (el, className) => {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};
