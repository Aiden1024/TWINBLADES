// hooks/useKeyNavigation.ts
import { useEffect, useCallback } from 'react';

type KeyAction = () => void;
type KeyMap = Record<string, KeyAction>;

interface KeyNavigationOptions {
  enabled?: boolean;
  preventDefault?: boolean;
  ignoreInputs?: boolean;
  allowCombinations?: boolean;
}

const defaultOptions: KeyNavigationOptions = {
  enabled: true,
  preventDefault: true,
  ignoreInputs: true,
  allowCombinations: false,
};

/**
 * Hook for handling keyboard navigation/shortcuts
 * @param keyMap Object mapping keys to their actions
 * @param options Configuration options
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   useKeyNavigation({
 *     'ArrowLeft': () => console.log('Left pressed'),
 *     'ArrowRight': () => console.log('Right pressed'),
 *     'Delete': handleDelete,
 *     'g': openGrid,
 *   });
 *   
 *   // With options
 *   useKeyNavigation({
 *     'a': action1,
 *     'b': action2,
 *   }, {
 *     enabled: !isLoading,
 *     preventDefault: true,
 *     ignoreInputs: true,
 *     allowCombinations: false,
 *   });
 * 
 *   return <div>...</div>;
 * };
 * ```
 */
const useKeyNavigation = (
  keyMap: KeyMap,
  options: KeyNavigationOptions = defaultOptions
) => {
  const {
    enabled = true,
    preventDefault = true,
    ignoreInputs = true,
    allowCombinations = false,
  } = options;

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // 如果禁用了快捷键，直接返回
    if (!enabled) return;

    // 检查是否在输入框中
    if (ignoreInputs && (
      document.activeElement?.tagName === 'INPUT' ||
      document.activeElement?.tagName === 'TEXTAREA' ||
      document.activeElement?.getAttribute('contenteditable') === 'true'
    )) {
      return;
    }

    // 如果不允许组合键且按下了修饰键，则返回
    if (!allowCombinations && (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey)) {
      return;
    }

    const action = keyMap[event.key];
    if (action) {
      if (preventDefault) {
        event.preventDefault();
      }
      action();
    }
  }, [keyMap, enabled, preventDefault, ignoreInputs, allowCombinations]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyNavigation;
