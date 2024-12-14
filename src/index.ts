/**
 * 自动缩放指定的HTMLDivElement或其ID对应的元素，以确保其宽度不超过给定的最大值。
 *
 * @param element 要进行缩放的HTMLDivElement元素或其ID字符串。
 * @param maxWidth 元素允许的最大宽度。
 */
export default function autoScaleBox(element: HTMLDivElement | string, maxWidth: number) {
  const box = typeof element === 'string' ? document.getElementById(element) : element
  if (!box) throw new Error('Element not found')

  box.style.whiteSpace = 'nowrap'

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const width = entry.contentRect.width || entry.borderBoxSize?.[0].inlineSize

        if (width > maxWidth) {
          box.style.transform = `scale(${maxWidth / width})`
        }
      })
    })

    resizeObserver.observe(box)
  } else {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const width = box.getBoundingClientRect().width

          if (width > maxWidth) {
            box.style.transform = `scale(${maxWidth / width})`
          }
        }
      })
    })

    observer.observe(box, { childList: true, characterData: true, subtree: true })
  }
}
