/**
 * Scroll Animation Composable
 * 
 * This composable provides functionality to trigger animations when elements
 * come into view during scrolling.
 * 
 * USAGE:
 * import { useScrollAnimation } from '@/composables/useScrollAnimation'
 * const { observeElement } = useScrollAnimation()
 * observeElement(elementRef.value)
 */

import { onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  // Initialize the Intersection Observer
  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element is in view
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      }
    )
  }

  // Observe an element for scroll animations
  const observeElement = (element: Element | null) => {
    if (!observer) {
      initObserver()
    }
    if (element && observer) {
      observer.observe(element)
    }
  }

  // Observe multiple elements
  const observeElements = (elements: Element[]) => {
    elements.forEach((element) => observeElement(element))
  }

  // Cleanup observer on unmount
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observeElement,
    observeElements,
  }
}